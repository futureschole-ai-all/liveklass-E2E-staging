const fs = require('fs');
const path = require('path');

const HISTORY_LIMIT = 10;
const srcDir = path.join(__dirname, '../allure-report/history');
const destDir = path.join(__dirname, '../allure-results/history');

if (!fs.existsSync(srcDir)) process.exit(0);

fs.mkdirSync(destDir, { recursive: true });

for (const file of fs.readdirSync(srcDir)) {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, file);
  const data = JSON.parse(fs.readFileSync(srcFile, 'utf-8'));

  const trimmed = Array.isArray(data) ? data.slice(0, HISTORY_LIMIT) : data;
  fs.writeFileSync(destFile, JSON.stringify(trimmed, null, 2));
}

console.log(`History copied (limit: ${HISTORY_LIMIT})`);
