import { Link, Outlet } from 'react-router-dom';
import classes from './layout.module.css';
export default function Layout() {
  return (
    <>
      <aside id="sidebar">
        <h1 className={classes.sidebarColor}>Sidebar</h1>
        <div></div>
        <nav></nav>
      </aside>
      <main id="detail">
        <Link to="./addPost">AddPost</Link>
        <Outlet />
      </main>
    </>
  );
}
