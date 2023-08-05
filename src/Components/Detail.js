
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions/postAction';
import MorePosts from './MorePosts.js';
import '../detail.css';
import { IoArrowBackSharp } from 'react-icons/io5';

const Detail = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const [post, setPost] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [detailButtonActive, setDetailButtonActive] = useState(false);
  const [userInfoButtonActive, setUserInfoButtonActive] = useState(false);

  useEffect(() => {
    if (posts && posts.length > 0) {
      const foundPost = posts.find((post) => post.id === parseInt(id));
      setPost(foundPost);
    }
  }, [id, posts]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Check if the post is null before rendering
  if (!post) return <div>Post not found</div>;

  const handleShowDetail = () => {
    setShowDetail(true);
    setDetailButtonActive(true);
    setUserInfoButtonActive(false);
  };

  const handleShowUserInfo = () => {
    setShowDetail(false);
    setUserInfoButtonActive(true);
    setDetailButtonActive(false);
  };

  const handleGoBack = () => {
    // Use your preferred method to navigate back to the home page, e.g., using history.goBack()
    history.goBack(); // Make sure you have access to the history object from react-router-dom
  };

  // Filter out the selected post from the list of other posts
  const otherPosts = posts.filter((p) => p.id !== post.id);

  return (
    <div className="post-details">
      <div className="back-button" onClick={handleGoBack}>
        <IoArrowBackSharp size={24} />
      </div>
      <div className="post-content">
        <div className="post-info">
          <h1>Post Number {post.id}</h1>
          <img src={post.imgSrc} alt={`Post ${post.id}`} />
        </div>
        <div className="text-container">
          <h2>{post.title}</h2>
          {showDetail ? <p>{post.body}</p> : null}
          <div className="buttons">
            <button className={detailButtonActive ? 'active' : ''} onClick={handleShowDetail}>
              Detail
            </button>
            <button className={userInfoButtonActive ? 'active' : ''} onClick={handleShowUserInfo}>
              User Info
            </button>
          </div>
        </div>
      </div>
      <div className="user-info">
        {showDetail ? null : <p>Post is created by User ID: {post.userId}</p>}
      </div>

      
      {otherPosts.length > 0 && <MorePosts posts={otherPosts} />}
    </div>
  );
};

export default Detail;
