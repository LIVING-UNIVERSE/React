import React from 'react'
import {Logo, LogoutBtn, Container} from '../index'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state)=>state.auth.status)
  const navItems = [
    {
      name : "Home" ,
      slug : '/',
      active : true,
    },
    {
      name : "Login",
      slug :"/Login",
      active :!authStatus,
    },
    {
      name :"Signup",
      slug : "/Signup",
      active : !authStatus,
    },
    {
      name :"All Posts",
      slug :"/all-posts",
      active : authStatus,
    },
    {
      name : "Add Post",
      slug :"/add-post",
      active: authStatus,
    }
  ]
  
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>(
              item.active? (
                <li key={Date.now()}>
                    <div>
                      <button
                      onClick={()=>navigate(item.slug)}
                      className='inline-block px-6 py-2 duration-200 
                      hover:bg-blue-200 rounded-full'
                      >{item.name}</button>
                    </div>
                </li>
              ) : null
            ))}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header