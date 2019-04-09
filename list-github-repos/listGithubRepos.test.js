/* eslint-disable no-undef */
var listGithubRepos = require('./listGithubRepos.js');

describe('List Github Repos', function() {
	it('should return a status code of 200', function() {
		return listGithubRepos('kingokeke').then(function(response) {
			expect(response.status).toBe(200);
		});
	});

	it('should not allow parameters that are not strings', function() {
		expect(listGithubRepos(900)).toBe('Error');
		expect(listGithubRepos(null)).toBe('Error');
		expect(listGithubRepos(undefined)).toBe('Error');
		expect(listGithubRepos([23, 45, 67])).toBe('Error');
		expect(listGithubRepos({id: 7, name: 'Bond'})).toBe('Error');
		expect(listGithubRepos(true)).toBe('Error');
	});
});
