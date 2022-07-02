import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().email().required(),
  message: yup.string().min(20).max(500).required()
}).required();