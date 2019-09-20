import { FuseBox, WebIndexPlugin } from "fuse-box";
import * as express from "express";

const watch = process.argv.indexOf("--watch") > -1;

const fuse = FuseBox.init({
  homeDir: "src",
  target: "browser@es5",
  output: "dist/$name.js",
  useJsNext: true,
  useTypescriptCompiler: true,
  plugins: [WebIndexPlugin({ template: "./public/index.html" })]
});

const app = fuse.bundle("app").instructions("> index.tsx");

if (watch) {
  const port = process.env.PORT == "" ? 3000 : parseInt(process.env.PORT);

  fuse.dev({ open: true, port: port });

  app.hmr().watch();
}

fuse.run();
