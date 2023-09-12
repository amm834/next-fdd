import axios, { AxiosInstance } from "axios";

type FetcherConfig = {
    baseURL: string;
    token?: string | null | undefined;
    options?: typeof axios.defaults;
};

export const createFetcher = ({
    baseURL,
    token = "",
    ...options
}: FetcherConfig): AxiosInstance => {
    const fetcher = axios.create({
        baseURL,
        ...options,
    });

    fetcher.interceptors.request.use((config) => {
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
    });

    return fetcher;
};
