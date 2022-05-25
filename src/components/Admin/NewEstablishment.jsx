import React from "react";
import { StyledNewEstablishment } from "./NewEstablishment.styled";

const NewEstablishment = () => {
  return (
    <StyledNewEstablishment>
      <h2>Add establishment</h2>
      <form>
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="Accommodation type" name="acomtype" />
        <input type="text" placeholder="Image URL" name="url" />
        <textarea rows="7" placeholder="Description" name="description" />
        <button>Create</button>
      </form>
    </StyledNewEstablishment>
  );
};

export default NewEstablishment;
