import Card from '../card/card.component';

import useFetch from '../../../../effects/useFetch.effect';

const Post = ({ postId }) => {
  const post = useFetch(
    `https://jsonplaceholder.typicode.com/posts?id=${postId}`
  );
  
  return (
    <Card>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <h3>{post.body}</h3>
        </div>
      ) : (
        <p>Post Not Found</p>
      )}
    </Card>
  );
};

export default Post;
