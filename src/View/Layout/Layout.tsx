import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import { SIDEBAR_ROUTES } from '../../constants/routes';
import classes from './layout.module.css';
export default function Layout() {
  return (
    <>
      <Sidebar routes={SIDEBAR_ROUTES} />
      <main id="detail">
        <Link to="./addPost">AddPost</Link>
        <Outlet />
      </main>
    </>
  );
}
