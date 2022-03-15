//URLs uncomment next line to fetch repos
const gitUrl = 'https://api.github.com/users/luis0lo';
//find out how to access the total amount of contributions

//Selectors
const repos = document.querySelector('span');

let data = 0;

async function getGitHubInfo() {
  const response = await fetch(gitUrl);
  const answer = await response.json();
  //   console.log(answer.public_repos);
  data = answer.public_repos;
  //If you exceed the fetch rate limit
if (data !== 0) {
  repos.innerText = data;
}
}
getGitHubInfo();



//share links
// https://crunchify.com/list-of-all-social-sharing-urls-for-handy-reference-social-media-sharing-buttons-without-javascript/

//linkedin PROBLEM!
//https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

//twitter
// &via=[via] optional Twitter username of content author (don’t include “@”)

const btnLinkedin = document.querySelector('.share-on-linkedin');
const btnTwitter = document.querySelector('.share-on-twitter');
const btnWhatsapp = document.querySelector('.share-on-whatsapp');

btnLinkedin.addEventListener('click', shareProfile);
btnTwitter.addEventListener('click', shareProfile);
btnWhatsapp.addEventListener('click', shareProfile);

function shareProfile() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI(`Luis has an interesting profile! 
  It may fit your needs`);
  let postHashtag = ['webDeveloper', 'softwareDeveloper'];

  btnLinkedin.setAttribute(
    'href',
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );
  btnTwitter.setAttribute(
    'href',
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}&hashtags=${postHashtag}`
  );
  btnWhatsapp.setAttribute(
    'href',
    `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`
  );
}
