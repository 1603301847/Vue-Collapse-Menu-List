/**
 * Created by dujiawei on 16/9/14.
 */
//rem单位根元素设置
//!function (win, option) {
//  var count = 0,
//      designWidth = option.designWidth,
//      designFontSize = option.designFontSize || 20,
//      callback = option.callback || null,
//      root = document.documentElement,
//      body = document.body,
//      rootWidth, newSize, t, self;
//
//  root.style.width = '100%';
//  //返回root元素字体计算结果
//  function _getNewFontSize() {
//      //var scale = designHeight !== 0 ? Math.min(win.innerWidth / designWidth, win.innerHeight / designHeight) : win.innerWidth / designWidth;
//      var scale = (window.innerWidth) / designWidth;
//      return parseInt(scale * 10000 * designFontSize) / 10000;
//  }
//
//  !function () {
//      rootWidth = root.getBoundingClientRect().width;
//      self = self ? self : arguments.callee;
//      //如果此时屏幕宽度不准确，就尝试再次获取分辨率，只尝试20次，否则使用win.innerWidth计算
//      if (rootWidth !== win.innerWidth && count < 20) {
//          win.setTimeout(function () {
//              count++;
//              self();
//          }, 0);
//      } else {
//          newSize = _getNewFontSize();
//          //如果css已经兼容当前分辨率就不管了
//          if (newSize + 'px' !== getComputedStyle(root)['font-size']) {
//              root.style.fontSize = newSize + "px";
//              return callback && callback(newSize);
//          }
//          ;
//      }
//      ;
//  }();
//  //横竖屏切换的时候改变fontSize，根据需要选择使用
//  win.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
//      clearTimeout(t);
//      t = setTimeout(function () {
//          self();
//      }, 300);
//  }, false);
//}(window, {
//  designWidth: 750, //设计稿的宽度
//  designFontSize: 100, //html iconfont-size初始化值
//  callback: function (argument) {
//      //console.log("test")
//  }
//});
!function(n){
    var  e=n.document,
         t=e.documentElement,
         i=750,
         d=i/100,
         o="orientationchange"in n?"orientationchange":"resize",
         a=function(){
             var n=t.clientWidth||320;n>750&&(n=750);
             t.style.fontSize=n/d+"px"
         };
         e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))
}(window);