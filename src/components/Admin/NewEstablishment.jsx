import React, { useState } from "react";
import { StyledNewEstablishment } from "./NewEstablishment.styled";
import axios from "axios";
import { apiUrl, apiHotels } from "../../utilities/api";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newHotel } from "../../utilities/schemas";

const NewEstablishment = () => {
  const [auth] = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newHotel),
  });

  // Handles form submission and sends data to API.
  const onSubmit = async (formData) => {
    const options = {
      data: {
        name: formData.hotelName,
        acomtype: formData.acomType,
        location: formData.location,
        imgsrc: formData.imgUrl,
        description: formData.description,
      },
    };
    const responseData = await axios.post(apiUrl + apiHotels, options, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    console.log(responseData);
  };

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
    </StyledNewEstablishment>
  );
};

export default NewEstablishment;
