"use client";
import { useClientSide, useLocalStorage } from "@reactusehooks/core";

function Home() {
    const [token, setToken] = useLocalStorage("token", "");
    const isClientSide = useClientSide();

    return (
        <div className="bg-red-500">
            Home Page {isClientSide ? token : null}{" "}
        </div>
    );
}

export default Home;
