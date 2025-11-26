import { z } from "zod";

const registerValidationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),

  email: z.string().email({ message: "Invalid email address" }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),

  mobileNumber: z
    .string()
    .min(10, { message: "Mobile number must be at least 10 digits" })
    .max(15, { message: "Mobile number is too long" }),

  profilePhoto: z.string().url().optional(),
});

export default registerValidationSchema;
