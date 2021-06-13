const obfuscator = require("javascript-obfuscator");
const fs = require("fs/promises");
async function main() {
  const source = await fs.readFile("index.js", "utf8");
  const obfuscationResult = obfuscator.obfuscate(source, {
    target: "node",
    optionsPreset: "medium-obfuscation",
    disableConsoleOutput: false,
  });

  await fs.writeFile("done.js", obfuscationResult.getObfuscatedCode(), {
    encoding: "utf8",
  });
}

main().catch(console.error);
