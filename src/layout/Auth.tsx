import { Outlet } from "react-router-dom";
import {OnboardingCarousel} from '../components'
function Auth() {
  return (
    <div className="flex min-h-[100vh] max-h-[100vh]  w-full justify-center ">
      <div className="bg-[#ffffff] authFormDiv pb-20 pt-[60px] lg:w-1/2">
        <Outlet />
      </div>
      <OnboardingCarousel />
    
    </div>
  );
}

export default Auth;
