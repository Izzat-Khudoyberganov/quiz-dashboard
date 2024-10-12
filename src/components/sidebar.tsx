import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className='w-[300px] border-r-[1px] border-gray-400 h-[90vh]'>
            <Command className='w-full'>
                <CommandInput placeholder='Type a command or search...' />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading='Routes'>
                        <CommandItem>
                            <Link to='/' className='w-full'>
                                User
                            </Link>
                        </CommandItem>
                        <CommandItem>
                            <Link to='/test' className='w-full'>
                                Test
                            </Link>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </aside>
    );
};

export default Sidebar;
