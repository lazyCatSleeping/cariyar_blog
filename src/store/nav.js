export default {
	state: {
		// 是否显示侧边导航栏
		showNavList: false
	},
	actions:{

	},
	mutations: {
		// 改变侧边导航栏的显示
		changeShowNavList(state, newFlag){
			state.showNavList = newFlag;
		}
	},
	getters: {
	}
}