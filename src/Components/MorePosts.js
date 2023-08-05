// MorePosts.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import "../morePosts.css";

const MorePosts = ({ posts }) => {
  const history = useHistory(); // Step 2: Get the history object

  const handleCardClick = (postId) => {
    history.push(`/item/${postId}`); // Step 3: Programmatically navigate to the detail page
  };

  return (
    <div className='card-container'>
      <h1>More Posts</h1>
     
      <div className="cards">
        {posts && posts.map((post) => (
          <div className="card" key={post.id} onClick={() => handleCardClick(post.id)}>
            <img src={post.imgSrc} alt={`Post ${post.id}`} />
            <h2>{post.title.length > 30 ? `${post.title.slice(0, 30)}...` : post.title}</h2>
            <p>{post.body.slice(0, 100)}...</p>
            <div className="arrow-icon">
              <i className="fa fa-arrow-right"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MorePosts;
