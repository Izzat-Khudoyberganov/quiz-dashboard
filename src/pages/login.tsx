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
import { PasswordInput } from "@/components/password-input";
import { loginFormSchema } from "@/utils/schema";

function LoginPage() {
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            login: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof loginFormSchema>) {
        console.log(values);
    }

    return (
        <>
            <Header />
            <div className='w-full h-[90vh] flex items-center justify-center'>
                <Card className='w-[350px]'>
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
                                <div>
                                    <Button type='submit'>Submit</Button>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default LoginPage;
