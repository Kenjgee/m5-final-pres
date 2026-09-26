const postsListEl = document.querySelector('.post-list');
const id = localStorage.getItem("id");

async function onSearchChange(event) {
  //IMPORTANT event.target.value is the value needed.
  const id = event.target.value
  // made the api dynamic with ${} in the loine below
  renderPosts(id)
}

async function renderPosts(id) {

// made the api dynamic with ${} in the loine below
const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
const postsData = await posts.json();
postsListEl.innerHTML = postsData.map(post => postHTML(post)).join('');
}
function postHTML(post) {
  return `
   <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>
  `
}

renderPosts(id);