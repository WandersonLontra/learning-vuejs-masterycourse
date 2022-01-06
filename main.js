var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./assets/vue-socks.jpg",
        inStock: true,
        inventory: 5,
        details: ['80% cotton','20% polyester','gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/vue-socks.jpg"
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vue-socks-blue.jpg"
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart(){
            if(this.cart > 0){
                this.cart--
            }
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})