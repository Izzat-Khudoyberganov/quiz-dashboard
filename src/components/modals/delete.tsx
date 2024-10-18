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
import { Toaster } from "../ui/sonner";
import { ModalPropTypes } from "./type";
import { httpsStatusMessages } from "@/utils/http-status-messages";

function DeleteModal({ open, handleOpen, id, url, refetch }: ModalPropTypes) {
    // delete fn
    async function handleDelete(): Promise<void> {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}${url}/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.ok) {
                toast.success(httpsStatusMessages.deleting);
                handleOpen();
                refetch();
            } else if (response.status === 404) {
                toast.error(httpsStatusMessages.notfound);
            } else {
                const errorData = await response.json();
                console.error(httpsStatusMessages.error, errorData);
                toast.error(
                    `Error: ${errorData.message || "Failed to delete content."}`
                );
            }
        } catch (error) {
            console.error(httpsStatusMessages.error, error);
            toast.error(httpsStatusMessages.error);
        }
    }

    return (
        <>
            <Dialog open={open} onOpenChange={handleOpen}>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle className='text-2xl'>
                            Delete test {id}
                        </DialogTitle>
                        <DialogDescription>
                            Are you really sure to delete this test content? It
                            may be never restorable proccess!
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className='flex items-center justify-between flex-row mt-5'>
                        <Button
                            size='lg'
                            variant='secondary'
                            onClick={handleOpen}
                        >
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
            <Toaster />
        </>
    );
}

export default DeleteModal;
