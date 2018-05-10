new Vue({
        el: '#exercise',
        data: {
            value: '',
            output: ""
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