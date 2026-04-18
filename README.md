# liveklass E2E Testing (Staging)

Playwright + Allure 기반 E2E 테스트 프로젝트입니다.
테스트 결과는 GitHub Pages를 통해 자동으로 웹으로 배포됩니다.

**Allure 리포트:** https://futureschole-ai-all.github.io/liveklass-E2E-staging/

---

## 기술 스택

| 도구 | 용도 |
|------|------|
| [Playwright](https://playwright.dev) | E2E 테스트 실행 |
| [Allure](https://allurereport.org) | 테스트 결과 리포트 시각화 |
| [Qase](https://qase.io) | 테스트 케이스 관리 및 결과 트래킹 |
| GitHub Actions | CI 자동화 |
| GitHub Pages | Allure 리포트 웹 배포 |

---

## 로컬 환경 설정

### 사전 요구사항
- Node.js 20 이상
- Allure CLI ([설치 가이드](https://allurereport.org/docs/install/))

### 설치

```bash
# 의존성 설치
npm install

# Playwright 브라우저 설치
npx playwright install --with-deps
```

### 환경변수 설정

프로젝트 루트에 `.env` 파일을 생성합니다.

```bash
# .env

# 테스트 대상 URL
STAGING_LANDING_URL=https://your-staging-url.com

# Qase 연동 (테스트 결과를 Qase에 업로드하려는 경우)
QASE_TESTOPS_API_TOKEN=your_qase_api_token
QASE_TESTOPS_PROJECT=your_project_code   # 예: RTC

# 회원가입 테스트용 계정 정보 (signup-kakao.spec.ts)
KAKAO_EMAIL=your_kakao_email
KAKAO_PASSWORD=your_kakao_password
TEST_PHONE_NUMBER=01012345678
TEST_PHONE_CODE=123456
```

> `.env` 파일은 `.gitignore`에 포함되어 있어 커밋되지 않습니다.
> 팀원에게 값은 별도로 공유해주세요.

---

## 실행 방법

```bash
# 전체 테스트 실행 (headless, 모든 브라우저)
npm test

# 특정 테스트 파일만 headed 모드로 실행 (디버깅용)
npm run test:headed -- tests/signup-kakao.spec.ts

# UI 모드로 실행 (테스트 선택 및 타임라인 확인)
npm run test:ui

# Allure 리포트 생성
npm run allure:report

# Allure 리포트 로컬에서 열기
npm run allure:open
```

---

## 테스트 구조

```
tests/
  landing.spec.ts        # 랜딩 페이지 주요 버튼 노출 검증
  signup-kakao.spec.ts   # 카카오 소셜 회원가입 플로우 (Qase ID: 1)
```

각 테스트는 `qase(id, '테스트명')` 어노테이션으로 Qase 테스트 케이스와 연결됩니다.

```typescript
import { qase } from 'playwright-qase-reporter';

test(qase(1, '카카오 회원가입'), async ({ page }) => { ... });
```

### 실행 브라우저

| 구분 | 브라우저 |
|------|----------|
| Desktop | Chrome |
| Mobile | iPhone 13, Galaxy S9+ |

---

## CI/CD 흐름

```
코드 push (main)
      ↓
GitHub Actions 트리거
      ↓
Playwright 테스트 실행 (3개 브라우저: Chrome, iPhone 13, Galaxy S9+)
      ↓
테스트 결과 Qase에 자동 업로드 (Test Run 생성)
      ↓
Allure 리포트 생성
      ↓
gh-pages 브랜치에 배포
      ↓
GitHub Pages에서 Allure 리포트 확인 가능
```

push 하면 자동으로 위 과정이 실행됩니다.
수동 실행은 GitHub → Actions → **E2E Tests & Allure Report** → **Run workflow**

---

## GitHub Secrets 설정

CI에서 환경변수를 사용하려면 GitHub Secrets 등록이 필요합니다.

**Settings → Secrets and variables → Actions → New repository secret**

| Name | Value |
|------|-------|
| `STAGING_LANDING_URL` | staging 환경 URL |
| `QASE_TESTOPS_API_TOKEN` | Qase API 토큰 ([발급 경로](https://app.qase.io/user/api/token)) |
| `QASE_TESTOPS_PROJECT` | Qase 프로젝트 코드 (예: `RTC`) |
| `KAKAO_EMAIL` | 테스트용 카카오 계정 이메일 |
| `KAKAO_PASSWORD` | 테스트용 카카오 계정 비밀번호 |
| `TEST_PHONE_NUMBER` | 테스트용 휴대폰 번호 |
| `TEST_PHONE_CODE` | 테스트용 SMS 인증 코드 |

---

## Qase 연동

테스트 결과는 실행 시마다 Qase에 자동으로 **Test Run**이 생성되어 업로드됩니다.

**테스트 결과 확인:** [Qase 대시보드](https://app.qase.io)

### Qase 프로젝트 구조

| 항목 | 값 |
|------|-----|
| 프로젝트 코드 | `RTC` |
| 연동 방식 | `playwright-qase-reporter` (testops 모드) |
| Test Run | 매 실행마다 자동 생성 및 완료 처리 |

### Qase 없이 로컬 실행

Qase 업로드 없이 로컬에서만 테스트하려면 `.env`에서 `QASE_TESTOPS_API_TOKEN`을 제거하거나 빈 값으로 두면 됩니다. Qase 리포터는 토큰이 없을 경우 업로드를 건너뜁니다.

---

## Claude Code 스킬 사용 (선택사항)

이 프로젝트에는 `/create-e2e-test` 스킬이 포함되어 있습니다.
자연어로 E2E 테스트를 자동 생성하려면 **Playwright MCP** 설정이 필요합니다.

### Playwright MCP 설정

`~/.claude/settings.json` 파일에 아래 내용을 추가합니다.

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

### 스킬 사용 방법

```bash
# 슬래시 커맨드로 호출
/create-e2e-test 로그인 페이지

# 또는 자연어로 요청
"로그인 페이지 E2E 테스트 만들어줘"
```

---

## 새 테스트 시나리오 추가 방법

1. `tests/` 디렉토리에 `*.spec.ts` 파일 생성
2. 로컬에서 `npm test`로 동작 확인
3. `main` 브랜치에 push → 자동으로 CI 실행 및 리포트 배포
