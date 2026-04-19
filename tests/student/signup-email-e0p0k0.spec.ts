import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

// 필요한 환경변수: STAGING_SITE_URL_E0P0K0, TEST_PASSWORD

test(qase(1, '휴대폰 번호 인증 OFF & 이메일 인증 OFF & 카카오 싱크 OFF 고객사 사이트 - 신규 회원가입'), async ({ page }) => {
  // 사전 조건: 로그아웃 상태 (Playwright 새 컨텍스트로 항상 보장됨)

  const now = new Date();
  const dateStr = now.toISOString().slice(2, 16).replace(/[-T:]/g, ''); // YYMMDDHHmm (예: 2604191045)
  const testEmail = `jerry.yoon+test${dateStr}@liveklass.com`;

  // Step 1: STAGING_SITE_URL_E0P0K0 고객사 사이트 접속
  await page.goto(process.env.STAGING_SITE_URL_E0P0K0!);
  // Expected: 고객사 사이트 정상 접속
  await expect(page).toHaveURL(process.env.STAGING_SITE_URL_E0P0K0!);

  // Step 2: 사이트 헤더 내 [회원가입] 버튼 선택
  await page.locator('.lk-btn', { hasText: '회원가입' }).first().click();
  // Expected: 라이브 클래스 로그인 페이지로 이동
  await page.waitForURL(/\/login/);

  // Step 3: "아직 회원가입을 하지 않으셨나요? 회원가입" > [회원가입] 선택
  await page.getByText('회원가입').last().click();
  // Expected: 회원가입 수단 페이지로 이동
  await page.waitForURL(/\/signup/);

  // Step 4: [이메일로 가입] 버튼 선택
  await page.getByText('이메일로 가입').click();
  // Expected: 라이브 클래스 이메일 회원가입 페이지로 이동
  await page.waitForURL(/signup\/email/);

  // Step 5: 이메일 입력
  await page.getByPlaceholder('이메일을 입력해 주세요.').fill(testEmail);
  // Expected: 에러 메시지 없이 이메일 정상 입력

  // Step 6: 비밀번호 및 비밀번호 확인 동일하게 입력
  await page.locator('input[placeholder="비밀번호를 입력해 주세요."]').fill(process.env.TEST_PASSWORD!);
  await page.locator('input[placeholder="비밀번호를 한 번 더 입력해 주세요."]').fill(process.env.TEST_PASSWORD!);
  // Expected: 에러 메시지 없이 비밀번호 및 비밀번호 확인 정상 입력

  // Step 7: 이름 입력
  await page.getByPlaceholder('이름을 입력해 주세요.').fill('테스트유저');
  // Expected: 에러 메시지 없이 이름 정상 입력

  // Step 8: 전체 동의 선택
  await page.getByText(/전체 동의/).first().click();
  // Expected: 동의 항목 모두 선택 됨, [회원가입] 버튼 활성화
  const signupBtn = page.getByRole('button', { name: /회원가입/, exact: false });
  await expect(signupBtn).toBeEnabled();

  // Step 9: 활성화 상태의 [회원가입] 버튼 선택
  const [meResponse] = await Promise.all([
    page.waitForResponse(res =>
      res.url().includes('/v1.0/auth/me') && res.status() === 200
    ),
    signupBtn.click(),
  ]);
  // Expected: 회원가입 완료 - 가입한 이메일로 인증된 사용자 확인
  const meBody = await meResponse.json();
  expect(meBody.user.userId).toBe(testEmail);
});
