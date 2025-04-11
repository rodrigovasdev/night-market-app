import React from 'react'
import FirstStep from './FirstStep'
import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import RegisterStep from './RegisterStep'
import LastLogin from './LastLogin'

interface propsPop{
  onClick: () => (void)
}

function PopUpLogin(props:propsPop) {

  const [stepOn, SetStepOn] = useState(1)
  const [isEmailFill, setIsEmailFill] = useState("")
  const onClick = props.onClick

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <div className="w-full px-4 flex justify-between items-center pb-3 gap-30 md:gap-60 ">
          <span className="text-2xl font-semibold whitespace-nowrap">N-Market</span>
          <XMarkIcon className="h-10 w-10 cursor-pointer" onClick={onClick} />
      </div>
        {stepOn === 1 && <FirstStep setStep = {SetStepOn} setEmail = {setIsEmailFill}></FirstStep>}
        {stepOn === 2 && <RegisterStep></RegisterStep>}
        {stepOn === 3 && <LastLogin email = {isEmailFill}></LastLogin>}
      </div>
    </div>
  )
}

export default PopUpLogin