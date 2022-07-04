import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().email("Email must be valid.").required("Email must be provided"),
  message: yup.string().min(20,"The message must contain at least 20 characters.").max(500,"The message is beyond its limit.(Maximum number of character is 500.)").required("Message is required")
}).required();