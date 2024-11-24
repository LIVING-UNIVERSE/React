import React from 'react'
import Container from '../components/container'
import PostForm from '../components/PostForm/PostForm'

function AddPost() {
  return (
    <Container className='py-8'>
        <PostForm/>
    </Container>
  )
}

export default AddPost