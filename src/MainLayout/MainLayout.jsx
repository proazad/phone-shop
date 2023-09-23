import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h2 className="text-5xl">Main Layout</h2>
      <Outlet />
    </div>
  );
};

export default MainLayout;
