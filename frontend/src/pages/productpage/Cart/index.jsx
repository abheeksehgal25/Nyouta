import React from 'react'
import { useSelector } from 'react-redux'
import RenderCartProducts from './RenderCartProducts';
import RenderTotalAmount from './RenderTotalAmount';

function Cart() {

    const { total, totalItems } = useSelector((state) => state.cart);

    return (
        <>
            <h1 className="mb-14 text-3xl font-medium text-richblack-5">Your Cart</h1>
            <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400">{totalItems} Products in Cart</p>
            {
                total > 0 ?
                    (<div className="mt-8 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
                        <RenderCartProducts></RenderCartProducts>
                        <RenderTotalAmount></RenderTotalAmount>
                    </div>) :
                    (<p className="mt-14 text-center text-3xl text-richblack-100">
                        Your Cart is Empty
                    </p>)
            }
        </>
    )
}

export default Cart
