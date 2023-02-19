const commentsContainer = document.querySelector(".comments");

fetch('https://camillahorneland.no/slime-care/wp-json/wp/v2/comments?post=POST_ID')
  .then(response => response.json())
  .then(comments => {

  });
  function renderComments(comments) {
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = 
        `<p>${comment.content.rendered}</p>
        <p>By ${comment.author_name} on ${comment.date}</p>`;
        commentsContainer.appendChild(commentElement);
     });
    }
    renderComments(comments);
    
    const commentForm = document.querySelector('#comment-form');
    
    commentForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(commentForm);
        const postData = {
            author_name: formData.get('author_name'),
            author_email: formData.get('author_email'),
            content: formData.get('content')
        };
        fetch('https://camillahorneland.no/slime-care/wp-json/wp/v2/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(comment => {
            const commentElement = document.createElement('div');
            commentElement.innerHTML = 
            `<p>${comment.content.rendered}</p>
             <p>By ${comment.author_name} on ${comment.date}</p>`;
             commentsContainer.appendChild(commentElement);
             commentForm.reset();
            });
        });