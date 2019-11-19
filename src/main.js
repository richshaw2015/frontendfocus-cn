'use strict';

const fs = require('fs');
const path = require('path');

const Turndown = require('turndown');
const RssParser = require('rss-parser');

const trunFefmd = require('./turnfef');

const turndownService = new Turndown();
const rssParser = new RssParser();

(async () => {
    const feed = await rssParser.parseURL('https://frontendfoc.us/rss');

    feed.items.forEach(item => {
        const issueNum = /\/(\d+)$/.exec(item.link)[1];
        const htmlStr = item.content.trim();
        const mdStr = turndownService.turndown(htmlStr);
        const fefMd = trunFefmd(mdStr);

        const issueSrc = path.resolve(__dirname, `../docs/issue-${issueNum}-en.md`);
        fs.writeFile(issueSrc, fefMd, function (err) {
            if (err) {
                console.error(err.message);
                return
            }
            console.log(`${issueSrc} 文件生成成功`)
        });
    });

})();



