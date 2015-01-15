define(['view'], function(View) {
  return View.extend({

    events: {
      'click #msg': 'msg'
    },

    init: function() {
      console.log("模块B 初始化")
    },

    onShow: function() {
      console.log("模块B 呈现")
    },

    msg: function() {
      // console.log("Hello World KKKKK")
      Pure.go('module/c')
      // console.log(this.query.id);
    },

    onHide: function() {
      console.log('Module B onHide');
    }

  })
})