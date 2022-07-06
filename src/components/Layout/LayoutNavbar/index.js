import { Outlet } from 'react-router-dom';
// component
import Navbar from 'components/Navbar';

export default function LayoutNavbar() {
  return (
    <main className="app-layout">
      <Navbar />
      <div className="content-navbar-only ">
        <main>
          <Outlet />
        </main>
      </div>
    </main>
  );
}
