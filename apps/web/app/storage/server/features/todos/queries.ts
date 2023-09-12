import { useQuery } from "@tanstack/react-query";
import { todoKeys } from "./keys";
import { fetcher } from "@/lib/fetcher";

async function getAllTodos() {
    return await fetcher
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.data);
}

export const useGetAllTodos = () =>
    useQuery({
        queryKey: todoKeys.getAllTodos(),
        queryFn: getAllTodos,
    });
