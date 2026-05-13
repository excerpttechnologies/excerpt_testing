
// // excerpt-server/findUnused.js
// //correct code for images
// const fs = require("fs");
// const path = require("path");

// const clientDir = path.join(__dirname, "../excerpt-client");
// const publicDir = path.join(clientDir, "public");
// const srcDir = path.join(clientDir, "src");
// const unusedDir = path.join(publicDir, "unused");

// // Create "unused" folder if not exists
// if (!fs.existsSync(unusedDir)) {
//   fs.mkdirSync(unusedDir);
// }

// // Recursive file collector
// function getAllFiles(dir, extList, files = []) {
//   if (!fs.existsSync(dir)) return files;
//   fs.readdirSync(dir).forEach((file) => {
//     const fullPath = path.join(dir, file);
//     if (fs.statSync(fullPath).isDirectory()) {
//       getAllFiles(fullPath, extList, files);
//     } else {
//       if (extList.includes(path.extname(fullPath).toLowerCase())) {
//         files.push(fullPath);
//       }
//     }
//   });
//   return files;
// }

// // Step 1: Collect all assets in public/
// const assets = getAllFiles(publicDir, [
//   ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".pdf", ".doc", ".docx"
// ]);

// // Step 2: Collect all source files
// const sourceFiles = getAllFiles(srcDir, [
//   ".js", ".jsx", ".ts", ".tsx", ".html"
// ]);

// // Step 3: Find unused assets
// const unused = [];

// assets.forEach((asset) => {
//   const relativePath = asset.replace(publicDir, "").replace(/\\/g, "/");
//   let used = false;

//   for (let file of sourceFiles) {
//     const content = fs.readFileSync(file, "utf-8");

//     // check both `/images/...` and filename usage
//     if (content.includes(relativePath) || content.includes(path.basename(asset))) {
//       used = true;
//       break;
//     }
//   }

//   if (!used) {
//     unused.push(asset);
//   }
// });

// // Step 4: Move unused assets into public/unused/
// unused.forEach((filePath) => {
//   const fileName = path.basename(filePath);
//   const newLocation = path.join(unusedDir, fileName);

//   fs.renameSync(filePath, newLocation);
//   console.log(`Moved unused: ${fileName}`);
// });

// console.log(`✅ Finished. Total unused moved: ${unused.length}`);


//node modules
// excerpt-server/uncheck.js
const fs = require("fs");
const path = require("path");

const clientDir = path.join(__dirname, "../excerpt-client");
const srcDir = path.join(clientDir, "src");
const nodeModulesDir = path.join(clientDir, "node_modules");
const unusedDir = path.join(clientDir, "unused_modules");

// Create unused_modules if not exists
if (!fs.existsSync(unusedDir)) {
  fs.mkdirSync(unusedDir);
}

// Get all files in src
function getAllFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, files);
    } else {
      files.push(fullPath);
    }
  });
  return files;
}

const sourceFiles = getAllFiles(srcDir);

// Read dependencies from package.json
const pkg = require(path.join(clientDir, "package.json"));
const allDeps = Object.keys(pkg.dependencies || {}).concat(
  Object.keys(pkg.devDependencies || {})
);

const unused = [];

// Step 1: Check which deps are not used in src
allDeps.forEach((dep) => {
  let used = false;
  for (let file of sourceFiles) {
    const content = fs.readFileSync(file, "utf-8");

    // check if imported/required
    if (
      content.includes(`'${dep}'`) ||
      content.includes(`"${dep}"`) ||
      content.includes(dep + "/")
    ) {
      used = true;
      break;
    }
  }
  if (!used) unused.push(dep);
});

// Step 2: Move unused modules into unused_modules/
unused.forEach((dep) => {
  const modulePath = path.join(nodeModulesDir, dep);
  const newPath = path.join(unusedDir, dep);

  if (fs.existsSync(modulePath)) {
    // Ensure parent dirs exist (for scoped packages like @emotion/react)
    fs.mkdirSync(path.dirname(newPath), { recursive: true });

    fs.renameSync(modulePath, newPath);
    console.log(`Moved unused module: ${dep}`);
  }
});

console.log(`✅ Finished. Total unused modules moved: ${unused.length}`);
