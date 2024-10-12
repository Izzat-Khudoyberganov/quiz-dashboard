import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ui/theme-toggler";
import LogoutBtn from "./ui/logout-btn";

const Header = () => {
    return (
        <header className='p-4 border-gray-400 border-b-[1px]'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <a href=''>QUIZ APP</a>
                    <div className='flex items-center gap-4'>
                        <Avatar>
                            <AvatarImage
                                src='https://github.com/shadcn.png'
                                alt='@shadcn'
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <ModeToggle />
                        <LogoutBtn />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
