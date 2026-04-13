import { test, expect } from '@playwright/test';

const URL = 'https://www.liveklass.com/test/stage';

test.describe('랜딩 페이지 - 주요 버튼 노출', () => {
  test('[로그인] 버튼이 보인다', async ({ page }) => {
    await page.goto(URL);

    // 모바일 뷰포트(768px 미만)에서는 햄버거 메뉴를 열어야 로그인 버튼이 노출됨
    const viewportWidth = page.viewportSize()?.width ?? 1280;
    if (viewportWidth < 768) {
      await page.click('button[aria-label="Open Menu"]');
    }

    const loginBtn = page.getByRole('link', { name: /로그인/ }).or(
      page.getByRole('button', { name: /로그인/ })
    );
    await expect(loginBtn.first()).toBeVisible();
  });

  test('[무료로 시작하기] 버튼이 보인다', async ({ page }) => {
    await page.goto(URL);
    const startBtn = page.getByRole('link', { name: /무료로 시작하기/ }).or(
      page.getByRole('button', { name: /무료로 시작하기/ })
    );
    await expect(startBtn.first()).toBeVisible();
  });
});
