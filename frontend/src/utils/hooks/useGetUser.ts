import {usePostApi} from "src/utils/hooks/useApi";
import { useEffect } from "react";

export const useGetUser = () => {
    const [loading, response, error] = usePostApi('/users');
    const uuid = response?.user?.uuid;
    return uuid;
}