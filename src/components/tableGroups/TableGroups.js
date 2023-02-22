import React from 'react'

const TableGroups = ({title, data}) => {
    console.log("data", data);
  return (
    <div className='container'>
        <table className='table'>
            {data ? 
            <thead>
                <tr>
                    <th>#</th>
                    <th>Empresa</th>
                    <th>Direccion</th>
                    <th>Precio</th>
                    <th>Debe</th>
                    <th>Fumiga</th>
                    <th>Grupo</th>
                </tr>
            </thead> :
            ""
            }
            <tbody>
                {data.map((cliente, index) => (
                    <tr key={cliente._id}>
                        <th>{index}</th>
                        <th>{cliente.name}</th>
                        <th>{cliente.address}</th>
                        <th>{cliente.price}</th>
                        <th>{cliente.debe === true ? "SI" : "NO"}</th>
                        <th>{cliente.conFumigacion === true ? "SI" : "NO"}</th>
                        <th>{cliente.group}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TableGroups