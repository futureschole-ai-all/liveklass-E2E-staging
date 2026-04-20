# 라이브클래스 E2E 테스트 프로젝트

## 서비스 개요

라이브클래스는 크리에이터가 자신의 사이트를 개설하고 팬(수강생)을 관리하며 지식 상품(라이브/강의)을 수익화할 수 있는 D2C 플랫폼.
크리에이터가 개설한 사이트를 **고객사 사이트**라 칭함.

## 회원 구조

- **크리에이터**: 고객사 사이트를 개설/보유한 유저. 사이트 개설 전 라이브클래스 계정 필요.
- **수강생**: 크리에이터가 개설한 고객사 사이트에 가입해 콘텐츠를 소비하는 유저. 가입 시 라이브클래스 계정이 생성됨.
- 라이브클래스 계정 보유자는 누구든 크리에이터/수강생 모두 될 수 있음.
- 크리에이터/수강생 권한은 **사이트별로 정의된 권한** (계정 자체에는 차이 없음).

## URL 컨텍스트

| 역할 | 진입 URL | 환경변수 |
|------|----------|----------|
| 크리에이터 회원가입/로그인 | 라이브클래스 랜딩 페이지 | `STAGING_LANDING_URL` |
| 수강생 회원가입/로그인 | 고객사 사이트 | `STAGING_SITE_URL_E{1|0}P{1|0}K{1|0}` |

## 고객사 사이트 URL 변수명 규칙

수강생 회원가입 설정 조합에 따라 고객사 사이트를 8개로 구분.

| 변수명 | 이메일 인증 | 휴대폰 인증 | 카카오 싱크 |
|--------|:-----------:|:-----------:|:-----------:|
| `STAGING_SITE_URL_E1P1K1` | ON | ON | ON |
| `STAGING_SITE_URL_E1P1K0` | ON | ON | OFF |
| `STAGING_SITE_URL_E1P0K1` | ON | OFF | ON |
| `STAGING_SITE_URL_E1P0K0` | ON | OFF | OFF |
| `STAGING_SITE_URL_E0P1K1` | OFF | ON | ON |
| `STAGING_SITE_URL_E0P1K0` | OFF | ON | OFF |
| `STAGING_SITE_URL_E0P0K1` | OFF | OFF | ON |
| `STAGING_SITE_URL_E0P0K0` | OFF | OFF | OFF |

> 수강생 테스트 작성 시 어떤 설정 조합의 사이트인지 확인하고 해당 환경변수를 사용.

## Qase 프로젝트 구조

| 프로젝트 코드 | 이름 | 대상 |
|---|---|---|
| `RTC` | Regression Test - Creator | 크리에이터 회원가입/로그인, 사이트 개설 등 |
| `RTS` | Regression Test - Student | 수강생 회원가입/로그인, 콘텐츠 소비 등 |

> `QASE_TESTOPS_PROJECT` 환경변수를 실행할 테스트 대상에 맞게 `RTC` 또는 `RTS`로 설정.

## Precondition 태그 규칙

Qase 테스트 케이스의 Preconditions 필드에 아래 태그를 사용.
`/qase-to-e2e` 스킬이 태그를 읽어 자동으로 helper 함수를 호출하는 스크립트를 생성.

| 태그 | 동작 |
|------|------|
| `[로그아웃 상태]` | 주석만 추가 (Playwright는 매 테스트마다 새 컨텍스트로 시작하므로 항상 보장됨) |
| `[로그인 상태]` | `ensureLoggedIn(page)` 호출 |
| `[카카오 로그인 상태]` | `ensureKakaoLoggedIn(page)` 호출 |
| `[크리에이터 계정 로그인]` | `ensureCreatorLoggedIn(page)` 호출 |
| `[튜토리얼 스킵]` | `skipTutorial(page)` 호출 |

> 새 태그가 필요하면 `tests/helpers/auth.ts`에 함수를 추가하고 이 표에도 등록.
