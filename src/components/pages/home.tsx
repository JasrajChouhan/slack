import UserButton from '@/components/molecules/user-button';
import { useFetchWorkspaces } from '@/hooks/workspace';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const { isFetching, data: workspaces } = useFetchWorkspaces();

  const navigate = useNavigate();
  console.log(workspaces);

  useEffect(() => {
    if (isFetching) return;

    if (workspaces.data.length === 0 || !workspaces || !workspaces.data) {
      console.log(`No workspace is avaiable, Please create one workspace.`);
    } else {
      navigate(`/workspaces/${workspaces.data[0]._id}`);
    }
  }, [navigate, isFetching, workspaces]);

  return (
    <div>
      <UserButton />
    </div>
  );
};

export default Home;
