'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { TbCoinRupee } from "react-icons/tb";
import img1 from './assets/buy.png'
import img2 from './assets/l1.png'
const Enroll = () => {
    const [loading, setLoading] = useState(false)
    const initializeRazorpay = () => {
        return new Promise(resolve => {
            const script = document.createElement('script')
            script.src = 'https://checkout.razorpay.com/v1/checkout.js'

            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }

            document.body.appendChild(script)
        })
    }

    const makePayment = async () => {
        setLoading(true)
        const res = await initializeRazorpay()

        if (!res) {
            alert('Razorpay SDK Failed to load')
            setLoading(false)
            return
        }

        // Make API call to the serverless API
        const data = await fetch('/api/razorpay', { method: 'POST' }).then(t =>
            t.json()
        )

        // const data = await axios.post("/api/contact").then((t) => {
        //   console.log(t);
        // });
        console.log(data)
        var options = {
            key: 'rzp_test_WjOtHCtWT76ZeX', // Enter the Key ID generated from the Dashboard
            name: 'Name',
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: 'Thankyou for your test donation',
            image: 'https://manuarora.in/logo.png',
            handler: function (response) {
                // Validate payment at server - using webhooks is a better idea.
                alert(response.razorpay_payment_id)
                alert(response.razorpay_order_id)
                alert(response.razorpay_signature)
                setLoading(false)
            },
            prefill: {
                name: 'Faizan Hussain',
                email: 'Faizan@hiringtech.in',
                contact: '7999788416'
            }
        }

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }
    return (
        <>
            <div className='w-full flex justify-center font-serif py-20 bg-[#fff]'>
                <div className='w-[80%] max-xl:w-[90%]'>
                    <div className='flex max-sm:flex-col-reverse max-sm:items-center max-sm:gap-10 justify-between items-center'>
                        <div className='flex flex-col gap-3 max-lg:gap-1'>
                            <h5 className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] text-[#175574] font-medium'>Learn smarter . not harder</h5>
                            <h2 className='text-[#062B43] text-[41px] max-xl:text-[35px] max-lg:text-[30px] max-md:text-[24px] font-bold leading-10'>Enjoyable learning<br />experiences await you</h2>
                            <p className='text-[#175574] text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-md:text-[18px] font-bold'>Click here to enroll for the course</p>
                            <div className='flex items-center gap-5'>
                                <Image src={img2} alt='logo' />
                                <p className='text-[#175574] text-[20px] max-lg:text-[16px] max-xl:text-[18px] max-md:text-[14px] font-medium'>Instructor:  Hiring tech staff</p>
                            </div>
                            <h3 className='text-[#175574] text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] font-medium flex items-center gap-3'><span><TbCoinRupee className='text-[30px]' /></span><span className='font-bold'>30,000</span> / 3 months</h3>
                            <button onClick={makePayment} disabled={loading} className='text-[#fff] cursor-pointer bg-[#D79442] text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] py-[10px] rounded-[50px]'>{loading ? (
                                'Loading...'
                            ) : (
                                <>Enroll Now</>
                            )}</button>
                        </div>
                        <Image src={img1} alt='img' className='my-auto max-xl:w-[450px]  max-lg:w-[350px] max-md:w-[250px]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Enroll