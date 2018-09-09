<template>
	<div class="about">
		<h1>This is an about page</h1>
		<!-- <mu-container> -->
			<mu-form ref="form" :model="validateForm" class="mu-demo-form" >
				<mu-text-field v-model="validateForm.phValue"  type="number" placeholder="电话号码" />
				<br/>
				<mu-text-field v-model="validateForm.pawValue" placeholder="密码" ></mu-text-field>
				<br/>
				<mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
				<br/>
				<mu-button color="primary" @click="submit">提交</mu-button>
			</mu-form>
		<!-- </mu-container> -->
	</div>
</template>
<script>
import { fetchPost } from '@/components/Fetch';
import Cookies from 'vue-cookies';

export default {
	components: {
	},
	data() {
		return {
			validateForm: {
				phValue: '',
				pawValue: '',
				isAgree: true,
				visibility: false,
			},
		};
	},
	methods: {
		submit() {
			this.$refs.form.validate().then(() => {
				const data = {};
				data.phone = this.validateForm.phValue;
				data.password = this.validateForm.pawValue;
				data.Platform = 5;
				data.Version_Code = '2.0';
				fetchPost('api/user/login', data)
					.then((content) => {
						console.log(content);
						const expires = (content.expiresTime - new Date().getTime()) / 1000 / 3600 / 24;
						Cookies.set('phone', content.phone, { expires });
						Cookies.set('token', content.token, { expires });
						Cookies.set('userId', content.userId, { expires });
					})
					.catch(() => {
					// console.log(error);
					});
			});
		},
	},
};
</script>
