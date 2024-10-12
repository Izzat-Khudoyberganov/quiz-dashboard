import { Link } from "react-router-dom";
import {
    Command,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";

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
                        <CommandItem>
                            <Link to='/' className='w-full p-2 text-lg'>
                                User
                            </Link>
                        </CommandItem>
                        <CommandItem>
                            <Link to='/test' className='w-full p-2 text-lg'>
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
