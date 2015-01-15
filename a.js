define(['view', 'module/client'], function(View, Client) {
  return View.extend({

    // templatePath: 'module/a-n.html',
    events: {
      'click #submodule': "goSubModule"
    },

    init: function() {
      console.log("模块A 初始化")
      this.$('#msg').on('click', function() {
        Pure.go('module/b');
      })
    },

    onShow: function() {
      console.log("模块A 呈现")
    },

    goSubModule: function() {
      Pure.go('module/a-detail');
    },

    msg: function() {
      // console.log("Hello World")
      Client.aaa();
    },

    onHide: function() {
      console.log('Module A onHide');
    }

  })
})