export const axiosConfig = (token) => {
	const fullToken = 'Token token=' + token
	return {
		baseUrl: 'https://rails-chat-app.herokuapp.com',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': fullToken
		}
	}
}
