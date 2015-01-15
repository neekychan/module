define(['view'], function(View) {
  return View.extend({

    events: {
      'click #detail' : 'detail'
    },

    init: function() {
      console.log("模块D 初始化")
    },

    onShow: function() {
      console.log("模块D 呈现")
    },

    detail: function() {
      Pure.go('module/a-detail')
    },

    onHide: function() {
      console.log('Module D onHide');
    }

  })
})