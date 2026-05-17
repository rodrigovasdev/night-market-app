import React, { useState } from 'react'
import Button from "@/app/components/ui/Button"
import { createUser } from '@/services/user.service'

interface propStep{
    setStep: (step:number) => void
    setEmail: (isFill:string) => void
}


function FirstStep(props:propStep) {
    const setStep = props.setStep
    const setEmail = props.setEmail
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        await createUser({ name, mail: mail || undefined });
        setEmail(mail);
        setStep(3)
    }

  return (
    <>
        <form onSubmit={handleSubmit} className="flex flex-col h-full max-h-xl mx-auto text-center md:px-20">
            <div className="relative mb-4 flex flex-col gap-3">
                <div className='flex flex-col gap-1'>
                    <label className='text-left text-sm' htmlFor="">Nombre</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Max Gonzalez" required></input>
                </div>
            {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>
            </div> */}
                <div className='flex flex-col gap-1'> 
                    <label className='text-left text-sm' htmlFor="">Correo (opcional)</label>
                    <input type="text" name="email" value={mail} onChange={(e) => setMail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre@correo.cl" ></input>
                </div>

            </div>
            <Button content="Únete" width="w-full" paddingY="py-3" heigth="h-full" variant="primary"/>
        </form>
    </>
  )
}

export default FirstStep