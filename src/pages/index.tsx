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
    <div className=" align-bottom">
      <span className="align-bottom">Check my profile on</span>
      <Link href="https://github.com/piovischioh">
        <svg
          className="ml-2 inline-block h-[24px] w-[24px] fill-current text-lg text-black transition hover:text-gray-700 dark:text-white hover:dark:text-gray-300"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>GitHub icon</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </Link>
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
