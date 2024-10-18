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
import { useEffect } from "react";
import { postTestformSchema } from "@/utils/schema";
import { urls } from "@/utils/urls";
import { testFormDefaultValues } from "@/utils/defaults";
import FormInput from "../input";
import { Form } from "../ui/form";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/utils/http";
import { TestDataI } from "../types";

function PostDrawer({ open, toggleModal }: ModalPropType) {


    const form = useForm<z.infer<typeof postTestformSchema>>({
        resolver: zodResolver(postTestformSchema),
        defaultValues: testFormDefaultValues,
    });

    const { refetch } = useQuery<TestDataI[]>({ 
        queryKey: ["tests"],
        queryFn: () => getData(urls.getAllTests),
        enabled: false
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

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}${urls.getAllTests}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Failed to submit form: ${response.status} ${response.statusText}`
                );
            }

            toast.success("Test successfully created");
            refetch()
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Something went wrong, look at the console.");
        } finally {
            toggleModal();
        }
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
                            <Button type='submit' variant='secondary' size='lg'>
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    );
}

export default PostDrawer;
