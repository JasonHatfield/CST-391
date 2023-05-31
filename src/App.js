import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';

function App() {
  const [postList, setPostList] = useState([
    {
      postNumber: 0,
      text: 'A short psychic broke out of jail. She was a small medium at large.',
    },
    {
      postNumber: 1,
      text: 'Second hardcoded post text',
    },
    {
      postNumber: 2,
      text: 'Third hardcoded post text',
    },
  ]);

  const handleDeletePost = (id) => {
    let updatedPostList = postList.filter((post) => post.postNumber !== id);
  
    updatedPostList = updatedPostList.map((post) =>
      post.postNumber > id
        ? { ...post, postNumber: post.postNumber - 1 }
        : post
    );
  
    setPostList(updatedPostList);
  };
  

  const handleAddPost = (newText) => {
    let newPostNumber = 0;
  
    // Generate the smallest unused id
    for (let i = 0; ; i++) {
      if (!postList.some((post) => post.postNumber === i)) {
        newPostNumber = i;
        break;
      }
    }
  
    let newPost = {
      postNumber: newPostNumber,
      text: newText,
    };
  
    setPostList((postList) => [...postList, newPost]);
  }; 

  const posts = postList
    .sort((a, b) => a.postNumber - b.postNumber)
    .map((post) => (
      <Post key={post.postNumber} text={post.text} id={post.postNumber} onDelete={handleDeletePost} />
    ));

  return (
    <div>
      {posts}
      <AddPost onAdd={handleAddPost} />
    </div>
  );
}

export default App;
