const env = 'dev';

export const axiosConfig = (token) => {
	const fullToken = 'Token token=' + token;
	return {
		baseUrl: env === 'dev' ? 'http://localhost:3000' : 'https://rails-chat-app.herokuapp.com',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': fullToken
		}
	}
}

export const wsUrl = env === 'dev' ? 'ws://localhost:3000/cable' : 'wss://rails-chat-app.herokuapp.com/cable';
