import { USER_SIGNIN, USER_SIGNUP } from "../constants/NavigationConstants";
import ProtectedRoute from "../../Common/routes/ProtectedRoute";
import SigninPageRoute from "./SigninPageRoute/SigninPageRoute";
import SignupPageRoute from "./SignupPageRoute/SignupPageRoute";

const authenticationRoutes = [
    < ProtectedRoute exact path={USER_SIGNIN} component={SigninPageRoute} />,
    < ProtectedRoute exact path={USER_SIGNUP} component={SignupPageRoute} />
]

export default authenticationRoutes;