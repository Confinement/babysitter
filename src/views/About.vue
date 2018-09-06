<template>
	<div class="about">
		<h1>This is an about page</h1>
		<!-- <mu-container> -->
			<mu-form ref="form" :model="validateForm" class="mu-demo-form" >
				<mu-text-field v-model="validateForm.phValue"  type="number" placeholder="电话号码"></mu-text-field>
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
			this.$refs.form.validate().then((result) => {
				const data = {};
				data.phone = this.validateForm.phValue;
				data.password = this.validateForm.pawValue;
				data.Platform = 5;
				data.Version_Code = '2.0';
				fetchPost('api/user/login', data)
					.then((response) => {
						console.log(response);
					})
					.catch((error) => {
					// console.log(error);
					});
			});
		},
	},
};
</script>
