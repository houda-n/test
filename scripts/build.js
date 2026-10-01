const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const distDirectory = join(process.cwd(), "dist");

mkdirSync(distDirectory, { recursive: true });

writeFileSync(
  join(distDirectory, "index.html"),
  [
    "<!doctype html>",
    '<html lang="fr">',
    "  <head>",
    '    <meta charset="utf-8">',
    "    <title>Exercice 2 - Artifact</title>",
    "  </head>",
    "  <body>",
    "    <h1>Build genere par la CI</h1>",
    "  </body>",
    "</html>",
    "",
  ].join("\n"),
);
