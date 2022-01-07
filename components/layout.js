import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './layout.module.scss';

export default function Layout({ children, home }) {
  const router = useRouter();
  const { pathname } = router;
  console.log({ pathname });

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <title>Next.js</title>
        <meta name="og:title" content="Next.js" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={styles.navigator}>
          <Link href="/" className={pathname == '/' ? styles.link__active : ''}>Home</Link>
          <Link href="/todos" className={pathname == '/todos' ? styles.link__active : ''}>Todo</Link>
        </div>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
