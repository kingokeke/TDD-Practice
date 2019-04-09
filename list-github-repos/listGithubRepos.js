function listGithubRepos(username) {
	var axios = require('axios');
	return axios.get('http://localhost:3000/users?username=' + username);
}
module.exports = listGithubRepos;
