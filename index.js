// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const userListEl = document.querySelector(".user-list");
//calls the information from the location being used note the async await function
async function main() {
const users = await fetch("https://jsonplaceholder.typicode.com/users")
const usersData = await users.json();
userListEl.innerHTML = usersData.map((user) => userHTML(user)).join('')
}

main();
// This routs useres to the url of the page dynamically
function showUserPosts(id) { 
  localStorage.setItem("id", id); 
  window.location.href = `${window.location.origin}/user.html`
}
// dynamically sets up the user information to pull from
function userHTML(user) {
  return `<div class="user-card" onclick="showUserPosts(${user.id})">
        <div class="user-card__container">
          <h3>${user.name}</h4>
            <p><b>Email:</b> ${user.email}</p>
            <p><b>Phone:</b> ${user.phone}</p>
            <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
        </div>
      </div>`
}