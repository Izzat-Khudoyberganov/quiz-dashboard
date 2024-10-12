import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ui/theme-toggler";
import LogoutBtn from "./ui/logout-btn";
import { useContext } from "react";
import { UserContext } from "@/context/user-provider";
import { Link } from "react-router-dom";

const Header = () => {
    const { user } = useContext(UserContext);
    return (
        <header className='p-4 border-slate-800 border-b-[1px]'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <Link to={"/"} className='font-bold text-3xl'>
                        QUIZ APP
                    </Link>
                    <div className='flex items-center gap-4'>
                        {user && (
                            <Avatar>
                                <AvatarImage
                                    src='https://github.com/shadcn.png'
                                    alt='@shadcn'
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        )}
                        <ModeToggle />
                        {user && <LogoutBtn />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
