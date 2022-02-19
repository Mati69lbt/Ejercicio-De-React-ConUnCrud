import React, { useState, useEffect } from "react";

const initialForm = {
  id: null,
  club: "",
  nombre: "",
  apellido: "",
  edad: "",
  nacimiento: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    }); // actualizacion del input del formulario
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Para que no se autoprocese el formulario
    if (!form.club || !form.apellido) {
      alert("Datos Incompletos");
      return;
    } // no puedo enviar la tabla vacia
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm); // todos resetean la tabla
    setDataToEdit(null);
  };
  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>{" "}
      {/* si el formulario tiene algo, que diga editar, si esta vacio, que diga agregar */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="club"
          placeholder="Club"
          onChange={handleChange}
          value={form.club}
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.nombre}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={handleChange}
          value={form.apellido}
        />
        <input
          type="text"
          name="edad"
          placeholder="Edad"
          onChange={handleChange}
          value={form.edad}
        />
         <input
          type="text"
          name="nacimiento"
          placeholder="Lugar de Nacimiento"
          onChange={handleChange}
          value={form.nacimiento}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
