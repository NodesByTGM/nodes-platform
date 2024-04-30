import { FC, useState } from "react";
import { useAuth } from "../../context/hooks";
import { mainClient } from "../../utilities/client";
import AppConfig from "../../utilities/config";
import {HandleLogout} from '../../components'
// interface RouteComponent {
//     children: ReactNode | ReactNode[],
// }

const getProfile = (WrappedComponent: FC) => {
  // The returned component is now a functional component
  const WithLogger: FC = (props) => {
    const { user, setUser } = useAuth();
    const [profileLoading, setProfileLoading] = useState(true);
    const [profileError, setProfileError] = useState<string | null>(null);
    if (!user) {
      mainClient
        .get(AppConfig.API_ENDPOINTS.Auth.ProfileURL, {
          headers: {
            Authorization: "Token " + localStorage.getItem("bearerToken"),
          },
        })
        .then((r) => {
          if (r.status === 200) {
            setUser(r?.data?.result?.user);
            setProfileLoading(false);
          }
        })
        .catch((e) => {
          console.log(e);
          setProfileLoading(false);
          setProfileError(e);
        });
    }
    if (profileLoading) {
      // Show loading indicator if profile is still being fetched
      console.log('profileLoading')
    }

    // if (profileError) {
    //   // Redirect to login page if profile fetching fails
    //   return <span className="`"> Login</span>;
    // } else {
      return <div className="">
        {
          profileError ?  <HandleLogout /> :  <WrappedComponent {...props} />
        }
      </div>;
    // }
  };
  return WithLogger;
};




export default getProfile;
