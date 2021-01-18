'use strict';

const fs = require('fs');
const path = require('path');

const Turndown = require('turndown');
const RssParser = require('rss-parser');
// const { youdao, baidu, google } = require('translation.js')

const trunFefmd = require('./turnfef');

const turndownService = new Turndown();
const rssParser = new RssParser();

(async () => {
    const feed = await rssParser.parseURL('https://cprss.s3.amazonaws.com/frontendfoc.us.xml');

    feed.items.forEach(item => {
        const issueNum = /\/(\d+)$/.exec(item.link)[1];

        // 英文文件
        const issueEn = path.resolve(__dirname, `../docs/issue-${issueNum}-en.md`);
        // 目标中文文件
        const issueCn = path.resolve(__dirname, `../docs/issue-${issueNum}.md`);
        // 机器翻译文件
        // const botRef = path.resolve(__dirname, `../docs/issue-${issueNum}-bot.md`);

        if (fs.existsSync(issueEn)) {
            console.log(`跳过处理文件：| ${issueEn}`)
        } else {
            const htmlStr = item.content.trim();
            const mdStr = turndownService.turndown(htmlStr);
            const fefMd = trunFefmd(mdStr);

            // 写文件
            fs.writeFile(issueEn, fefMd, function (err) {
                if (err) {
                    console.error(err.message);
                    return
                }
                console.log(`原始文件生成成功：| ${issueEn}`)

                fs.copyFileSync(issueEn, issueCn)

                console.log(`目标文件生成成功：| ${issueCn}`)
            });
            
            // 翻译
            // google.translate({
            //     text: fefMd,
            //     from: 'en',
            //     to: 'zh-CN'
            // }).then(data => {
            //     // 机器翻译参考文件
            //     fs.writeFile(botRef, data['result'].join('\n\n'), function (err) {
            //         if (err) {
            //             console.error(err.message);
            //             return
            //         }
            //         console.log(`机器翻译文件生成成功：| ${botRef}`)
            //     });
            // }).catch(error => {
            //     console.warn(`翻译异常：| ${error.code}`)
            // })
        }
    })
})()