import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Routes from '../../Routes'

import Navigation from './styles'

export default function Layout({ onToggleTheme, selectedTheme }) {
  return (
    <BrowserRouter>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      <Navigation>
        <Link to='/posts'>Posts</Link>
        <Link to='/'>Home</Link>
      </Navigation>
      <Routes/>
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
    </BrowserRouter>
  );
}
