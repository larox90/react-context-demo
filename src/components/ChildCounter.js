import { useContext } from 'react';
import PostContext from '../context/post-context';
/**
 * this component use the context data to counter of posts
 * even if the posts length change in other place of the application
 * we have always updated this info here.
 * @returns
 */
function ChildCounter () {
  // getting context using the hook and saying whats the context we want to get.
  const ctx = useContext(PostContext);
  // destructuring context data.
  const { posts } = ctx;

  return <div className="ChildCounter">
    posts counter: { posts.length }
  </div>
}

export default ChildCounter;