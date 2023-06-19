window.addEventListener('load', function () {
  console.log('测试-网页加载完成了');
  clock();
  setInterval(clock, 1000);
});
function clock() {
  console.log('测试-时钟函数调用了');
  let dt = new Date();
  let HH = dt.getHours();
  let mm = dt.getMinutes();
  let ss = dt.getSeconds();
  console.log(dt, HH, mm, ss);
  document.querySelector('#HH').innerHTML = padZero(HH);
  document.querySelector('#mm').innerHTML = padZero(mm);
  document.querySelector('#ss').innerHTML = padZero(ss);
};
function padZero(n) {
  console.log(n);
  return n > 9 ? n : '0' + n;
}
