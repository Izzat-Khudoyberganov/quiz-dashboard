"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Header } from "@/components";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { loginFormSchema } from "@/utils/schema";
import { toast, Toaster } from "sonner";
import { useContext, useState } from "react";
import { UserContext } from "@/context/user-provider";
import { PasswordInput } from "@/components/ui/password-input";
import { urls } from "@/utils/urls";

function LoginPage() {
    const { handleUser } = useContext(UserContext);
    const [loading, setLoading] = useState<boolean>(false);
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            login: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof loginFormSchema>) {
        setLoading(true);
        // toast("Processing...", { duration: 2000 });
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}${urls.login}`,
                {
                    method: "POST",
                    body: JSON.stringify(values),
                }
            );
            if (res.status == 201) {
                toast.success("Action completed successfully!");
                setTimeout(() => {
                    handleUser();
                }, 1500);
            } else {
                toast.error("Could not login, check login and password!");
            }
        } catch (err) {
            console.error("err");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Header />
            <div className='w-full h-[90vh] flex items-center justify-center'>
                <Card className='w-[450px]'>
                    <CardHeader>
                        <CardTitle className='text-3xl text-center'>
                            Login
                        </CardTitle>
                        <CardDescription className='text-lg text-center'>
                            Enter your login and password
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className='space-y-8'
                            >
                                <div className='grid w-full items-center gap-4'>
                                    <div className='flex flex-col space-y-1.5'>
                                        <FormField
                                            control={form.control}
                                            name='login'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Login</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder='Login'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='password'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Password
                                                    </FormLabel>
                                                    <FormControl>
                                                        <PasswordInput
                                                            placeholder='Password'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className='mt-4 flex items-center justify-between'>
                                    <Button
                                        type='submit'
                                        size='lg'
                                        variant='outline'
                                        className='w-full'
                                        disabled={loading}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
                <Toaster />
            </div>
        </>
    );
}

export default LoginPage;
