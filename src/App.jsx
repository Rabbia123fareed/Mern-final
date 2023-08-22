// import React, {useContext, useState} from 'react'
// import Admin from './Admin'
// import Guest from './Guest'
// import User from './User'
// import {GlobalContext} from './Context/context.jsx';
// const ComponentByRoles = {
//   'admin': Admin,
//   'user': User,
//   'guest': Guest
// }
// const getUserRole = (params) => ComponentByRoles[params]  || ComponentByRoles['guest']
// export default function App() {
//   const { state ,dispatch} = useContext(GlobalContext)
//    console.log (state)
//   const [role, setRole] = useState('')
//   const CurrentUser = getUserRole(state.role)
//   // const CurrentUser = getUserRole(role)
//   // const decodeUser = (token) => {
//   //   if (!token) {
//   //     return undefined
//   //   }
//   //   else {
//   //     const res = decodeToken(token)
//   //     return res?.role
//   //   }
//   // }

//   // const currentToken = decodeUser(state.token)
//   // const CurrentUser = getUserRole(currentToken)
//   return <CurrentUser/>
// }
import React, { useContext, useState } from 'react'
import Admin from './Admin'
import User from './User'
import Guest from './Guest'
import { GlobalContext } from './Context/context'
import { decodeToken } from 'react-jwt'

const ComponentByRoles = {
  'admin': Admin,
  'user': User,
  'guest': Guest
}

const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest']

export default function App() {
  const { state, dispatch } = useContext(GlobalContext)

  const decodeUser = (token) => {
    if (!token) {
      return undefined
    }
    else {
      const res = decodeToken(token)
      return res?.role
    }
  }

  const currentToken = decodeUser(state.token)
  const CurrentUser = getUserRole(currentToken)
  return <CurrentUser />
}