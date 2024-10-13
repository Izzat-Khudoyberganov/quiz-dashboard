import { z } from "zod";

export const loginFormSchema = z.object({
    login: z.string().min(2, {
        message: "Login must be at least 2 characters.",
    }),
    password: z.string().min(4, {
        message: "Password must be at least 4 characters.",
    }),
});

export const postTestformSchema = z.object({
    title: z.string().min(5, {
        message: "Title is required filed",
    }),
    option_one: z.string().min(1, {
        message: "Title is required filed",
    }),
    option_two: z.string().min(1, {
        message: "Title is required filed",
    }),
    option_three: z.string().min(1, {
        message: "Title is required filed",
    }),
    option_four: z.string().min(1, {
        message: "Title is required filed",
    }),
});
