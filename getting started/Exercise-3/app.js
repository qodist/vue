new Vue({
    el: "#exercise",
    data: {
        value: 0,
        result: ""
    },
    computed: {
        scoreCheck: function(){
            return this.value < 37 ? "Not there yet" : "Yay, we've hit the target";
        }
    },
    watch: {
        value: function(value){
            var vm = this;
            setTimeout(function(){
                vm.value = 0;
            }, 5000);
        }
    }
})