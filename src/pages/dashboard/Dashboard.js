/* eslint-disable jsx-a11y/scope */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddClients from '../../components/addClients/AddClients'
import TableGroups from '../../components/tableGroups/TableGroups'

const Dashboard = () => {
    const [group, setGroup] = useState("")
    const [data, setData] = useState([])

    const getData = async () => {
        const login = await axios.get(`http://localhost:3100/api/clients`);
        if(group === "grupo1"){
            const dataFilter = login.data.clients.filter(client => 
                client.group == 1)
                setData(dataFilter)
        } else if (group === "grupo2") {
             const dataFilter = login.data.clients.filter(client => 
               client.group == 2)
               setData(dataFilter)
        }
        
    }

    const resetGroups = () => {
        setData([])
        setGroup("")
    }

    useEffect(() => {
        getData()
    }, [group])
    

    return (
        <div >
            {!group ? 
            <div className='container flex flex-row justify-around items-center'>
                <div
                    className='btn btn-primary w-full m-5'
                    onClick={() => setGroup("grupo1")}>
                    <h1>GRUPO 1</h1>
                </div>
                <div
                    className='btn btn-danger w-full m-5'
                    onClick={() => setGroup("grupo2")}>
                    <h2>GRUPO 2</h2>
                </div>
            </div> :
            <div className='container flex flex-row justify-around items-center'>
                <div
                    className='btn btn-secondary w-full m-5'
                    onClick={() => resetGroups()}>
                    <h1>Seleccionar grupo</h1>
                </div>
            </div>
            }
            <div className='container'>
                {group === "grupo1" ? 
            <TableGroups 
            data={data}
            title="Grupo1"/> :
            ""}
            {group === "grupo2" ? 
            <TableGroups 
            data={data}
            title="Grupo 2"/> :
            ""}
            </div>
            <div className='container'>
                <AddClients />
            </div>
        </div>
    )
}

export default Dashboard