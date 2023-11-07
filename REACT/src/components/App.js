import React, { useState, createContext } from "react"

// Components

import Post from './Post';
import Header from './Header';

export const ThemeContext = createContext('dark')

function App () {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title01',
      subtitle: 'SubTitle01',
      likes: 20,
      read: false
    },
    {
      title: 'Title02',
      subtitle: 'SubTitle02',
      likes: 10,
      read: true
    },
    {
      title: 'Title03',
      subtitle: 'SubTitle03',
      likes: 40,
      read: false
    }
  ]);


  function handleRefresh() {
    setPosts((prevState) => [...prevState, {
      id: Math.random(),
      title: `Title0${prevState.length + 1}`,
      subtitle: `SubTitle0${prevState.length + 1}`,
      likes: 60
    }])
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
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
        <h2>Posts da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      {posts.map((post) => (
        <Post
          key={post.title}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}

    </ThemeContext.Provider>
  )
}

export default App
