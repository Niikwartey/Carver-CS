import React, { useContext } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { UserContext } from '../../../contexts/userContext';

const CLIENT_ID = "91435094725-2ggdmf95unrqa5pll4h5p1suvmu5gmfn.apps.googleusercontent.com";

function GoogleAuthBtn() {
  const { user, setUser } = useContext(UserContext);

  const handleGoogleLogin = ({profileObj}) => setUser(profileObj);
  const handleGoogleLogout = () => setUser(null);
   
  return (
    <div>
        {
          user ?
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText={ user ? "Logout" : "Login" }
            onLogoutSuccess={handleGoogleLogout}
            onFailure={handleGoogleLogout}
            cookiePolicy={'single_host_origin'}
          />
          :
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText={ user ? "Logout" : "Login" }
            onSuccess={handleGoogleLogin}
            onFailure={handleGoogleLogout}
            cookiePolicy={'single_host_origin'}
          />
        }
        
    </div>
  );
}
 
export default GoogleAuthBtn;