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

### 3. Playwright 스크립트 생성

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

### 4. 스크립트 실행 및 검증

생성한 스크립트를 실행해줘:

```bash
npm run test:headed -- tests/{파일명}.spec.ts
```

실행 결과를 확인하고:
- 실패하면 원인을 분석해서 스크립트를 수정해줘
- 성공하면 완료 메시지와 함께 생성된 파일 경로를 알려줘
