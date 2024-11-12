import axios from "axios";

const api = axios.create({
    // baseURL: "http://314287b391d7.ngrok.io/api/"
    baseURL: "http://localhost:4000/"
});

export function apiPostJson(url, data) {
	const config = {
		headers: {
			accept: '*/*',
			'Content-Type': 'application/json-patch+json'
		}
	};

	return api.post(url, data, config);
}

export default api;
