import Link from 'next/link';
import Layout from '../components/layout';

export default function Home({ posts }) {
  return (
    <div className="container">
      <Layout home>
        <section>
          { posts.map((post) => (
            <div className="card" key={post.id}>
              <Link href={`/posts/${post.id}`}>{ post.title }</Link>
              <span className="card__desc">{post.body}</span>
            </div>
          )) }
        </section>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();

  return { props: { posts } };
}
