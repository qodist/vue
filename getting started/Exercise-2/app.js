new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertMe: function(){
                alert("You rang........");
            },
            userInput: function(event){
                this.value = event.target.value;
            }
        }
    });