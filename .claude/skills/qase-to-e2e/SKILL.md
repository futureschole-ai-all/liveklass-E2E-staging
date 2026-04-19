---
name: qase-to-e2e
description: Qase에 작성된 테스트 케이스 시나리오를 읽어서 Playwright E2E 스크립트를 자동 생성하는 스킬. "Qase 케이스로 테스트 만들어줘", "RTC-2 스크립트 짜줘", "qase 시나리오 테스트 작성" 등의 요청 시 자동 로드.
---

# Qase → E2E 스크립트 생성기

너는 Qase에 작성된 테스트 케이스를 읽어서 Playwright E2E 테스트 스크립트를 생성하는 QA 자동화 전문가야.

## 사용 방법

```
/qase-to-e2e RTC-2
/qase-to-e2e 2
```

## 수행 순서

### 1. Qase API로 테스트 케이스 읽기

$ARGUMENT에서 케이스 ID를 파싱해줘.
- `RTC-2` 형태면 프로젝트는 `RTC`, 케이스 ID는 `2`
- 숫자만 입력하면 `.env`의 `QASE_TESTOPS_PROJECT` 값을 프로젝트로 사용

`.env` 파일에서 `QASE_TESTOPS_API_TOKEN`과 `QASE_TESTOPS_PROJECT`를 읽은 다음, 아래 명령어로 케이스를 조회해줘:

```bash
curl -s -X GET "https://api.qase.io/v1/case/{PROJECT}/{CASE_ID}" \
  -H "Token: {QASE_TESTOPS_API_TOKEN}" \
  -H "Content-Type: application/json"
```

### 2. 시나리오 분석

응답 JSON에서 아래 항목을 추출해줘:
- `title`: 테스트 케이스 제목
- `description`: 테스트 설명 (있는 경우)
- `preconditions`: 사전 조건 (있는 경우)
- `steps`: 테스트 스텝 배열
  - `action`: 수행할 동작
  - `expected_result`: 기대 결과

### 3. 사전 조건(Preconditions) 처리

`preconditions` 텍스트에서 `[태그]` 형식의 키워드를 추출해줘.
아래 매핑 테이블을 참고해서 대응하는 helper 함수를 import하고 테스트 시작 전에 호출해줘.

| Qase precondition 태그 | helper 함수 | import 경로 |
|---|---|---|
| `[로그아웃 상태]` | `ensureLoggedOut(page)` | `./helpers/auth` |
| `[로그인 상태]` | `ensureLoggedIn(page)` | `./helpers/auth` |
| `[카카오 로그인 상태]` | `ensureKakaoLoggedIn(page)` | `./helpers/auth` |
| `[크리에이터 계정 로그인]` | `ensureCreatorLoggedIn(page)` | `./helpers/auth` |

- 태그가 매핑 테이블에 없으면 새 helper 함수를 `tests/helpers/auth.ts`에 추가하고 매핑 테이블도 업데이트해줘.
- 사전 조건이 없으면 helper import/호출을 생략해줘.

**스크립트 예시 (사전 조건이 있는 경우):**
```typescript
import { ensureLoggedOut } from './helpers/auth';

test(qase(2, '...'), async ({ page, context }) => {
  // 사전 조건
  await ensureLoggedOut(page);

  // Step 1: ...
});
```

### 5. Playwright 스크립트 생성

추출한 시나리오를 기반으로 `tests/` 디렉토리에 스크립트 파일을 생성해줘.
파일명은 케이스 제목을 kebab-case로 변환해서 사용해줘. (예: `tests/kakao-signup.spec.ts`)

**스크립트 작성 규칙:**
- `import { qase } from 'playwright-qase-reporter'` 반드시 포함
- `test(qase({CASE_ID}, '{title}'), async ({ page, context }) => { ... })` 형태로 Qase ID 연동
- 각 step은 `// Step N: {action}` 주석으로 구분
- 기대 결과는 `// Expected: {expected_result}` 주석으로 표시
- `baseURL`은 `playwright.config.ts`에 설정되어 있으므로 `page.goto('')`로 시작
- 새 탭으로 열리는 동작은 `context.waitForEvent('page')` + `Promise.all` 패턴 사용
- 로그인 정보, 전화번호 등 민감한 값은 `process.env.XXX` 형태로 처리
- 모든 locator는 가능하면 `getByRole`, `getByText` 등 시맨틱 셀렉터 우선 사용

### 6. 스크립트 실행 및 검증

생성한 스크립트를 실행해줘:

```bash
npm run test:headed -- tests/{파일명}.spec.ts
```

실행 결과를 확인하고:
- 실패하면 원인을 분석해서 스크립트를 수정해줘
- 성공하면 완료 메시지와 함께 생성된 파일 경로를 알려줘
