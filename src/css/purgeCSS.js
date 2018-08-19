const Purgecss = require('purgecss');
const path = require('path');
const cssPath = path.join(__dirname, '../../dist/main.css');
const indexFile = path.join(__dirname, '../../index.html');
const vueCode = path.join(__dirname, '../**/*.vue');
const fs = require('fs');
class PurgeTailwind {
    static extract(content) {
        return content.match(/[A-Za-z0-9_:-]+/g) || [];
    }
  }
const purgecss = new Purgecss({
    content: [indexFile, vueCode],
    css: [cssPath],
    extractors: [{
        extractor: PurgeTailwind,
        extensions: ['vue', 'html']
    }]
});
const result = purgecss.purge()[0].css

fs.writeFileSync(cssPath, result);

