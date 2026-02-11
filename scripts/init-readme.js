#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { execSync } = require("child_process");

// get current folder name
const folder = path.basename(process.cwd());

// must be like 07-tip-calculator
const match = folder.match(/^(\d{2})-(.+)$/);

if (!match) {
  console.log("❌ Run this inside a project folder like 07-tip-calculator");
  process.exit(1);
}

const number = match[1];
const name = match[2];

const readmePath = path.join(process.cwd(), "README.md");

// stop if already exists
if (fs.existsSync(readmePath)) {
  console.log("⚠️ README already exists. Edit manually.");
  process.exit(0);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter short description: ", (desc) => {
  rl.question("Enter live demo link: ", (link) => {

    const content = `# 🚀 Project ${number} — ${name.replace(/-/g, " ")}

## 🌐 Live Demo
👉 ${link || "Add later"}

---

## 📖 Description
${desc}

---

## ✨ Features
- Core functionality
- Clean UI
- Responsive design

---

## 🛠 Tech Stack
- HTML
- CSS
- JavaScript

---

## ▶ Run Locally
Open index.html in your browser

---

Built as part of the 100 JavaScript Projects Challenge
`;

    fs.writeFileSync(readmePath, content);

    execSync("git add README.md", { stdio: "inherit" });
    execSync(`git commit -m "docs: add README for ${number}-${name}"`, {
      stdio: "inherit",
    });

    console.log("✅ README created and committed!");

    rl.close();
  });
});
