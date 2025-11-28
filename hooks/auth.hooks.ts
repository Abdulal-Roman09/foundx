import { registerUser } from "@/services/AuthServices";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { loginUser } from "@/services/AuthServices";

export const useUserRegisteration = () => {
    const mutation = useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_REGISTER"],
        mutationFn: async (userData) => await registerUser(userData),
        onSuccess: () => {
            toast.success("User is created successfully");
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });

    return { ...mutation, isPending: (mutation as any).isLoading };
};


export const useUserLogin = () => {
    const mutation = useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_LOGIN"],
        mutationFn: async (credentials) => await loginUser(credentials),
        onSuccess: () => {
            toast.success("Logged in successfully");
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });

    return { ...mutation, isPending: (mutation as any).isLoading };
};
