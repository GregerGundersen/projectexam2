import React, { useContext } from "react";
import { StyledNewEstablishment } from "./NewEstablishment.styled";
import axios from "axios";
import { apiUrl, apiHotels } from "../../utilities/api";
import AuthContext from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newHotel } from "../../utilities/schemas";
import { useMutation } from "react-query";

const NewEstablishment = () => {
  const [auth] = useContext(AuthContext);

  // Handles form submission and sends data to API.
  const addHotel = (hotel) => {
    return axios.post(apiUrl + apiHotels, hotel, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
  };

  const useAddHotelData = () => {
    return useMutation(addHotel);
  };

  const { mutate, isSuccess, isError } = useAddHotelData();

  const onSubmit = (formData) => {
    const options = {
      data: {
        name: formData.hotelName,
        acomtype: formData.acomType,
        location: formData.location,
        imgsrc: formData.imgUrl,
        description: formData.description,
      },
    };
    mutate(options);
  };

  // TEST

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newHotel),
  });

  return (
    <StyledNewEstablishment>
      <h2>Add establishment</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("hotelName")} />
        {errors.hotelName && <span>{errors.hotelName.message}</span>}
        <input
          type="text"
          placeholder="Accommodation type"
          {...register("acomType")}
        />
        {errors.acomType && <span>{errors.acomType.message}</span>}
        <input type="text" placeholder="Location" {...register("location")} />
        {errors.location && <span>{errors.location.message}</span>}
        <input type="text" placeholder="Image URL" {...register("imgUrl")} />
        {errors.imgUrl && <span>{errors.imgUrl.message}</span>}
        <textarea
          rows="7"
          placeholder="Description"
          {...register("description")}
        />
        {errors.description && <span>{errors.description.message}</span>}
        <button>Create</button>
      </form>
      <div
        className={
          isSuccess ? "message success" : isError ? "message error" : null
        }
      >
        {isSuccess ? "Hotel created" : isError ? "An error occured" : null}
      </div>
    </StyledNewEstablishment>
  );
};

export default NewEstablishment;
