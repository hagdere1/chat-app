export const axiosConfig = (token) => {
	const fullToken = 'Token token=' + token
	return {
		baseUrl: 'http://localhost:3000',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': fullToken
		}
	}
}
