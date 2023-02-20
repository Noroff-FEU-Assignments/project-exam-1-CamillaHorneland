const commentsContainer = document.getElementById("comment-form");

commentsContainer.addEventListener('submit', async (event) => {
  event.preventDefault(); 

  const author = document.getElementById('author').value;
  const email = document.getElementById('email').value;
  const content = document.getElementById('comment').value;

  const response = await fetch('const urlComments = "https://camillahorneland.no/slime-care/wp-json/wp/v2/comments', {   
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      author_name: author,
      author_email: email,
      content: content,
      post: id,
    }),
  });

  const result = await response.json();

  console.log(result);
});

const showComments = document.querySelector(".allComments");
const commentsUrl = "https://camillahorneland.no/slime-care/wp-json/wp/v2/comments?post=" + id;

const fetchComments = async () => {
  try {
    const response = await fetch(commentsUrl);
    const comments = await response.json();
    console.log(comments);
    
    showComments.innerHTML = "";
    
    comments.forEach(comment => {
      const showComments = `
        <div class="comment">
          <p class="comment-author">${comment.author_name}</p>
          <p class="comment-date">${comment.date}</p>
          <p class="comment-content">${comment.content.rendered}</p>
        </div>
      `;
      showComments.innerHTML += commentHtml;
    });
  } catch (error) {
    console.log(error);
  }
};

fetchComments();

