import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import NAVIGATION_CONSTANTS from "../constants/navigation"

const INITIAL_ROUTE = NAVIGATION_CONSTANTS.INITIAL_ROUTE;

export default function Home() {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            router.replace(INITIAL_ROUTE);
        }
    }, [isLoading]);

    return (
        null
    );
}