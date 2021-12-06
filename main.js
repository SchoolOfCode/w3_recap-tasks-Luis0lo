//URLs uncomment next line to fetch repos
// const gitUrl = 'https://api.github.com/users/luis0lo';
//find out how to access the total amount of contributions

//Selectors
const repos = document.querySelector('span');

let data = 0;

async function getGitHubInfo() {
  const response = await fetch(gitUrl);
  const answer = await response.json();
//   console.log(answer.public_repos);
  data = answer.public_repos;
}
getGitHubInfo();

//If you exceed the fetch rate limit
if (data !== 0) {
  repos.innerText = data;
} 

