import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'

const index = () => {

    const dataDummy = [
        {
            name: 'Denis1',
            address: 'Jalan Mangga',
            gender: 'Male'
        },
        {
            name: 'Denis2',
            address: 'Jalan Mangga',
            gender: 'Male'
        },
        {
            name: 'Denis3',
            address: 'Jalan Mangga',
            gender: 'Male'
        },
        {
            name: 'Denis4',
            address: 'Jalan Mangga',
            gender: 'Male'
        },
        {
            name: 'Denis5',
            address: 'Jalan Mangga',
            gender: 'Male'
        },
        {
            name: 'Denis6',
            address: 'Jalan Mangga',
            gender: 'Male'
        },
        {
            name: 'Denis6',
            address: 'Jalan Mangga',
            gender: 'Male'
        },
        {
            name: 'Denis6',
            address: 'Jalan Mangga',
            gender: 'Male'
        },
        {
            name: 'Denis6',
            address: 'Jalan Mangga',
            gender: 'Male'
        },
        {
            name: 'Denis6',
            address: 'Jalan Mangga',
            gender: 'Male'
        },
        {
            name: 'Denis6',
            address: 'Jalan Mangga',
            gender: 'Male'
        },
        {
            name: 'Denis6',
            address: 'Jalan Mangga',
            gender: 'Male'
        },
    ]
    return (
        <div className='d-flex justify-content-center align-items-center w-100'>
            <CTable style={{ maxWidth: '1440px' }}>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Gender</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {
                        dataDummy.map((item, index) => (
                            <>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                                    <CTableDataCell> {item.name} </CTableDataCell>
                                    <CTableDataCell> {item.address} </CTableDataCell>
                                    <CTableDataCell> {item.gender} </CTableDataCell>
                                </CTableRow>
                            </>
                        ))
                    }

                </CTableBody>
            </CTable>
        </div>
    )
}

export default index