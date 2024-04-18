import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartProduct')) || [];
    setCartItems(savedCart.map(item => ({ ...item, quantity: 1 })));
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cartProduct', JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cartProduct', JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem('cartProduct', JSON.stringify(updatedCart));
  };

  const calculateItemPrice = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotalPrice = () => {
    let totalPrice = cartItems.reduce((total, item) => total + calculateItemPrice(item), 0);
    return totalPrice.toFixed(2);
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-3xl font-bold mb-8'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className='text-lg text-gray-600 text-center'>Your cart is empty.</p>
      ) : (
        <div className='grid gap-6'>
          {cartItems.map(item => (
            <div key={item.id} className='bg-white rounded-lg shadow-md overflow-hidden'>
              <div className='p-6 flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                  <img src={item.image} alt={item.title} className='h-24 w-24 object-contain rounded-md' />
                  <div>
                    <h3 className='text-lg font-semibold'>{item.title}</h3>
                    <div className='flex items-center'>
                      <p className='text-sm'>Item Price: ₹{item.price}</p>
                      <p className='border border-gray-300 rounded-md p-1 ml-4'>Total Price: ₹{calculateItemPrice(item).toFixed(2)}</p> 
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <div className="btn-group" role="group" aria-label="Quantity">
                    <button type="button" className="bg-gray-200 text-gray-600 px-3 py-1 rounded-l" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <button type="button" className="bg-gray-200 text-gray-600 px-3 py-1">{item.quantity}</button>
                    <button type="button" className="bg-gray-200 text-gray-600 px-3 py-1 rounded-r" onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <button className='bg-red-500 text-white px-3 py-1 rounded' onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className='text-right mt-8'>
          <p className='text-2xl font-semibold'>Total Price: ₹{calculateTotalPrice()}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
