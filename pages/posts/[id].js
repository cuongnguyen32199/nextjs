import Layout from '../../components/layout';

export default function Post({ post }) {
  return <Layout>
    <div className="post">
      <div className="post__header">
        <div className="post__id">{post.id}.</div>
        <div className="post__title">{post.title}</div>
      </div>
      <div className="post__desc">{post.body}</div>
    </div>
  </Layout>;
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const post = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();

  return { props: { post } };
}
