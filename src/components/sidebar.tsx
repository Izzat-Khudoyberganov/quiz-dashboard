import { Link } from "react-router-dom";
import {
    Command,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { routeData } from "./data";

const Sidebar = () => {
    return (
        <aside className='w-[350px] border-r-[1px] border-slate-800 h-[90vh]'>
            <Command className='w-full'>
                <CommandInput
                    className='text-lg'
                    placeholder='Type a command or search...'
                />
                <CommandList>
                    <CommandGroup className='text-lg px-2'>
                        {routeData.map(({ id, href, link }) => (
                            <CommandItem key={id}>
                                <Link to={href} className='w-full p-2 text-lg'>
                                    {link}
                                </Link>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command>
        </aside>
    );
};

export default Sidebar;
