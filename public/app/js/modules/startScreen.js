var startScreen = new Vue({
    el: '#start',
    data: {
        isHidden: true
    },
    methods: {
        toggleInput: function () {

            this.isHidden = !this.isHidden;

        }
    }
});