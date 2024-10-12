import { useContext } from "react";
import { UserContext } from "@/context/user-provider";
import Dashboard from "./dashboard";
import LoginPage from "./login";

const SwitchRoute = () => {
    const { user } = useContext(UserContext);
    return <>{user ? <Dashboard /> : <LoginPage />}</>;
};

export default SwitchRoute;
