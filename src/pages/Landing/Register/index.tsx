import React, { FunctionComponent, useRef } from 'react'
import { Row, Col, Button } from 'antd'
import SignupModal from './SignupModal'

const Register: FunctionComponent = ({ }) => {
    const signupModal = useRef<{ open(): void }>()

    return (
        <>
            <Row id="matricula">
                <Col lg={24} md={24} sm={24} style={{ width: "100%" }}>
                    <div className="bg-matricula" onClick={() => signupModal.current?.open()} style={{ cursor: 'pointer' }}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <Button size={"large"} onClick={() => signupModal.current?.open()}>
                            <b>Conte Comigo!</b>
                        </Button>
                    </div>
                </Col>
            </Row>
            <SignupModal ref={signupModal} />
        </>
    )
}

export default Register