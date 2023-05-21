import { CButton, CCard, CCardBody, CContainer, CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'
import React from 'react'

const Login = () => {
    return (
        <div>
            <CContainer xl className='vw-100 vh-100 d-flex align-items-center justify-content-center flex-column gap-4'>
                <p className="h1 align-self-start">Login page</p>

                <CCard className='w-100 h-25 d-flex justify-content-center align-items-center p-4 shadow-lg p-3 mb-5 bg-body rounded'>
                    <CCardBody className='w-100 h-100 d-flex justify-content-center align-items-center flex-column'>
                        <CInputGroup className="mb-3">
                            <CInputGroupText id="basic-addon1">E-Mail</CInputGroupText>
                            <CFormInput placeholder="masukan e-mail anda..." aria-label="E-Mail" aria-describedby="basic-addon1" />
                        </CInputGroup>
                        <CInputGroup className="mb-3">
                            <CInputGroupText id="basic-addon1">Password</CInputGroupText>
                            <CFormInput placeholder="masukan password anda..." aria-label="password" aria-describedby="basic-addon1" />
                        </CInputGroup>
                    </CCardBody>
                </CCard>

                <CButton color='light' className='align-self-start'><p className='h4'>Login</p></CButton>
            </CContainer>
        </div>
    )
}

export default Login