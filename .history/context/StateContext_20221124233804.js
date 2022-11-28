import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;
    
    const onAdd = (product, quantity) => {
      const checkProductInCart = cartItems.find((item) => item._id === product._id)
         setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
         setTotalQty((prevTotalQty) => prevTotalQty + quantity);
      
         if(checkProductInCart) {
        const updateCartItems = cartItems.map((cartProduct) => {
          if (cartProduct._id === product._id) return {
            ...cartProduct,
          quantity: cartProduct.quantity + quantity
          }
          
        })
        setCartItems(updateCartItems);
        
      } else {
        product.quantity = quantity;
        setCartItems([...cartItems, {...product}]);
      }
      toast.success(`${qty} ${product.name} added to the cart.`);
    
    }
    
    const onRemove = (product) => {
      foundProduct = cartItems.find((item) => item._id === product._id);
      const newCartItems = cartItems.filter((item) => item._id !== product._id);

      setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
      setTotalQty((prevTotalQty) => prevTotalQty - foundProduct.quantity);
      setCartItems(newCartItems);
    }
    
    const toggleCartItemQuanitity = (id, value) => {
      foundProduct = cartItems.find((item) => item._id === id)
      index = cartItems.findIndex((product) => product._id === id);
      const newCartItems = cartItems.filter((item) => item._id !== id)
  
      if(value === 'inc') {
        newCartItems.splice(index, 0, {...foundProduct, quantity: foundProduct.quantity + 1});
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
        setTotalQty(prevTotalQuantities => prevTotalQuantities + 1)
      } else if(value === 'dec') {
        if (foundProduct.quantity > 0) {
          newCartItems.splice(index, 0, {...foundProduct, quantity: foundProduct.quantity - 1});
          setCartItems(newCartItems);
          setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
          setTotalQty(prevTotalQuantities => prevTotalQuantities - 1)
        } 
      }
      
    }

    const incQty = () => {
        setQty((num => num + 1));
    }

    const decQty = () => {
        setQty((num) => {
            if (num > 1 ) return  num - 1;
            return num = 1;
        });
    }
     
        return (
            <Context.Provider
              value={{
                showCart,
                setShowCart,
                setTotalQty,
                cartItems,
                totalPrice,
                totalQty,
                qty,
                incQty,
                decQty,
                onAdd,
                toggleCartItemQuanitity,
                onRemove
              
              }}
            >
              {children}
            </Context.Provider>
          )
}

export const useStateContext = () => useContext(Context);