new Vue({
    el: "#app",
    data: {
        switchRed: false,
        color: "blue",
        width: 100
    },
    computed: {
        divClasses: function(){
            return {
                red: this.switchRed,
                blue: !this.switchRed
            }
        },
        myStyle: function(){
            return {
                backgroundColor: this.color,
                width: this.width + "px"
            }
        }
    }
});