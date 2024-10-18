import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { ModalPropType } from "@/type";
import { postTestformSchema } from "@/utils/schema";
import { urls } from "@/utils/urls";
import { testFormDefaultValues } from "@/utils/defaults";
import { FormInput } from "@/components";
import { Form } from "@/components/ui/form";
import { getData, postData } from "@/utils/http";
import { TestDataI } from "@/components/types";
import { toast } from "sonner";
import { httpsStatusMessages } from "@/utils/http-status-messages";
import { MutationParams } from "./type";
import { ErrorBoundary } from "@/components";

function PostDrawer({ open, toggleModal }: ModalPropType) {
    const { mutate, isError, error, isPending } = useMutation<
        unknown,
        Error,
        MutationParams
    >({
        mutationFn: ({ url, data }) => postData({ url, data }),

        onSuccess: () => {
            toggleModal();
            toast.success(httpsStatusMessages.creating);
            refetch();
        },

        onError: (error) => {
            console.error(httpsStatusMessages.error, error);
            toast.error(httpsStatusMessages.error);
        },
    });

    const form = useForm<z.infer<typeof postTestformSchema>>({
        resolver: zodResolver(postTestformSchema),
        defaultValues: testFormDefaultValues,
    });

    const { refetch } = useQuery<TestDataI[]>({
        queryKey: ["tests"],
        queryFn: () => getData(urls.tests),
        enabled: false,
    });

    async function onSubmit(values: z.infer<typeof postTestformSchema>) {
        const data = {
            title: values.title,
            options: [
                values.option_one,
                values.option_two,
                values.option_three,
                values.option_four,
            ],
        };

        mutate({ url: urls.tests, data });
    }

    useEffect(() => {
        if (!open) {
            form.reset();
        }
    }, [open]);

    return (
        <Sheet open={open} onOpenChange={toggleModal}>
            <SheetContent className='w-[500px]'>
                <SheetHeader>
                    <SheetTitle>Create new test here</SheetTitle>
                </SheetHeader>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-8 mt-5'
                    >
                        <FormInput
                            name='title'
                            label='Title'
                            placeholder='Test title'
                            control={form.control}
                        />
                        <FormInput
                            name='option_one'
                            label='A variant (must be correct variant for this text)'
                            placeholder='First option'
                            control={form.control}
                        />
                        <FormInput
                            name='option_two'
                            label='B variant'
                            placeholder='Second option'
                            control={form.control}
                        />
                        <FormInput
                            name='option_three'
                            label='C variant'
                            placeholder='Third option'
                            control={form.control}
                        />
                        <FormInput
                            name='option_four'
                            label='D variant'
                            placeholder='Fourth option'
                            control={form.control}
                        />
                        <div className='flex items-center justify-between'>
                            <Button
                                type='button'
                                variant='outline'
                                size='lg'
                                onClick={toggleModal}
                            >
                                Cancel
                            </Button>
                            <Button
                                type='submit'
                                variant='secondary'
                                size='lg'
                                disabled={isPending}
                            >
                                {isPending ? "Submiting..." : "Submit"}
                            </Button>
                        </div>
                    </form>
                </Form>

                {isError && (
                    <ErrorBoundary
                        title={httpsStatusMessages.error}
                        message={error.message}
                    />
                )}
            </SheetContent>
        </Sheet>
    );
}

export default PostDrawer;
