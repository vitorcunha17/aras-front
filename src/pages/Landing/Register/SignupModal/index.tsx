import React, { FunctionComponent, ForwardRefRenderFunction, useState, forwardRef, useImperativeHandle } from 'react'
import { Modal, Form, Input, Alert, DatePicker, InputNumber } from 'antd'
import { useForm } from 'antd/lib/form/util'
import logoTransparente from '../../../../images/logo_circular.png'
import { useMutation } from 'react-apollo'
import { SIGNUP } from './graphql'
import { SignupResponse, SignupVariables } from './interfaces'
import { ExclamationCircleFilled } from '@ant-design/icons'
import InputMask from 'antd-mask-input'
import { Student } from '../../../../interfaces/Student'
import Swal from 'sweetalert2'

const SignupModal: ForwardRefRenderFunction<{ open(): void }> = ({ }, ref) => {
    const [visible, setVisible] = useState<boolean>(false)
    const [visibleAlert, setVisibleAlert] = useState<boolean>(false)

    const [form] = useForm()

    const [signup, { data, loading }] = useMutation<SignupResponse, SignupVariables>(SIGNUP)

    useImperativeHandle(ref, () => ({
        open
    }))

    const onFinish = async (student: Student) => {
        await signup({
            variables: {
                student
            }
        })

        close()

        Swal.fire('Sucesso', 'Matrícula realizada com sucesso! Agora você pode logar no sistema', 'success')
    }

    const open = (): void => {
        setVisible(true)
    }

    const close = (): void => {
        setVisible(false)
    }

    return (
        <Modal
            visible={visible}
            title={
                <div>
                    <img
                        alt="logo"
                        src={logoTransparente}
                        style={{
                            width: "40px",
                            height: "40px",
                            marginBottom: "-15px",
                            marginTop: "-15px",
                            marginLeft: "-15px"
                        }}
                    />
                    &nbsp;
                    <span style={{ fontWeight: "bold" }}>Formuláro de Matrícula</span>
                </div>
            }
            onOk={() => form.submit()}
            onCancel={close}
            cancelText="Cancelar"
            okText="Matricular-se"
        >
            <Form form={form} onFinish={onFinish} layout="vertical">
                <Form.Item
                    label="Nome completo"
                    name="name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: 'email' }]}
                >
                    <Input
                        suffix={
                            <div
                                onClick={() => setVisibleAlert(!visibleAlert)}
                                style={{ cursor: "pointer", marginBottom: "5px" }}
                            >
                                <ExclamationCircleFilled />
                            </div>
                        }
                    />
                </Form.Item>
                <Form.Item
                    label="Senha"
                    name="password"
                    rules={[{ required: true, min: 6 }]}
                >
                    <Input.Password />
                </Form.Item>
                {
                    visibleAlert && (
                        <div className="col-12" style={{ marginTop: "15px" }}>
                            <Alert
                                message="O e-mail e senha serão utilizados para acesso ao sistema posteriormente."
                                type="info"
                                closeText="x"
                            />
                        </div>
                    )
                }
                <Form.Item
                    label="Data de Nascimento"
                    name="bornDate"
                    rules={[{ required: true }]}
                >
                    <DatePicker format="DD/MM/YYYY" style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    label="Rua"
                    name="street"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Bairro"
                    name="neighborhood"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Número"
                    name="number"
                    rules={[{ required: true }]}
                >
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    label="Cidade"
                    name="city"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Telefone"
                    name="workPhone"
                >
                    <InputMask mask="(11) 11111-1111" />
                </Form.Item>
                <Form.Item
                    label="CPF"
                    name="cpf"
                    rules={[{ required: true }]}
                >
                    <InputMask mask="111.111.111-11" />
                </Form.Item>
                <Form.Item
                    label="RG"
                    name="rg"
                    rules={[{ required: true }]}
                >
                    <InputMask mask="11.111.111-1" />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default forwardRef(SignupModal)
