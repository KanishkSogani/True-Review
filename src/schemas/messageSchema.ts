import { z } from "zod";

export const messageSchema = z.object({
  acceptMessages: z
    .string()
    .min(10, { message: "Message must be atleast 10 characters" })
    .max(200, { message: "Message must be under 200 characters" }),
});
