new Vue({
    el: "#app",
    data: {
        counter: 0,
        secondCounter: 0,
        output: ""
    },
    computed: {
        eval: function(){
            console.log("Computed being run");
            return this.counter >= 5 ? "Five or higher" : "Less than five";
        }
    },
    methods: {
        result: function(){
            console.log("Method being run");
            return this.counter >= 5 ? "Five or higher" : "Less than five";
        }
    },
    watch: {
        counter: function(value){
            var vm = this;
            setTimeout(function(){
                vm.counter = 0;
            }, 2000);
        }
    }
})