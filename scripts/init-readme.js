#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { execSync } = require("child_process");

const ROOT = process.cwd();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// helper: capitalize words
const formatName = (str) =>
  str
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

rl.question("Enter project number (e.g. 01): ", (numInput) => {
  const number = numInput.padStart(2, "0");

  // find folder automatically
  const folders = fs.readdirSync(ROOT);
  const folder = folders.find((f) => f.startsWith(number + "-"));

  if (!folder) {
    console.log("❌ Project folder not found");
    process.exit(1);
  }

  const readmePath = path.join(ROOT, folder, "README.md");

  if (fs.existsSync(readmePath)) {
    console.log("⚠️ README already exists. Edit manually.");
    process.exit(0);
  }

  const rawName = folder.split("-").slice(1).join("-");
  const prettyName = formatName(rawName);

  rl.question("Enter short description: ", (desc) => {
    rl.question("Enter live demo link: ", (link) => {

      const content = `# 🚀 Project ${number} — ${prettyName}

## 🌐 Live Demo
👉 [View Live Demo](${link || "https://your-demo-link.com"})

---

## 📖 Description
${desc}

---

## 🛠️ Built With
- HTML
- CSS
- JavaScript

---

<div align="center">

### 💼 [Abhishek88788](https://github.com/Abhishek88788)

Built as part of [100 JavaScript Projects Challenge](https://github.com/Abhishek88788/100-js-projects)

⭐ Star this repo if you found it helpful!

</div>
`;

      fs.writeFileSync(readmePath, content);

      execSync(`git add ${folder}/README.md`, { stdio: "inherit" });
      execSync(
        `git commit -m "docs: add README for ${number}-${rawName}"`,
        { stdio: "inherit" }
      );

      console.log(`✅ README created for ${folder} and committed!`);

      rl.close();
    });
  });
});
