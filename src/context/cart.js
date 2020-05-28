import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useLocalStorage('rsCart', []);

  const findProductById = (id) =>
    cartProducts.findIndex((product) => id === product.id);

  const addToCart = (product) => {
    const productExists = findProductById(product.id);

    if (productExists < 0) {
      setCartProducts([
        ...cartProducts,
        {
          ...product,
          qty: 1,
        },
      ]);
    } else {
      const existingProduct = cartProducts[productExists];

      const updatedProduct = {
        ...existingProduct,
        qty: existingProduct.qty + 1,
      };
      cartProducts[productExists] = updatedProduct;
      setCartProducts([...cartProducts]);
    }
  };

  const increment = (id) => {
    const foundProduct = findProductById(id);

    if (foundProduct >= 0) {
      const updatedProduct = {
        ...cartProducts[foundProduct],
        qty: cartProducts[foundProduct].qty + 1,
      };

      cartProducts[foundProduct] = updatedProduct;
      setCartProducts([...cartProducts]);
    }
  };

  const decrement = (id) => {
    const foundProduct = findProductById(id);

    if (foundProduct >= 0) {
      const updatedProduct = {
        ...cartProducts[foundProduct],
        qty: cartProducts[foundProduct].qty - 1,
      };

      cartProducts[foundProduct] = updatedProduct;
      setCartProducts([...cartProducts]);
    }
  };

  const updateQty = (id, qty) => {
    const foundProduct = findProductById(id);

    if (qty <= 0) return false;

    if (foundProduct >= 0) {
      const updatedProduct = {
        ...cartProducts[foundProduct],
        qty,
      };

      cartProducts[foundProduct] = updatedProduct;
      setCartProducts([...cartProducts]);
    }
  };

  const removeProduct = (id) => {
    const products = cartProducts.filter((product) => product.id !== id);

    setCartProducts([...products]);
  };

  const total = cartProducts.reduce(
    (sum, product) => sum + product.price * product.qty,
    0
  );

  const qty = cartProducts.reduce((sum, product) => sum + product.qty, 0);

  const value = {
    cartProducts,
    addToCart,
    increment,
    decrement,
    updateQty,
    removeProduct,
    total,
    qty,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => React.useContext(CartContext);

export { CartProvider, useCart };
