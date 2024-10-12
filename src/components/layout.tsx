import Test from "@/pages/test";
import User from "@/pages/user";
import { Route, Routes } from "react-router-dom";

const Layout = () => {
    return (
        <div className='p-5'>
            <Routes>
                <Route path='/' element={<User />} />
                <Route path='/test' element={<Test />} />
            </Routes>
        </div>
    );
};

export default Layout;
