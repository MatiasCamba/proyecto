import React from "react";
import { useState } from "react";

const registerForm = () => {
  const [nombre,setNombre] = useState('');

  return (
    <div>
      <label htmlFor=""></label>
      <input type="text" />
      <label htmlFor=""></label>


      <input type="text" />
      <label htmlFor=""></label>
      <input type="text" />
      <label htmlFor=""></label>
      <input type="text" />
      <button>Enviar</button>
      <button>No enviar</button>
    </div>
  );
};

export default registerForm;
