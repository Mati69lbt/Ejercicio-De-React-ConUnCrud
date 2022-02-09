import React from "react";

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
    let {club, entrenador, id} = el;
  return (
    <tr>
      <td>{club}</td>
      <td>{entrenador}</td>
      <td>
        <button onClick={()=> setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
