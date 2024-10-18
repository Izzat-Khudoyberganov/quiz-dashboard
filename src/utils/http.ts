import axios from "axios";
import { httpsStatusMessages } from "./http-status-messages";

interface PostDataParams<T> {
    url: string;
    data: T;
}

export interface DeleteParamsI {
    url: string;
    id: number;
}

const baseUrl = import.meta.env.VITE_API_URL;
const headers = {
    "Content-Type": "application/json",
};

export async function getData(url: string) {
    try {
        const res = await axios.get(`${baseUrl}${url}`);
        return res.data;
    } catch (error) {
        console.error(httpsStatusMessages.error, error);
        throw new Error(httpsStatusMessages.error);
    }
}

export async function postData<T, R>({
    url,
    data,
}: PostDataParams<T>): Promise<R> {
    const res = await fetch(`${baseUrl}${url}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers,
    });

    if (!res.ok) {
        const error = new Error(httpsStatusMessages.error);
        throw error;
    }
    const { content } = await res.json();
    return content as R;
}

export async function deleteData({ url, id }: DeleteParamsI): Promise<void> {
    const res = await fetch(`${baseUrl}${url}/${id}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        const error = new Error(httpsStatusMessages.error);
        throw error;
    }
}
