new Vue ({
    el: "#app",
    data: {
        title: "Hello World!",
        styleCss: ""
    },
    methods: {
        changeText () {
            this.title = "New text to Title"
        }
    }
});