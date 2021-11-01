Vue.config.devtools = true

const vueApp = new Vue({
    el: '#app',
    data: {
        currentActiveIndex: 0,
        imagesList: [
            {
                url: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                url: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum'
            },
            {
                url: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                url: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                url: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }
        ]
    },
    methods: {
        onPreviousClick() {
            let newIndex = this.currentActiveIndex - 1

            if (newIndex < 0) {
                newIndex = this.imagesList.length - 1
            }

            this.currentActiveIndex = newIndex
        },
        onForwardClick() {
            let newIndex = this.currentActiveIndex + 1

            if (newIndex > this.imagesList.length - 1) {
                newIndex = 0
            }

            this.currentActiveIndex = newIndex
        }
    },
    mounted() {
        setInterval(() => {
          this.onForwardClick();
        }, 3000)
    }
})