import React from "react";

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
    let {club, nombre, apellido, edad, nacimiento, id} = el;
  return (
    <tr>
      <td>{club}</td>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{edad}</td>
      <td>{nacimiento}</td>
      

      <td>
        <button onClick={()=> setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
