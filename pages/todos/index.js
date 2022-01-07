import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/layout';
import styles from './style.module.scss';

export default function Todo({ todos, page, totalPage }) {
  const router = useRouter();

  useEffect(() => {
    const { page } = router.query;
    if (page) return;

    router.push('?page=1', undefined, { shallow: true });
  }, [router]);

  const goPrevious = () => router.push({ query: { page: +page - 1 } });
  const goNext = () => router.push({ query: { page: +page + 1 } });

  return (
    <Layout>
      <div className={styles.todos}>
        <div className={styles.todos__title}>TODO LIST</div>
        <div className="todos__body">
          {todos.map((todo) => (
            <div className={styles.todo} key={todo.id}>
              <div className={styles.todo__title}>{todo.title}</div>
              <div className={styles.todo__status}>{todo.completed ? 'Completed' : 'Pending'}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.stats}>Page: {page}</div>

      <div className={styles.pagination}>
        <div className={styles.pagination__previous}>
          <button type='button' onClick={goPrevious} disabled={+page === 1}>Previous</button>
          </div>
        <div className={styles.pagination__next}>
          <button type='button' onClick={goNext} disabled={+page === totalPage}>Next</button>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const page = query.page || 1;
  const { todos, limit, totalPage } = await (await fetch(`http://localhost:3000/api/todos?page=${page}`)).json();

  return { props: { todos, page, limit, totalPage } };
}
