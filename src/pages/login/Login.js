import { Button, Col, Form, Input } from 'antd'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const URL = process.env.REACT_APP_API_URL;

const Login = () => {
    const navigate = useNavigate();
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("currentUser")));
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("userToken")));

    const onLogin = async (loginData) => {
        try {
            const login = await axios.post(`http://localhost:3100/api/login`, loginData);
            localStorage.setItem('userToken', JSON.stringify(login.data.token));
            setToken(login.data.token)
            setUser(login.data.user)
            navigate('/dashboard');
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div >
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
                            onFinish={onLogin}
                            autoComplete="off"
                        >
                            <Form.Item
                            className='inps'
                                label="Usuario"
                                name="user"
                               type="text"
                            >
                                <Input maxLength={30} />
                            </Form.Item>

                            <Form.Item
                            className='inps'
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password maxLength={30} />
                            </Form.Item>

                            <Form.Item
                            className='itemBtn'
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button className='btns bg-cyan-900 text-white' type="" htmlType="submit">
                                    Iniciar Sesión
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </div>
        </div>
    </div>
  )
}

export default Login