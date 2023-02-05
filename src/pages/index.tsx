import type { GetStaticProps, NextPage } from 'next';

import PostList from '@/components/PostList';
import Link from '@/components/Link';

import getPostsByDescDate from '@/utils/getPostsByDescDate';
import type { PropsType } from './pages/[page]';
import { POSTS_PER_PAGE } from './pages/[page]';

export const getStaticProps: GetStaticProps<PropsType> = async () => {
  const allPosts = getPostsByDescDate();
  const initialDisplayPosts = allPosts.slice(0, POSTS_PER_PAGE * 1);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
  };
  return { props: { posts: allPosts, initialDisplayPosts, pagination } };
};

const IndexPage: NextPage<PropsType> = ({
  posts,
  initialDisplayPosts,
  pagination,
}: PropsType) => (
  <>
    <div className="text-lg">Hello, I&apos;m Pio, a frontend developer. 👋</div>
    <div>
      Check my profile on{' '}
      <Link
        className="text-primary-600 dark:text-primary-400"
        href="https://github.com/piovischioh"
      >
        Github
      </Link>
      .
    </div>
    <PostList
      listTitle="Posts"
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
    />
  </>
);

export default IndexPage;
