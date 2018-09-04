import Vue from 'vue';
import 'muse-ui/lib/styles/base.less';
import { Button, Select, Form, TextField, Checkbox } from 'muse-ui';
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

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
