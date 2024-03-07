import { Outlet } from "react-router-dom";

function Profile() {
  return (
    <div className="min-h-[100vh] main-container">
      <Outlet />
    </div>
  );
}

export default Profile;
