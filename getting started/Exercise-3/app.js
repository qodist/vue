new Vue({
        el: '#app',
        data: {
            value: 0,
        },
        computed: {
            result: function(){
                if(value === 37){
                    return "Yay";
                } 
            }
        }
    });