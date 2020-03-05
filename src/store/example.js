export default {
	state:{
		message:'nello vuex',
		showExampleComponent: false
	},
	mutations:{},
	actions:{},
	getters:{
		getMessage(state){
			return state.message
		},
		getShowExampleComponent(state){
			return state.showExampleComponent
		}
	}
}