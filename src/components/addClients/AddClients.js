import React, { useState } from 'react'
import { Button, Col, Form, Input } from 'antd'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddClients = () => {

    const [newClient, setNewClient] = useState(false)
    const navigate = useNavigate();


    const addClient = async (clientData) => {
        console.log(clientData);
        try {
            const login = await axios.post(`http://localhost:3100/api/client`, clientData);
            console.log(login);
            setNewClient(true)
            setTimeout(() => {
                setNewClient(false)
            }, 1000);
        } catch (error) {
            console.log(error)
        }
        navigate('/dashboard');
    }

    return (
        <div>
            <h1>Añadir Local</h1>
            <div className='LoginCont'>
                {/* LOGIN  */}
                <div className='containers'>
                    <Col xs={24} lg={12} offset={6}>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 10,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={addClient}
                            autoComplete="off"
                        >
                            <Form.Item
                                className='inps'
                                label="Nombre del local"
                                name="name"
                                type="text"
                            >
                                <Input maxLength={40} />
                            </Form.Item>

                            <Form.Item
                                className='inps'
                                label="Direccion"
                                name="address"
                                type="text"
                            >
                                <Input maxLength={50} />
                            </Form.Item>

                            <Form.Item
                                className='inps'
                                label="grupo"
                                name="group"
                                type="number"
                            >
                                <Input maxLength={1} />
                            </Form.Item>

                            <Form.Item
                                className='inps'
                                label="Precio"
                                name="price"
                                type="number"
                            >
                                <Input maxLength={6} />
                            </Form.Item>

                            <Form.Item
                                className='inps'
                                label="debe"
                                name="debe"
                                type="boolean"
                            >
                                <Input maxLength={6} />
                            </Form.Item>

                            <Form.Item
                                className='inps'
                                label="Con Fumigación"
                                name="conFumigacion"
                                type="boolean"
                            >
                                <Input maxLength={10} />
                            </Form.Item>

                            <Form.Item
                                className='itemBtn'
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button className='btns bg-cyan-900 text-white' type="" htmlType="submit">
                                    Añadir 
                                </Button>
                            </Form.Item>
                            {newClient ?
                            <div className='mb-5'>
                                <h1>Cliente añadido correctamente!</h1> 
                            </div> :
                            ""}
                        </Form>
                    </Col>
                </div>
            </div>
        </div>
    )
}

export default AddClients