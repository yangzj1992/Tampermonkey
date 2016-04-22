// ==UserScript==
// @name         破解知乎限制复制
// @namespace    http://qcyoung.com/
// @version      0.1
// @description  破解知乎限制复制
// @author       yangzj1992
// @match        https://www.zhihu.com/*
// ==/UserScript==
/* jshint -W097 */
'use strict';

$('.zm-editable-content').on('copy', function(evt) {
    evt.stopPropagation();
});