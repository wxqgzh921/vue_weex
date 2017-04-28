import foo from './src/foo.vue'

//
//foo.el = '#root'
//export default new Vue(foo);
export default new Vue({
	el:'#root',
	template: '<foo/>',
    components: { foo }
})

