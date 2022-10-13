import { Link } from 'react-router-dom';
import { SidebarProps } from './Sidebar.Interface';

export default function Sidebar({ routes }: SidebarProps) {
  return (
    <aside id="sidebar">
      {routes.map((item, index) => (
        <Link key={index} to={item.path}>
          {item.label}
        </Link>
      ))}
    </aside>
  );
}
