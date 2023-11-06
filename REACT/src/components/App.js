import React from "react"

// Components

import Post from './Post';
import Header from './Header';


// mocks

const posts = [
  {
    title: 'Title01',
    subtitle: 'SubTitle01',
    likes: 20
  },
  {
    title: 'Title02',
    subtitle: 'SubTitle02',
    likes: 10
  },
  {
    title: 'Title03',
    subtitle: 'SubTitle03',
    likes: 40
  }
]

function App () {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>

      {posts.map((post) => (
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle
          }}
        />
      ))}
      
    </>
  )
}

export default App