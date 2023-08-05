
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchPosts } from '../redux/actions/postAction';
import Navbar from './Navbar';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory(); // Step 2: Get the history object
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleCardClick = (postId) => {
    history.push(`/item/${postId}`); // Step 3: Programmatically navigate to the detail page
  };

  return (
    <div className='card-container'>
      <h1>Social Media For Travellers</h1>
      <div className="search-container">
        <input type="text" placeholder="Search here" />
        <div className="search-icon">
          <i className="fa fa-search"></i>
        </div>
      </div>

      <div className="cards">
        {posts && posts.map((post) => (
          <div className="card" key={post.id} onClick={() => handleCardClick(post.id)}> {/* Step 4: Add onClick event */}
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

export default Home;


