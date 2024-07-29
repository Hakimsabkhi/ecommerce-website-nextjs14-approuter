import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route'; // Adjust path as needed

interface User {
  name: string;
  email: string;
  role: string;
}

interface Props {
  user?: User;
}

const ProfilePage = ({ user }: Props) => {
  if (!user) {
    return <div>You are not signed in</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      user: session?.user || null,
    },
  };
};

export default ProfilePage;
