const app = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        changerPage(page) {
            window.location.href= page;
        },
        enregistrerInfo(page) {
            window.location.href= page;
        }
    }

})
app.component('produit',{
    props:{
        id : Number,
        nom : String,
        quantite: Number,
        img_src : String,
        prix: Number
    },
    template:'<h3 class="product-title">{{nom}}</h3>' +
        '<div class="product-price">{{prix}}</div>'
})


app.mount('#app');
