export const axiosConfig = (token) => {
	const env = 'prod';
	// const env = 'dev';
	const fullToken = 'Token token=' + token;
	return {
		baseUrl: env === 'dev' ? 'http://localhost:3000' : 'https://rails-chat-app.herokuapp.com',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': fullToken
		}
	}
}

// export const wsUrl = 'ws://localhost:3000/cable';
export const wsUrl = 'wss://rails-chat-app.herokuapp.com/cable';
