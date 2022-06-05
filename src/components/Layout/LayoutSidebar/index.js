import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// component
import Sidebar from 'components/Sidebar';

export default function LayoutSidebar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggle = () => setToggleSidebar(!toggleSidebar);

  return (
    <main className="app-layout">
      <Sidebar toggleSidebar={toggleSidebar} handleToggle={handleToggle}>
        <div className={`content ${toggleSidebar && 'collapsed'}`}>
          <main>
            <Outlet />
          </main>
        </div>
      </Sidebar>
    </main>
  );
}
