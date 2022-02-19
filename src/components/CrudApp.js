import React, { useState } from "react";

import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    club: "Boca Juniors",    
    nombre: "Sebestian",
    apellido: "Battaglia",
    edad: "41 años",
    nacimiento: "Santa Fe",
  },
  {
    id: 2,
    club: "River Plate",    
    nombre: "Marcelo",
    apellido: "Gallardo",
    edad: "46 años",
    nacimiento: "Merlo, BsAs",
  },
  {
    id: 3,
    club: "Racing Club",    
    nombre: "Fernando",
    apellido: "Gago",
    edad: "35 años",
    nacimiento: "Ciudadela, BsAs",
  },
  {
    id: 4,
    club: "Independiente",    
    nombre: "Eduardo",
    apellido: "Dominguez",
    edad: "43 años",
    nacimiento: "CABA",
  },
  {
    id: 5,
    club: "San Lorenzo",    
    nombre: "Pedro",
    apellido: "Troglio",
    edad: "54 años",
    nacimiento: "Lujan, Bsas",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);

  const [dataToEdit, setDataToEdit] = useState(null);
  // null: insercion - true: actualizacion

  const createData = (data) => {
    data.id = Date.now(); // nos provee un ID
    setDb([...db, data]);
  }; // crea un nuevo registro en la base de datos, recibe un objeto con la data que va a crear esos datos

  const updateData = (data) => {
    let nweData = db.map((el) => (el.id === data.id ? data : el)); // si el del elemento es igual al que recibes? reemplaza esa data y si no el elemento es igual
    setDb(nweData); //actualiza la base de datos
  }; // actualiza, recibe la data para poder actualizar

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Seguro que quiere eliminar el registro con el id ${id}?`
    ); // esto aca devulve un booleano: true or false
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  }; // elimina el registro, solo recibe el ID.

  return (
    <div>
      <h2>CRUD App - Entrenadores de 1ra División, AFA</h2>

      <article className="grid-1-2">
      <CrudForm
        createData={createData} // se ejecutara internamente cuando crearemos el formulario
        updateData={updateData} // se ejecutara internamente cuando actualizaremos el formulario
        dataToEdit={dataToEdit} // diferencia entre create y update
        setDataToEdit={setDataToEdit} //actualiza la data to edit
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit} //actualiza
        deleteData={deleteData} //elimina
      />
      </article>
    </div>
  );
};

export default CrudApp;
