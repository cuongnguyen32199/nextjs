import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Your First Post</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="title">
            <Image src="/profile.jpg" width="144" height="144" alt="Screenshot" />
            <div className="title__bacl">
              <Link href="/">Back to home</Link>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
