(function flexible(window, document) {
  var docEl = document.documentElement  // 得到html元素
  var dpr = window.devicePixelRatio || 1

  // 修改body的文字大小
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    // 把屏幕平均分成10等份
    var rem = docEl.clientWidth / 10
    // 修改html的文字大小
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  // 当页面尺寸发生变化的时候，就重新修改html文字大小
  window.addEventListener('resize', setRemUnit)
  // 下面是针对于火狐浏览器
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports  修改移动端关于 0.5px的问题
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))
