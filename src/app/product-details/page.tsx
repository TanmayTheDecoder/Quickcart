import React from 'react'
import ProductDetails from '@/components/Product/ProductDetails'
import Navbar from '@/components/includes/Navbar'

const page = () => {
    return (
        <Navbar heading='Details'>
            <ProductDetails />
        </Navbar>
    )
}

export default page