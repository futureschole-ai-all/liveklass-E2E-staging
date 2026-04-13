# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing.spec.ts >> 랜딩 페이지 - 주요 버튼 노출 >> [무료로 시작하기] 버튼이 보인다
- Location: tests/landing.spec.ts:19:7

# Error details

```
Error: page.goto: url: expected string, got function
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('랜딩 페이지 - 주요 버튼 노출', () => {
  4  |   test('[로그인] 버튼이 보인다', async ({ page }) => {
  5  |     await page.goto('/');
  6  | 
  7  |     // 모바일 뷰포트(768px 미만)에서는 햄버거 메뉴를 열어야 로그인 버튼이 노출됨
  8  |     const viewportWidth = page.viewportSize()?.width ?? 1280;
  9  |     if (viewportWidth < 768) {
  10 |       await page.click('button[aria-label="Open Menu"]');
  11 |     }
  12 | 
  13 |     const loginBtn = page.getByRole('link', { name: /로그인/ }).or(
  14 |       page.getByRole('button', { name: /로그인/ })
  15 |     );
  16 |     await expect(loginBtn.first()).toBeVisible();
  17 |   });
  18 | 
  19 |   test('[무료로 시작하기] 버튼이 보인다', async ({ page }) => {
> 20 |     await page.goto(URL);
     |                ^ Error: page.goto: url: expected string, got function
  21 |     await page.goto('/');
  22 |     const startBtn = page.getByRole('link', { name: /무료로 시작하기/ }).or(
  23 |       page.getByRole('button', { name: /무료로 시작하기/ })
  24 |     );
  25 |     await expect(startBtn.first()).toBeVisible();
  26 |   });
  27 | });
  28 | 
```