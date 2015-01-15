define(['view'], function(View) {
  return View.extend({

    // templatePath: 'module/a-n.html',

    init: function() {
      console.log("模块A详情 初始化")
    },

    onShow: function() {
      console.log("模块A详情 呈现")
    },

    onHide: function() {
      console.log('Module A 详情 onHide');
    }

  })
})