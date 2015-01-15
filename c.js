define(['view'], function(View) {
  return View.extend({

    events: {
      'click #msg': 'msg'
    },

    init: function() {
      console.log("模块C 初始化")
    },

    onShow: function() {
      console.log("模块C 呈现")
    },

    msg: function() {
      Pure.go('module/d')
    },

    onHide: function() {
      console.log('Module C onHide');
    }

  })
})