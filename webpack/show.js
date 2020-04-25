function show(content) {
    window.document.getElementById('app').innerText = 'Hello,'+content;
}
// CommonJs规范导出该方法
module.exports = show;