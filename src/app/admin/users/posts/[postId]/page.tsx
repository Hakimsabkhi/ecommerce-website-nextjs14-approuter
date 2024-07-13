// src/app/admin/users/posts/[postId]/page.tsx
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface PostPageProps {
  postId: string;
}

interface Params extends ParsedUrlQuery {
  postId: string;
}

const PostPage: React.FC<PostPageProps> = ({ postId }) => {
  return (
    <div>
      <h1>Post ID: {postId}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { postId } = context.params as Params;

  return {
    props: {
      postId,
    },
  };
};

export default PostPage;
