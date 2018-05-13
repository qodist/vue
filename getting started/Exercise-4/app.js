new Vue({
  el: '#exercise',
  data: {
    big: "highlight",
    small: "shrink"
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){
        return vm.big;
      }, 2000);
    }
  }
});
