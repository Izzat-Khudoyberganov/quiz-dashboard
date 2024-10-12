import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ui/theme-toggler";
import LogoutBtn from "./ui/logout-btn";
import { useContext } from "react";
import { UserContext } from "@/context/user-provider";

const Header = () => {
    const { user } = useContext(UserContext);
    return (
        <header className='p-4 border-slate-800 border-b-[1px]'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <a href=''>QUIZ APP</a>
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
