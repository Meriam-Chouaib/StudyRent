import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';
import SideBar from './sidebar/SideBar';

export default function DashboardLayout() {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  );
}
