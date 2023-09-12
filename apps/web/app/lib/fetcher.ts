import { createFetcher } from "fetcher";

const token =
    typeof window !== "undefined"
        ? window.localStorage?.getItem("token")
        : undefined;
export const fetcher = createFetcher({
    baseURL: "https://jsonplaceholder.typicode.com",
    token,
});
