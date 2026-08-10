"use strict";

const fs = require("fs");
const path = require("path");
const camelcase = require("camelcase");
const { compile } = require("@vue/compiler-dom");

const SRC_DIR = path.join(__dirname, "..", "src", "icons", "all");
const OUT_DIR = path.join(__dirname, "..", "publish-icons-vue");

function svgToVue(svgContent, iconName) {
  let { code } = compile(
    `<span :class="class">${svgContent.replace(
      'xmlns: "http://www.w3.org/2000/svg"',
      'xmlns: "http://www.w3.org/2000/svg", ..._ctx'
    )}</span>`,
    { mode: "module" }
  );
  code = code.replace("export function", "export default function");
  code = code.replace(
    'xmlns: "http://www.w3.org/2000/svg"',
    'xmlns: "http://www.w3.org/2000/svg", ..._ctx'
  );

  const type = `import type { FunctionalComponent, SVGAttributes, VNodeProps } from 'vue';\n declare const ${iconName}: FunctionalComponent<SVGAttributes & VNodeProps>;\n export default ${iconName};`;

  return { code, type };
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const svgFiles = fs
    .readdirSync(SRC_DIR)
    .filter((file) => file.endsWith(".svg"))
    .sort();

  const allIcons = [];

  for (const file of svgFiles) {
    const stem = path.basename(file, ".svg");
    const iconName = camelcase(["Icon", stem], { pascalCase: true });
    const svgContent = fs.readFileSync(path.join(SRC_DIR, file), "utf-8");

    const { code, type } = svgToVue(svgContent, iconName);

    fs.writeFileSync(path.join(OUT_DIR, `${iconName}.js`), code, "utf-8");
    fs.writeFileSync(path.join(OUT_DIR, `${iconName}.d.ts`), type, "utf-8");
    allIcons.push(iconName);
  }

  const indexContent =
    allIcons
      .map((name) => `export { default as ${name} } from "./${name}";`)
      .join("\n") + "\n";
  fs.writeFileSync(path.join(OUT_DIR, "index.js"), indexContent, "utf-8");
  fs.writeFileSync(path.join(OUT_DIR, "index.d.ts"), indexContent, "utf-8");

  console.log(`Generated ${allIcons.length} Vue icon components in ${OUT_DIR}`);
}

main();
