import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

// 사전 조건: 라이브클래스 로그아웃 상태
// 필요한 환경변수: KAKAO_EMAIL, KAKAO_PASSWORD, TEST_PHONE_NUMBER, TEST_PHONE_CODE

test(qase(1, '카카오 회원가입'), async ({ page, context }) => {
  // Step 1: 랜딩 페이지 내 [무료로 시작하기] 버튼 선택 (새 탭으로 열림)
  await page.goto('');
  const [signupPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: /무료로 시작하기/ })
      .or(page.getByRole('button', { name: /무료로 시작하기/ }))
      .first()
      .click(),
  ]);
  await signupPage.waitForLoadState('networkidle');
  console.log('이동된 URL:', signupPage.url());

  // Step 2: [카카오로 시작하기] 버튼 선택 → 같은 탭에서 카카오 로그인 페이지로 리다이렉트
  await signupPage.getByText('카카오로 시작하기').click();
  await signupPage.waitForURL(/kakao/i);

  // Expected: 카카오 로그인 페이지로 이동
  await expect(signupPage).toHaveURL(/kakao/i);

  // Step 3: 카카오 로그인 완료
  await signupPage.fill('input[name="loginId"]', process.env.KAKAO_EMAIL!);
  await signupPage.fill('input[name="password"]', process.env.KAKAO_PASSWORD!);
  await signupPage.getByRole('button', { name: '로그인', exact: true }).click();
  await signupPage.waitForLoadState('networkidle');

  // 카카오 동의 화면이 나오는 경우 처리
  const agreeBtn = signupPage.getByRole('button', { name: /동의|허용/ }).first();
  if (await agreeBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
    await agreeBtn.click();
    await signupPage.waitForLoadState('networkidle');
  }

  // Expected: 회원가입 페이지로 이동, 이메일/이름 자동 입력 상태
  await expect(signupPage.locator('input[type="email"]').first()).not.toBeEmpty();
  await expect(signupPage.locator('input[placeholder*="이름"]').first()).not.toBeEmpty();

  // Step 4: 유효한 휴대폰 번호 입력 후 [인증] 버튼 선택
  await signupPage.locator('input[placeholder*="휴대폰"]')
    .or(signupPage.locator('input[type="tel"]'))
    .first()
    .fill(process.env.TEST_PHONE_NUMBER!);
  await signupPage.getByRole('button', { name: /인증/ }).first().click();

  // Expected: 인증 코드 발송
  await expect(signupPage.locator('input[placeholder*="인증"]').first()).toBeVisible();

  // Step 5: 올바른 인증 코드 입력 후 [확인] 버튼 선택
  await signupPage.locator('input[placeholder*="인증"]').first().fill(process.env.TEST_PHONE_CODE!);
  await signupPage.getByRole('button', { name: /확인/ }).first().click();

  // Expected: 휴대폰 번호 인증 완료
  await expect(signupPage.getByText(/인증.*완료|완료/)).toBeVisible();

  // Step 6: 필수 동의 항목 선택
  const requiredCheckboxes = signupPage.locator('input[type="checkbox"]');
  const count = await requiredCheckboxes.count();
  for (let i = 0; i < count; i++) {
    await requiredCheckboxes.nth(i).check();
  }

  // Expected: [회원가입] 버튼 활성화
  const signupBtn = signupPage.getByRole('button', { name: /회원가입/ });
  await expect(signupBtn).toBeEnabled();

  // Step 7: 활성화 상태의 [회원가입] 버튼 선택
  await signupBtn.click();

  // Expected: 회원가입 완료 후 사이트 개설 페이지로 이동
  await expect(signupPage).toHaveURL(/create|setup|개설/i);
});
