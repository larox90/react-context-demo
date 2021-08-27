import React, { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * this function is needed to created the structure of our context data
 * using React object we call the property createContext and sending an object
 * we can define what would be the properties we want to exist in our context.
 * they can be any type.
 * 
 * this function is saved in a constant and usually is exported by default in the file
 * because we will create one file for each folder we want in the application.
 */
const PostContext = React.createContext({
  posts: [],
  modifyPosts: () => {}
});

/**
 * this function it's not mandatory but it's a good practice, because we could use the
 * PostContext.Provider directly where we want to wrap our context, but we would need to 
 * set the context logic we want to the app where we set this Provider.
 * that's why this practice let us have the context logic in a single file, so this function help us to that
 * this function will return a context provider wrapper component and in this component we will define
 * the initial values we want for our application, and beside that we can bind useState and functions as you can see below
 * @param {*} props 
 * @returns 
 */
export const PostContextProvider = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // we used async function to use await in our app instead of using then and catch.
    async function getPosts() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.data;
      setPosts(posts);
    }

    getPosts();
  }, []);

  const handlePosts = (posts) => {
    setPosts(posts);
  }
  // returning the context provider wrapper component
  // it's important to define the values if we want to bind this data.
  return <PostContext.Provider value={{
    posts: posts,
    modifyPosts: handlePosts
  }}>
    { 
      // it's mandatory if we want to use this component as a wrapper send the props.children.
      props.children
    }
  </PostContext.Provider>
}

export default PostContext;