import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://yes66395.github.io/POSdemo',
	timeout: 1000,
});

instance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => Promise.reject(error),
);

instance.interceptors.response.use(
	(response) => {
		let data = response.data;
		return data;
	},
	(err) => Promise.reject(err),
);

export default instance;
