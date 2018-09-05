import Vue from 'vue';
import 'muse-ui/lib/styles/base.less';
import { Button, Select, Form, TextField, Checkbox, Tabs,Icon,BottomNav } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
// Vue.component(Button.name, Button);
Vue.use(Button);
Vue.use(Select);
Vue.use(Form);
Vue.use(TextField);
Vue.use(Checkbox);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(BottomNav);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
