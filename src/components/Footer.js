import { CFooter, CLink } from '@coreui/react'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Footer = () => {
    return (

        <CFooter style={{
            position: 'absolute',
            bottom: "0",
            width: '100vw',
            paddingLeft: '150px',
            paddingRight: '150px',
        }}>
            <div>
                <CLink href="https://coreui.io">CoreUI</CLink>
                <span>&copy; 2023 creativeLabs.</span>
            </div>
            <div>
                <span>Powered by</span>
                <CLink href="https://coreui.io">CoreUI</CLink>
            </div>
        </CFooter>

    )
}

export default Footer