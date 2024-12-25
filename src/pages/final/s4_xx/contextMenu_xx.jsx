/*import { useState, useEffect, createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import menu_data from './menu_data';

const MenuContext_xx = createContext();

const MenuContextProvider_xx = ({ children }) => {
  return (
    <MenuContext_xx.Provider value={{}}>{children}</MenuContext_xx.Provider>
  );
};

const useMenuContext_xx = () => {
  return useContext(MenuContext_xx);
};

export { MenuContextProvider_xx, useMenuContext_xx };
*/
import { useContext, useState, createContext, useEffect } from 'react'

import menu_data from './menu_data'

const MyAppContext = createContext()

export const MenuContextProvider_xx = ({ children }) => {
  const [menu, setMenu] = useState([])
  const [category, setCategory] = useState('')
  const fetchMenuByCategory = async () => {
    try {
      if (category === '') {
        setMenu(menu_data)
        setLocal(menu_data)
      } else {
        let f_menu_data = menu_data.filter((itm) => itm.category == category)
        console.log(f_menu_data)
        setMenu(f_menu_data)
        setLocal(f_menu_data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMenuByCategory()
  }, [category])
  const changeMenuFilter = (category) => {
    setCategory(category)
  }

  const setLocal = (lst) => {
    localStorage.setItem('23_itms', JSON.stringify(lst))
  }
  const getLocal = () => {
    if (localStorage.getItem('23_itms') === null) {
      localStorage.setItem('23_itms', JSON.stringify([]))
    } else {
      let local = JSON.parse(localStorage.getItem('23_itms'))
      setItms(local)
    }
  }

  return (
    <MyAppContext.Provider value={{ menu, changeMenuFilter }}>
      {children}
    </MyAppContext.Provider>
  )
}

export const useMenuContext_xx = () => {
  return useContext(MyAppContext)
}
