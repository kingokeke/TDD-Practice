function listGithubRepos(username) {
	var axios = require('axios');
	var url = 'http://localhost:3000/users?username=' + username;
	return axios.get(url);
}
listGithubRepos('kingokeke');
module.exports = listGithubRepos;
