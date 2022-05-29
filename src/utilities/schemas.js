import * as yup from "yup";

export const newHotel = yup.object().shape({
  hotelName: yup.string().required("Hotel name is required."),
  acomType: yup.string().required("Accommodation type is required."),
  location: yup.string().required("Location is required."),
  imgUrl: yup
    .string()
    .matches(
      /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|png|svg))/i,
      "Must be a valid media link(jpg, jpeg, png, gif, png, svg)"
    )
    .required("Image URL is required."),
  description: yup.string().required("Hotel description is required."),
});

export const contact = yup.object().shape({
  name: yup.string().required("Name is required."),
  email: yup
    .string()
    .required("E-Mail is required")
    .email("Must be a valid e-mail"),
  message: yup.string().required("Message is required."),
});

export const booking = yup.object().shape({
  name: yup.string().required("Name is required."),
  email: yup
    .string()
    .required("E-Mail is required")
    .email("Must be a valid e-mail"),
  bookingRequest: yup.string().required("Message is required."),
});

export const logIn = yup.object().shape({
  identifier: yup.string().required("E-Mail is required"),
  password: yup.string().required("Password is required"),
});
