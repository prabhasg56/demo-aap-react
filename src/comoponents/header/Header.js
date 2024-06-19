import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">CHIRAG KANSAL</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/success-stories">Success Stories</a>
        <a href="/programs">Programs</a>
        <a href="/free-resources">Free Resources</a>
        <a href="/member-login">Member Login</a>
      </nav>
    </header>
  );
}

export default Header;
