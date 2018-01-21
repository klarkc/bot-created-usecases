var scrape = require('website-scraper');
var argv = require('yargs').argv;

var options = {
    urls: typeof argv.url === 'array'?argv.url:[argv.url],
    directory: argv.dist||'dist',
    recursive: argv.recursive||true,
    maxRecursiveDepth: argv.depth||1
};

// with promise
scrape(options).then(console.log).catch(console.error);