import { useContext } from "react";
import { UserContext } from "@/context/user-provider";
import { Dashboard, LoginPage } from "@/pages";

const SwitchRoute = () => {
    const { user } = useContext(UserContext);
    return user ? <Dashboard /> : <LoginPage />;
};

export default SwitchRoute;
