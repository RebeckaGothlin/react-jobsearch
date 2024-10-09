import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SearchBar from '../components/search/SearchBar';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default HomeLayout;
