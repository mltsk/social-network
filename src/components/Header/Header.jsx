import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return <header className={classes.header}>
    <img alt="logo" width='90' height='50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xE8fEA6b9OuImCsqbVXW-YcwBKPAnZ7Epw&usqp=CAU" />
  </header>
}

export default Header;