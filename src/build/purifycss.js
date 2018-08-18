// const purify = require("purify-css")
// const path = require('path');
// const htmlPath = path.join(__dirname, '../../dist/**/*.html');
// const cssPath = path.join(__dirname, '../../dist/main.css');

// var content = [htmlPath];
// var css = [cssPath];
// let options = {
//     output: cssPath
// }
// purify(content, css, options)



//With PURGE css
// const path = require('path');
// const Purgecss = require("purgecss")
// const htmlPath = path.join(__dirname, '../../dist/**/*.html');
// const cssPath = path.join(__dirname, '../../dist/main.css');
// const purgeCss = new Purgecss({
//   content: [htmlPath],
//   css: [cssPath]
// })
// const result = purgeCss.purge();
// console.log(result);
// var fs = require('fs');
// fs.writeFile(cssPath, result[0].css , function(err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// }); 