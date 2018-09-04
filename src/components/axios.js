import axios from "axios"
import { platform, version, preUrl } from '@components/config';

// axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let _axios = (uri,data) => {
	data = data || {};
	data.Platform = data.Platform || platform;
	data.Version_Code = data.Version_Code || version;
	data.Token = data.Token || Cookies.get('token');
	let url = preUrl + uri;
	axios({
		method: 'post',
		url: url,
		data: data,
	  })
	.then(function(response){
		resolve(response);
	})
	.catch(function(error){
		// console.log(error);
	});
}

export let fetchGet = (uri, data) => _axios(uri, data)
export let fetchPost = (uri, data) => _axios(uri, data)
export default {
	get: fetchGet,
	post: fetchPost
}