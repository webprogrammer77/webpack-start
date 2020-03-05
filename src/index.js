import './js/common'
import './css/main.css'
import './scss/main.scss'

// import 'vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Vue from 'vue'
window.Vue = require('vue')

Vue.component('example-component', require('./components/Example.vue').default)

import store from './store/index.js'

Vue.use(store)
const app = new Vue({
	data(){
		return{
			showExampleComponent:true
		}
	},
	store,
	el: '#app'
})
