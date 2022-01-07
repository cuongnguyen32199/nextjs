import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home({ posts }) {
  const router = useRouter();

  return (
    <div className="container">
      <Layout home>
        <section className='card-container'>
          { posts.map((post) => (
            <div className="card" key={post.id} onClick={() => router.push(`/posts/${post.id}`)}>
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
