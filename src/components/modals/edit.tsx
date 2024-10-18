import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ModalPropTypes } from "./type";

function EditModal({ open, handleOpen, id, url, refetch }: ModalPropTypes) {
    function handleEdit(): void {
        toast.success("Content successfully edited!");
        handleOpen();
        refetch()
    }
    return (
        <Dialog open={open} onOpenChange={handleOpen}>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle className='text-2xl'>
                        Edit content {id} {url}
                    </DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='name' className='text-right'>
                            Title
                        </Label>
                        <Input
                            id='title'
                            defaultValue='Test title'
                            className='col-span-3'
                        />
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='username' className='text-right'>
                            Options
                        </Label>
                        <Input
                            id='options'
                            defaultValue='Options'
                            className='col-span-3'
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleOpen} size='lg' variant='outline'>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleEdit}
                        size='lg'
                        variant='secondary'
                        type='submit'
                    >
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default EditModal;
