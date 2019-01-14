/* 通过ID获取元素方法封装 */
function my$(id) {
    return document.getElementById(id);
}

/* 获取下一个兄弟元素方法封装 */
function getElementSibling(element) {
    var el = element;
    while (el = el.nextSibling) {
        if (el.nodeType === 1) {
            return el;
        }
    }
    return null;
}

/* 设置标签之间文本内容兼容性解决方法 */
function setInnerText(element,content) {
      // 判断当前浏览器是否支持 innerText
      if (typeof element.innerText === 'string') {
        element.innerText = content;
      } else {
        element.textContent = content;
      }
}