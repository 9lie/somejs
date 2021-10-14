// ==UserScript==
// @name         cf 优化
// @namespace    9lie
// @version      0.1
// @description  try to take over the world!
// @author       9lie
// @match        https://codeforces.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('.submitForm').attr("target", "_blank"); // 在新窗口查看提交结果
    $('.submit-form').attr('target', '_bland');
    // $('a').attr("target", "_blank"); // 链接在新窗口打开

    let vec = window.location.href.split("com/")[1].split('?')[0].split('/');
    let cf = 'https://codeforces.com/'

    setTimeout(() => {
        let tag = vec[0];
        let contest, idx;
        let num = vec[3];
        if (tag == 'problemset' && vec[1] == 'problem') contest = vec[2], idx = 4;
        else if (tag == 'contest' && vec[2] == 'problem') contest = vec[1], idx = 5;
        if ((tag == 'problemset' && vec[1] == 'problem') || (tag == 'contest' && vec[2] == 'problem')) {
            $('ul.second-level-menu-list>li:nth-child(' + idx + ')>a').attr('href', cf + 'problemset/status/' + contest + '/problem/' + num);
            let luogu =
                '<li>' +
                    '<a href = https://www.luogu.com.cn/problem/CF' + contest + '' + num + ' target=_blank> luogu </a>'
                '</li>';
            $('ul.second-level-menu-list').append(luogu);
        }
    }, 1000);
})();
