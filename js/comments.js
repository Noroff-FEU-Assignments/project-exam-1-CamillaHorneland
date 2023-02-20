// const commentsContainer = document.getElementById("comment-form");

// commentsContainer.addEventListener('submit', async (event) => {
//   event.preventDefault(); 

//   const author = document.getElementById('name-input').value;
//   const email = document.getElementById('email-input').value;
//   const content = document.getElementById('comment-input').value;

//   const response = await fetch(`https://camillahorneland.no/slime-care/wp-json/wp/v2/comments?post=${id}`, {   
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       author_name: author,
//       author_email: email,
//       content: content,
//     }),
//   });

//   const result = await response.json();

//   console.log(result);
// });

// const showComments = document.querySelector(".allComments");
// const commentsUrl = `https://camillahorneland.no/slime-care/wp-json/wp/v2/comments?post=${id}`;

// const fetchComments = async () => {
//   try {
//     const response = await fetch(commentsUrl);
//     const comments = await response.json();
//     console.log(comments);
    
//     showComments.innerHTML = "";
    
//     comments.forEach(comment => {
//       const commentHtml = `
//         <div class="comment">
//           <p class="comment-author">${comment.author_name}</p>
//           <p class="comment-date">${comment.date}</p>
//           <p class="comment-content">${comment.content.rendered}</p>
//         </div>
//       `;
//       showComments.innerHTML += commentHtml;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchComments();
