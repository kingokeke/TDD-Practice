function listGithubRepos(username) {
	var axios = require('axios');
	if (typeof username !== 'string') return 'Error';
	return axios.get('http://localhost:3000/users?username=' + username);
}
module.exports = listGithubRepos;
