"use client"
import React, { useState, useEffect } from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";

import axios from 'axios'
import Link from 'next/link';

const Card = () => {
    const [qna, setQna] = useState([])
    useEffect(() => {
        fetchdata()
    }, [])
    async function fetchdata() {
        try {
            let res = await axios.get(`https://the-trivia-api.com/api/questions?limit=1`)
            setQna(res.data[0])

        } catch (error) {
            console.log(error)
        }
        

    }
    return (
        <>
            <div className='bg-slate-200 drop-shadow-2xl w-auto sm:w-[700px] mx-auto  my-10 rounded-lg p-10'>

                <div>
                    <p className='text-center text-xl bg-slate-300 p-3 rounded-lg shadow-lg'><span className='font-bold'>category : </span>{qna.category}</p>
                    <p className=' text-xl bg-slate-300 p-3 rounded-lg shadow-lg my-5'><span className='font-bold'>Question : </span>{qna.question}</p>

                    <p className=' text-xl bg-slate-300 p-3 rounded-lg shadow-lg my-5'><span className='font-bold'>Answer : </span>{qna.correctAnswer}</p>


                    

                </div>
                <div className='flex justify-center items-center '>
                <button onClick={fetchdata} className='p-3 text-white rounded-lg  bg-teal-600 '>
                    <FaRegQuestionCircle size={30} />
                </button>
                </div>
                
            </div>
            <div className=' p-5 bg-slate-200 text-center fixed bottom-0 w-full' >
                <Link href="https://github.com/neerajpanchal004" >Made with❤️ by <span className='underline text-blue-600'>Neeraj panchal</span></Link>
            </div>
        </>
    )
}

export default Card