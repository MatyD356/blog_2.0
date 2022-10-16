import { Link } from 'react-router-dom';
import { SidebarProps } from './Sidebar.Interface';
import classes from './sidebar.module.css';

export default function Sidebar({ routes }: SidebarProps) {
  return (
    <aside id="sidebar" className={classes.container}>
      {routes.map((item, index) => (
        <Link key={index} to={item.path}>
          {item.label}
        </Link>
      ))}
    </aside>
  );
}
