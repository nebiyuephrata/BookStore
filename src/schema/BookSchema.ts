import * as z from "zod";

export const createBookSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: "title should be greater than 1 character" }),
    price: z.number().min(0, { message: "price must be filled " }),
    author: z.string().min(1, {
      message: "author name should be greater than 1 character",
    }),
    tags: z.array(z.string()).min(1,{message:"tags are requiered "}),
    cover_image: z.string().min(1, {
      message: "cover image should be greater than 1 character",
    }),
  }),
});


export const updateBookSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z.object({
    title: z
      .string()
      .min(1, { message: "title should be greater than more character" }),
    price: z.number().min(0, { message: "price must be filled " }),
    author: z.string().min(1, {
      message: "author name  should be greater than more character",
    }),
    tags: z.array(z.string()).min(1,{message:"tags are requiered "}),
    cover_image: z.string().min(1, {
      message: "   cover image should be greater than more character",
    }),
  }),
})

export const updateBookPriceSchema = z.object({
  params: z.object({ id: z.string(), price: z.string() }),
})
