import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

const Nav = ({search, setSearch}) => {
  const isHome= window.location.pathname === '/' || ''  ? true : false;
  return (
    <nav className='Nav'>
      { isHome && (
      <SearchForm
        search={search}
        setSearch={setSearch}
      />)}
      
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li>   <Link to="/post">Post</Link></li>
        <li>  <Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav