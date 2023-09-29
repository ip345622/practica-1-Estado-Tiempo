import {LoginSocialFacebook} from 'react-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';

function LoginFacebook(){
    return (
       <LoginSocialFacebook
       appId=""
       onResolve={(response) =>{
       }}
        >
        <FacebookLoginButton />
       </LoginSocialFacebook>
    )
}

export default LoginFacebook;