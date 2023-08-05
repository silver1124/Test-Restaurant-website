import React from 'react';
import image from '../../Assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css'
import MealsSummary from '../Meals/MealsSummary';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Yash Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={image} alt='Delecious Food' />
      </div>
      <MealsSummary/>
    </React.Fragment>
  );
};

export default Header
