import axios from 'axios';
import { platform, version, preUrl } from '@/components/config';

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const _axios = (uri, _data, type) => new Promise((resolve, reject) => {
	const data = _data || {};
	data.Platform = data.Platform || platform;
	data.Version_Code = data.Version_Code || version;
	// data.Token = data.Token || Cookies.get('token');
	const url = preUrl + uri;
	const options = {
		url,
		method: type,
	};
	if (type === 'get') {
		options.params = data;
	} else {
		options.data = new URLSearchParams(data);
		options.headers = {
			'Content-Type': 'application/x-www-form-urlencoded',
		};
	}
	axios(options)
		.then((res) => {
			// console.log(res.data)
			if (res.data.code === '100000') {
				// if (cache) Store[uri] = res.data.content;
				resolve(res.data.content);
			} else if (res.data.code === '100001') {
				// history.push('/login');
			} else {
				reject(res);
			}
		});
});

export const fetchGet = (uri, data) => _axios(uri, data, 'get');
export const fetchPost = (uri, data) => _axios(uri, data, 'post');
export default {
	get: fetchGet,
	post: fetchPost,
};
