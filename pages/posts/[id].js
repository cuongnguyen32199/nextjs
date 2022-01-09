import Layout from '../../components/layout';

export default function Post({ post, comments }) {
  return (
    <Layout>
      <div className="post">
        <div className="post__header">
          <div className="post__id">{post.id}.</div>
          <div className="post__title">{post.title}</div>
        </div>
        <div className="post__desc">{post.body}</div>
      </div>
      <div className="comments">
        <p className="comments__title">Comments:</p>
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <div className="comment__left">
              <div className="comment__id">{comment.id}</div>
            </div>
            <div className="comment__right">
              <div className="comment__author">
                <span className="author__name">Fullname: {comment.name}</span>
                <span className="author__email">Email: {comment.email}</span>
              </div>
              <div className="comment__content">{comment.body}</div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const postReq = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const commentsReq = fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  const [post, comments] = await Promise.all([(await postReq).json(), (await commentsReq).json()]);

  return { props: { post, comments } };
}
