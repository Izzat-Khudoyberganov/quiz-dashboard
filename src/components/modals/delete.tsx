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
import { useMutation } from "@tanstack/react-query";
import { deleteData, DeleteParamsI } from "@/utils/http";
import { ErrorBoundary } from "@/components";

function DeleteModal({ open, handleOpen, id, url, refetch }: ModalPropTypes) {
    const { mutate, isError, isPending, error } = useMutation<
        void,
        Error,
        DeleteParamsI
    >({
        mutationFn: deleteData,

        onSuccess: () => {
            toast.success(httpsStatusMessages.deleting);
            handleOpen();
            refetch();
        },

        onError: (error) => {
            console.error(httpsStatusMessages.error, error);
            toast.error(httpsStatusMessages.error);
        },
    });

    async function handleDelete(): Promise<void> {
        mutate({ url, id });
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
                            disabled={isPending}
                        >
                            {isPending ? "Deleting..." : "Delete"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
                {isError && (
                    <ErrorBoundary
                        title={httpsStatusMessages.error}
                        message={error.message}
                    />
                )}
            </Dialog>
            <Toaster />
        </>
    );
}

export default DeleteModal;
