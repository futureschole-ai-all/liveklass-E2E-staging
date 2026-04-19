import { Page } from '@playwright/test';

/**
 * 사용 가능한 Qase precondition 태그:
 *   [로그아웃 상태]           → ensureLoggedOut()
 *   [로그인 상태]             → ensureLoggedIn()
 *   [카카오 로그인 상태]      → ensureKakaoLoggedIn()
 *   [크리에이터 계정 로그인]  → ensureCreatorLoggedIn()
 */

export async function ensureLoggedOut(page: Page) {
  await page.goto('');
  const userMenu = page.locator('[aria-label*="내 계정"], [aria-label*="프로필"], [data-testid="user-menu"]').first();
  if (await userMenu.isVisible({ timeout: 3000 }).catch(() => false)) {
    await userMenu.click();
    const logoutBtn = page.getByRole('button', { name: /로그아웃/ }).or(page.getByRole('link', { name: /로그아웃/ }));
    await logoutBtn.first().click();
    await page.waitForLoadState('networkidle');
  }
}

export async function ensureLoggedIn(page: Page) {
  await page.goto('');
  const loginBtn = page.getByRole('link', { name: /로그인/ }).or(page.getByRole('button', { name: /로그인/ }));
  if (!await loginBtn.first().isVisible({ timeout: 3000 }).catch(() => false)) return;

  await loginBtn.first().click();
  await page.waitForLoadState('networkidle');
  await page.fill('input[type="email"]', process.env.TEST_EMAIL!);
  await page.fill('input[type="password"]', process.env.TEST_PASSWORD!);
  await page.getByRole('button', { name: /로그인/, exact: true }).click();
  await page.waitForLoadState('networkidle');
}

export async function ensureKakaoLoggedIn(page: Page) {
  await page.goto('');
  const loginBtn = page.getByRole('link', { name: /로그인/ }).or(page.getByRole('button', { name: /로그인/ }));
  if (!await loginBtn.first().isVisible({ timeout: 3000 }).catch(() => false)) return;

  await loginBtn.first().click();
  await page.waitForLoadState('networkidle');
  await page.getByText('카카오로 시작하기').click();
  await page.waitForURL(/kakao/i);
  await page.fill('input[name="loginId"]', process.env.KAKAO_EMAIL!);
  await page.fill('input[name="password"]', process.env.KAKAO_PASSWORD!);
  await page.getByRole('button', { name: '로그인', exact: true }).click();
  await page.waitForLoadState('networkidle');
}

export async function ensureCreatorLoggedIn(page: Page) {
  await ensureLoggedIn(page);
}
