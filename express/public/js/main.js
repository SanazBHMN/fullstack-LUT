const output = document.querySelector("#output");
const button = document.querySelector("#get-posts-btn");

// GET & SHOW POSTS
async function showPosts() {
  try {
    const res = await fetch("http://localhost:8000/api/posts");
    if (!res.ok) {
      throw new Error("FAILED TO FETCH POSTS");
    }

    const posts = await res.json();
    output.innerHTML = "";

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.textContent = post.title;

      output.appendChild(postEl);
    });
  } catch (error) {
    console.error("ERROR FETCHING POSTS", error);
  }
}

// EVENT LISTENERS
button.addEventListener("click", showPosts);
