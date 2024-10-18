import axios from "axios";

export async function getData(url: string) {
    try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}${url}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Something went wrong while fetching data");
    }
}
