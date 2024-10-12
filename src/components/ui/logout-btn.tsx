import { useContext, useState } from "react";
import { UserContext } from "@/context/user-provider";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./button";
import { toast } from "sonner";
import { Toaster } from "./sonner";

const LogoutBtn = () => {
    const { handleUser } = useContext(UserContext);
    const [open, setOpen] = useState<boolean>(false);

    function handleLogout(): void {
        toast.info("You logged out successfully!");
        setTimeout(() => {
            handleUser();
        }, 1500);
    }

    function handleOpenModal(): void {
        setOpen(!open);
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenModal}>
            <DialogTrigger className='text-xl'>Logout</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='text-2xl mb-5'>
                        Are you absolutely sure?
                    </DialogTitle>
                    <div className='flex items-center justify-between mt-5'>
                        <Button
                            size='lg'
                            variant='outline'
                            onClick={handleOpenModal}
                        >
                            Cancel
                        </Button>
                        <Button
                            size='lg'
                            variant='destructive'
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </div>
                </DialogHeader>
            </DialogContent>
            <Toaster />
        </Dialog>
    );
};

export default LogoutBtn;
