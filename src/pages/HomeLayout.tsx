import { Link, Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <h1>Hej</h1>
      <Link to={'/ads'}>Test</Link>
      <Link to={'/ad/:id'}>En ad</Link>
      <Outlet />
    </>
  );
};
export default HomeLayout;
