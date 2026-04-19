---
name: qase-sync
description: Qase 테스트 케이스의 스텝 변경사항을 기존 Playwright 스크립트에 반영하는 스킬. "Qase 스텝 업데이트", "케이스 변경사항 반영", "스크립트 보완해줘" 등의 요청 시 자동 로드.
---

# Qase 스텝 변경사항 동기화

너는 Qase 테스트 케이스의 변경사항을 기존 Playwright 스크립트에 반영하는 QA 자동화 전문가야.

## 사용 방법

```
/qase-sync RTS-1
/qase-sync RTC-2
```

## 수행 순서

### 1. Qase API로 최신 케이스 조회

$ARGUMENT에서 프로젝트와 케이스 ID를 파싱해줘. (예: `RTS-1` → 프로젝트 `RTS`, ID `1`)

`.env`에서 `QASE_TESTOPS_API_TOKEN`을 읽어 조회해줘:

```bash
curl -s -X GET "https://api.qase.io/v1/case/{PROJECT}/{CASE_ID}" \
  -H "Token: {QASE_TESTOPS_API_TOKEN}" \
  -H "Content-Type: application/json"
```

응답에서 `steps` 배열 전체를 추출해줘.

### 2. 기존 스크립트 탐색

`tests/` 디렉토리에서 `qase({CASE_ID},` 패턴을 포함한 파일을 찾아줘:

```bash
grep -r "qase({CASE_ID}," tests/
```

파일을 찾으면 현재 스크립트에 몇 번 스텝까지 구현되어 있는지 확인해줘.
`// Step N:` 주석을 기준으로 마지막 스텝 번호를 파악해줘.

### 3. 변경사항 비교

- **추가된 스텝**: Qase 스텝 수 > 스크립트 스텝 수 → 누락된 스텝 추가 필요
- **변경된 스텝**: Qase의 `action` 또는 `expected_result`가 스크립트 주석과 다름 → 주석 및 로직 업데이트 필요

변경사항을 명확히 설명해줘.

### 4. 스크립트 보완

변경사항을 스크립트에 반영해줘.

**스텝 추가 규칙:**
- `// Step N: {action}` 주석 추가
- `// Expected: {expected_result}` 주석 추가
- 기존 스크립트의 locator 패턴과 일관성 유지
- 민감한 값은 `process.env.XXX` 처리
- 이미 구현된 스텝은 건드리지 않음

**변경된 스텝 처리:**
- 주석만 바뀐 경우 → 주석만 수정
- 동작이 바뀐 경우 → 사용자에게 변경 내용을 설명하고 수정

### 5. 테스트 실행 및 검증

수정된 스크립트를 실행해줘:

```bash
npm run test:headed -- {파일경로}
```

- 성공하면 변경 내용 요약과 함께 완료 보고
- 실패하면 원인 분석 후 수정
