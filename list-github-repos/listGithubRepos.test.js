/* eslint-disable no-undef */

var listGithubRepos = require('./listGithubRepos.js');

describe('List Github Repos', function() {
	it('should return a status code of 200', function() {
		return listGithubRepos('kingokeke').then(function() {
			expect(response.status).toBe(200);
		});
	});
});
