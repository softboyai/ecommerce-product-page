import React from "react";
interface CartProps {
  cartItems: { id: string; image: string; name: string; price: number }[];
  removeFromCart: (id: string) => void;
}

const Cart = ({ cartItems, removeFromCart }: CartProps) => {
  return (
    <div className="container mx-auto px-6 py-16 mt-12">
      <h2 className="text-3xl font-extrabold text-center text-gray-900">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {cartItems.map((item: any) => (
            <div key={item.id} className="bg-white shadow-lg rounded-xl p-5 text-center">
              <img src={item.image} alt={item.name} className="w-full h-52 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-3">{item.name}</h3>
              <p className="text-gray-700 font-bold text-lg">{item.price} RWF</p>
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="mt-3 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
