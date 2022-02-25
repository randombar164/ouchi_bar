import { useRouter } from "next/router";
import { useEffect } from "react";

export const pushHome = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/");
    }, [router]);
}
