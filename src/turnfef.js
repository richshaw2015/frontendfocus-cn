'use strict';

/* 将 Frontend Focus 的 html 转为目标 markdown 格式 */
function trunFefmd(md) {
    // 解析成数组
    const middleList = md.split('\n');

    // 结果数组
    let resultList = [];

    // 跳转标识标志
    let skipFlag = false;

    // 当前标题开始行，用于过滤广告
    let titleStartLine = 0;

    // 第几期
    let issueNum = 0;

    for (let i = 0; i < middleList.length; i++) {
        const line = middleList[i].trim();

        if (line === '' || line.startsWith('[Read on the Web]') || line === 'Frontend Focus' ||
            line === `![](https://frontendfoc.us/open/${issueNum}/rss)`) {
            continue
        }

        // 是否改变跳转标识
        if (line.endsWith(' & Opinion**')) {
            skipFlag = false;
            resultList.push(`## 📙 文章、教程、观点`);
            continue
        } else if (line.endsWith(' & Resources**')) {
            skipFlag = false;
            resultList.push(`## 🔧 代码、工具、资源`);
            continue
        } else if (line.endsWith('**Jobs**') || line.endsWith('**Upcoming Events**')) {
            skipFlag = true;
            continue
        } else if (line.indexOf('**ICYMI**') > 0) {
            skipFlag = false;
            resultList.push('## 🕰 推荐拾遗');
            continue
        }

        if (skipFlag) {
            continue
        }

        // 尝试匹配标题
        let match = /^#(\d+) — /.exec(line);
        if (match !== null) {
            issueNum = match[1];
            resultList.push(`# 前端聚焦周刊：第 ${issueNum} 期`);
            resultList.push(`这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [Oh My RSS](https://ohmyrss.com/?fef) 平台首发。`);
            resultList.push(`如有翻译错误或国外优质文章推荐，欢迎提交 issue。`);

            resultList.push(`> 原文：[Frontend Focus issue ${issueNum}](https://frontendfoc.us/issues/${issueNum})\n> \n> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)`);

            resultList.push(`## 🚀 刊首`);
        } else {
            // 尝试匹配图片
            match = /^\[!\[]\(.+\)]\(.+\)/.exec(line);
            if (match !== null || line.startsWith('![](')) {
                resultList.push(line)
            } else {
                // 尝试匹配文章及导读
                match = /^(.+?) — (.+)$/.exec(line);
                if (match !== null) {
                    // 命中标题了
                    titleStartLine = resultList.length;

                    const title = `#### ${match[1]}`;
                    const brief = `${match[2]}`;

                    resultList.push(title);
                    resultList.push(brief);
                } else {
                    // 另一种形式的标题，没有导读形式的
                    match = /^(▶\s+)?\[.+]\(.+\)$/.exec(line);
                    if (match !== null) {
                        // 命中标题了
                        titleStartLine = resultList.length;

                        const title = `#### ${match[0]}`;

                        resultList.push(title);
                    } else {
                        // 尝试匹配作者或者列表元素
                        if (line.startsWith('-   ') || line.startsWith('*   ')) {
                            // 列表
                            resultList.push(`${line}`)
                        } else {
                            // 作者
                            if (line.indexOf('sponsor') > 0) {
                                // 广告，过滤掉，一直删除到标题行的位置
                                if ((resultList.length - titleStartLine) > 2) {
                                    console.error(`！！裁剪广告过多：${titleStartLine} ${resultList.length}`);
                                }

                                resultList.splice(titleStartLine);
                            } else {
                                console.log(`${line} 解析为作者字段`);
                                resultList.push(`*来源：${line}*`)
                            }
                        }
                    }
                }
            }
        }
    }

    resultList.push('## 💻 招聘');
    resultList.push(`译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/${issueNum})。`);
    resultList.push('## 🗓 未来大事记');
    resultList.push(`译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/${issueNum})。`);
    resultList.push('');

    return resultList.join('\n\n')
}

module.exports = trunFefmd;
