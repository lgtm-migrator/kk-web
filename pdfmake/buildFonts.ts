import * as fs from "fs-extra";

import { exec } from "child_process";

const main = async () => {
  fs.copy("pdfmake/fonts", "node_modules/pdfmake/examples/fonts");

  exec("npm i", { cwd: "node_modules/pdfmake" }, () => {
    exec("npx gulp buildFonts", {
      cwd: "node_modules/pdfmake",
    });
  });
};

main();
