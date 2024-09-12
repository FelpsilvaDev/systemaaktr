import Vue from 'vue'
import VueRouter from 'vue-router'
import pageLogin from '@/Pages/pageLogin.vue';
import pageHome from '@/Pages/pageHome.vue';
import pageCotacoes from '@/Pages/pageCotacoes.vue'

Vue.use(VueRouter);

const routes = 
[
	{
		name: '',
		path: '',
		component: pageLogin,
		
	},	
	{
		name: 'pageHome',
		path: '/Home',
		component: pageHome,
		
	},	
	{
		name: 'pageCotacoes',
		path: '/Cotacoes',
		component: pageCotacoes,
		
	},
	
];


const router = new VueRouter({
    mode:'history',
    routes: routes,  
   
});

// router.beforeEach((to, from, next) => {
// 	if (to.matched.some((record) => record.meta.requiresAuth)) {
// 		if (store.state.isLoggedIn ===  false) {
// 			next({
// 				path: '/home',				
// 			});
// 		} else {
// 			next();
// 		}
// 	} else {
// 		next();
// 	}
// });


export default router
