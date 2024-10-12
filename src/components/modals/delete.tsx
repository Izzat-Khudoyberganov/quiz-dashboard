import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

type Props = {
    open: boolean;
    handleOpen: () => void;
};

function DeleteModal({ open, handleOpen }: Props) {
    function handleDelete(): void {
        toast.success("Content successfully deleted!");
        handleOpen();
    }
    return (
        <Dialog open={open} onOpenChange={handleOpen}>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle className='text-2xl'>Delete test</DialogTitle>
                    <DialogDescription>
                        Are you really sure to delete this test content? It may
                        be never restorable proccess!
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button size='lg' variant='secondary' onClick={handleOpen}>
                        Cancel
                    </Button>
                    <Button
                        size='lg'
                        variant='destructive'
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default DeleteModal;
