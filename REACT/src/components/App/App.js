import React, { useState, createContext } from "react"

// Components

import Post from '../Post/Post.js';
import Header from '../Header/Header.js';
import {Title} from './styles'

export const ThemeContext = createContext('dark')

function App () {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title01',
      subtitle: 'SubTitle01',
      likes: 20,
      read: false,
      removed: false
    },

    {
      id: Math.random(),
      title: 'Title02',
      subtitle: 'SubTitle02',
      likes: 10,
      read: true,
      removed: false
    },
    {
      id: Math.random(),
      title: 'Title03',
      subtitle: 'SubTitle03',
      likes: 40,
      read: false,
      removed: false
    }
  ]);


  function handleRefresh() {
    setPosts((prevState) => [...prevState, {
      id: Math.random(),
      title: `Title0${prevState.length + 1}`,
      subtitle: `SubTitle0${prevState.length + 1}`,
      read: false,
      likes: 60,
      removed: false
    }])
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => (
      prevState.map(post => (
        post.id === postId
        ? {...post, removed: true}
        : post
      ))
    ))
  }

  function handleToggleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark')
  }

  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={theme}>
      <Header
        onToggleTheme={handleToggleTheme}
      >
        <Title as='h2'>Posts da semana</Title>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      {posts.map((post) => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}

    </ThemeContext.Provider>
  )
}

export default App
