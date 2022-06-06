import React from 'react'
import AboutPage from '../pages/AboutPage'
import ErrorPage from '../pages/ErrorPage'
import MainPage from '../pages/MainPage'
import UserDetailPage from '../users/userDetail/UserDetailPage'
import Users from '../users/Users'
import { Route, Routes } from 'react-router-dom'
import HelloWorld from '../pages/HelloWorld'
import UsersForTest from '../usersForTest/usersForTest'


export default function AppRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/hello' element={<HelloWorld/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/*' element={<ErrorPage/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/users-test' element={<UsersForTest/>} />
            <Route path='/users/:id' element={<UserDetailPage/>} />
      </Routes>
    </div>
  )
}
