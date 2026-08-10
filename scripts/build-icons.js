"use strict";

const fs = require("fs");
const path = require("path");
const camelcase = require("camelcase");
const svgr = require("@svgr/core").default;

const SRC_DIR = path.join(__dirname, "..", "src", "icons", "all");
const OUT_DIR = path.join(__dirname, "..", "src", "icons", "tsx");

const template = (
  { template },
  opts,
  { imports, interfaces, componentName, jsx, exports }
) => {
  const plugins = ["jsx"];
  if (opts.typescript) {
    plugins.push("typescript");
  }
  const typeScriptTpl = template.smart({ plugins });

  return typeScriptTpl.ast`
    ${imports}
    import { IconStyled } from "../styles";
    ${interfaces}

    const ${componentName} = ({className, ...props}:React.SVGProps<SVGSVGElement>): JSX.Element => (
        <IconStyled className={className}>{${jsx}}</IconStyled>
    );
    ${exports}
  `;
};

async function main() {
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

    const jsCode = await svgr(
      svgContent,
      {
        template,
        typescript: true,
        plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"]
      },
      { componentName: iconName }
    );

    fs.writeFileSync(path.join(OUT_DIR, `${iconName}.tsx`), jsCode, "utf-8");
    allIcons.push(iconName);
  }

  allIcons.sort();
  const indexContent =
    allIcons
      .map((name) => `export { default as ${name} } from "./${name}";`)
      .join("\n") + "\n";
  fs.writeFileSync(path.join(OUT_DIR, "index.tsx"), indexContent, "utf-8");

  console.log(`Generated ${allIcons.length} icon components in ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
