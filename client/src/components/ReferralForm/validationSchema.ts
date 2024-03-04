import z from "zod";

const validationSchema = z.object({
  _id: z.string(),
  givenName: z.string().trim().min(1, { message: "Required" }),
  surName: z.string().trim().min(1, { message: "Required" }),
  email: z.string().trim().min(1, { message: "Required" }).email(),
  phone: z.string().trim().min(1, { message: "Required" }),
  homeName: z.string().trim().min(1, { message: "Required" }),
  street: z.string().trim().min(1, { message: "Required" }),
  suburb: z.string().trim().min(1, { message: "Required" }),
  state: z.string().trim().min(1, { message: "Required" }),
  postCode: z.string().trim().min(1, { message: "Required" }),
  country: z.string().trim().min(1, { message: "Required" }),
});

export default validationSchema;
