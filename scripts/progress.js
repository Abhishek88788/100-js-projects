#!/usr/bin/env node

const fs = require("fs");
const readline = require("readline");
const { execSync } = require("child_process");

const README = "README.md";

const mode = process.argv[2];

if (!["complete", "undo"].includes(mode)) {
  console.log("\nUsage:");
  console.log("  npm run done   → mark complete");
  console.log("  npm run undo   → uncheck project\n");
  process.exit(1);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter project number: ", (input) => {
  try {
    const num = input.trim().padStart(2, "0");

    let content = fs.readFileSync(README, "utf8");

    const unchecked = new RegExp(`- \\[ \\] ${num}-([a-z0-9-]+)`);
    const checked = new RegExp(`- \\[x\\] ${num}-([a-z0-9-]+)`);

    let name;

    // ===== COMPLETE =====
    if (mode === "complete") {
      const match = content.match(unchecked);
      if (!match) throw new Error("Project already completed or not found");

      name = match[1];
      content = content.replace(`- [ ] ${num}-${name}`, `- [x] ${num}-${name}`);
    }

    // ===== UNDO =====
    if (mode === "undo") {
      const match = content.match(checked);
      if (!match) throw new Error("Project is not completed yet");

      name = match[1];
      content = content.replace(`- [x] ${num}-${name}`, `- [ ] ${num}-${name}`);
    }

    // ✅ FIXED COUNTING (only checklist lines)
    const completed = (content.match(/- \[x\] \d{2}-/g) || []).length;

    // update progress
    content = content.replace(
      /Progress:\s*\d+\/100/,
      `Progress: ${completed}/100`
    );

    fs.writeFileSync(README, content);

    const action = mode === "complete" ? "complete" : "undo";
    const message = `docs: ${action} ${num}-${name} (${completed}/100)`;

    // commit only (NO PUSH)
    execSync("git add README.md", { stdio: "inherit" });
    execSync(`git commit -m "${message}"`, { stdio: "inherit" });

    console.log(`\n✅ ${message}`);
    console.log("👉 Now push manually if you want: git push\n");

  } catch (err) {
    console.log("\n❌", err.message, "\n");
  }

  rl.close();
});
