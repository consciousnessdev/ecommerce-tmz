import './ReactHooks.css';
import User from './components/user/user.component';
import Post from './components/post/post.component';

function ReactHooks() {
  return (
    <div className="ReactHooks">
      <User userId={5} />
      <Post postId={15} />
    </div>
  );
}

export default ReactHooks;
