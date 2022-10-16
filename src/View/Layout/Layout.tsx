import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import { SIDEBAR_ROUTES } from '../../constants/routes';
import classes from './layout.module.css';
export default function Layout() {
  return (
    <div className={classes.container}>
      <Sidebar routes={SIDEBAR_ROUTES} />
      <main id="detail" className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
}
