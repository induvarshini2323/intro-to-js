
fetch("github.json")
.then(response =>{
    console.log("10: food is ready! (response came back)");
    return response;
})
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(data.name)
    console.log(data.github)
});

console.log("1: ordering food...")
console.log("2: while waiting, do other things...");
console.log("3: while waiting, do other things...");
console.log("4: while waiting, do other things...");
console.log("5: while waiting, do other things...");
console.log("6: while waiting, do other things...");
console.log("7: while waiting, do other things...");
console.log("8: while waiting, do other things...");
console.log("9: while waiting, do other things...");



async function getUser() {
    const response = await fetch ("https://api.github.com/users/induvarshini2323");
    const data = await response.json();
    console.log(data);
}


getUser();


async function fetchGitHubUserProfile(name) {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const user = await response.json();
    console.log(user);
    renderGithubCard(user)
}

fetchGitHubUserProfile("induvarshini2323")


function renderGithubCard(user) {
     const container = document.querySelector("#githubCard");
    container.innerHTML = `
    <div class="github-Card">
    <div class="card">
     <img src="${user.avatar_url}" alt="my github profile image" class="github-avatar">
     <h3>${user.name ? user.name : user.login}</h3>
     </div>
     <div class="card1">
     <h3>repo:${user.public_repos}</h3>
     <h3>followers:${user.followers}</h3>
     <h3>following:${user.following}</h3>
     </div>
     <a href="https://api.github.com/users/induvarshini2323">view on Github</a>
    </div>
    `
}

async function fetchGitHubUserProfile(name) {

 const container = document.querySelector("#githubCard");

 try {
    const response = await fetch(`https://api.github.com/users/${name}`);
    console.log(response);
    if(!response.ok) {
        throw new error("Gituser not found.");
        
    }
    const user = await response.json();
    console.log(user);
    renderGithubCard(user);
  } catch(error) {
    console.error("could not load the github activity", error);
    container.innerHTML = `<p>could not load github right now. </p>`
  }

}






