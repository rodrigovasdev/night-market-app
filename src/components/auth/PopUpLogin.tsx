import React from 'react'
import LoginForm from '@/components/auth/LoginForm'
import UserPanel from '@/components/auth/UserPanel'
import { useUserStore } from '@/store/user.store'
import PopUpContainer from '@/components/ui/PopUpContainer'

interface propsPop{
  onClick: () => void
}

function PopUpLogin(props:propsPop) {
  const { onClick } = props
  const isLoggedIn = useUserStore((state) => state.name) !== null;

  return (
    <PopUpContainer onClose={onClick}>
      {isLoggedIn ? <UserPanel onSuccess={onClick} /> : <LoginForm onSuccess={onClick} />}
    </PopUpContainer>
  )
}

export default PopUpLogin