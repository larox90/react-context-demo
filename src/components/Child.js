import { useContext } from 'react';
import PostContext from '../context/post-context';
/**
 * this child component has context data and it can modify it
 * even that we don't receive params, this data is received by the application context
 * here we are rendering a table with the context data and even using the function modifyPosts 
 * that exists in the context to modify the useState that exists in the post-context.js file
 * @returns
 */
function Child () {
  // getting the context for posts using the useContext hook
  const ctx = useContext(PostContext);
  // destructuring the context data.
  const { posts, modifyPosts } = ctx;

  const handleDelete = (idPost) => {
    const filteredPost = posts.filter(post => post.id !== idPost);
    // using a context function to modify the state already existing in the context file
    modifyPosts(filteredPost); 
  }

  // creating a JSX array with the table data for each post.
  const jsxPosts = posts.map(post => {
    return <tr key={post.id}>
      <td>{ post.title }</td>
      <td>{ post.body }</td>
      <td>
        <button onClick={() => handleDelete(post.id)} >delete</button>
      </td>
    </tr>;
  });

  return <table className="Child">
    <thead>
      <tr>
        <th>title</th>
        <th>description</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
      { jsxPosts }
    </tbody>
  </table>
}

export default Child;