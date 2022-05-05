import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';
import { getFoodByIngredientList, getDrinks,
  getFoods, getDrinkByIngredientList } from '../services/index';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [optionRadio, setOptionRadio] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [recipesReturn, setRecipesReturn] = useState([]);
  const [cocktailsReturn, setCocktailsReturn] = useState([]);
  const [randomID, setRandomID] = useState([]);
  const [foodIngredientList, setFoodIngredientList] = useState();
  const [drinkIngredientList, setDrinkIngredientList] = useState([]);

  useEffect(() => {
    const firstRender = async () => {
      const response = await getFoods();
      setRecipesReturn(response);
    };
    firstRender();
  }, []);

  useEffect(() => {
    const firstRender = async () => {
      const response = await getDrinks();
      setCocktailsReturn(response);
    };
    firstRender();
  }, []);

  useEffect(() => {
    const getList = async () => {
      const response = await getFoodByIngredientList();
      setFoodIngredientList(response.meals);
    };
    getList();
  }, []);

  useEffect(() => {
    const getList = async () => {
      const response = await getDrinkByIngredientList();
      setDrinkIngredientList(response.drinks);
    };
    getList();
  }, []);

  const data = {
    email,
    setEmail,
    password,
    setPassword,
    optionRadio,
    setOptionRadio,
    inputSearch,
    setInputSearch,
    recipesReturn,
    setRecipesReturn,
    cocktailsReturn,
    setCocktailsReturn,
    randomID,
    setRandomID,
    foodIngredientList,
    setFoodIngredientList,
    drinkIngredientList,
    setDrinkIngredientList,
  };

  return (
    <AppContext.Provider value={ data }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: propTypes.props,
}.isRequired;

export default AppProvider;
