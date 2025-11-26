import { registerUser } from "@/services/AuthServices";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const useUserRegisteration = () => {
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_REGISTER"],
        mutationFn: async (userData) => await registerUser(userData),
        onSuccess: () => {
            toast.success("User is created successfully");
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });
};

export default useUserRegisteration;
