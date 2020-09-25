export default {
	BASE_URL: {
		URL: 'http://127.0.0.1:4444/',
	},

	AUTH_HEADERS: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'x-access-token': localStorage.getItem("x-access-token"),
	},
}