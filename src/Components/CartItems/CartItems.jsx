import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/Frontend_Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>Rs.{e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>Rs.{e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>Rs.{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

// import React, { useContext } from "react";
// import "./CartItems.css";
// import { ShopContext } from "../../Context/ShopContext";
// import remove_icon from "../Assets/Frontend_Assets/cart_cross_icon.png";

// const CartItems = () => {
//   const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
//     useContext(ShopContext);

//   // Function to calculate the total amount for a product, including customization if applicable
//   const calculateProductTotal = (e) => {
//     const baseTotal = e.new_price * cartItems[e.id].quantity;
//     const customizationCharge = cartItems[e.id].customization ? 300 : 0;
//     return baseTotal + customizationCharge;
//   };

//   // Function to calculate the overall total cart amount, including customization charges
//   const getTotalCartWithCustomization = () => {
//     return all_product.reduce((total, e) => {
//       if (cartItems[e.id] && cartItems[e.id].quantity > 0) {
//         const productTotal = calculateProductTotal(e);
//         total += productTotal;
//       }
//       return total;
//     }, 0);
//   };

//   return (
//     <div className="cartitems">
//       <div className="cartitems-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Customization</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {all_product.map((e) => {
//         if (cartItems[e.id] && cartItems[e.id].quantity > 0) {
//           return (
//             <div key={e.id}>
//               <div className="cartitems-format cartitems-format-main">
//                 <img src={e.image} alt="" className="carticon-product-icon" />
//                 <p>{e.name}</p>

//                 {/* Customization Display */}
//                 <p>
//                   {cartItems[e.id].customization
//                     ? cartItems[e.id].customization
//                     : "-"}
//                 </p>

//                 <p>Rs.{e.new_price}</p>

//                 <button className="cartitems-quantity">
//                   {cartItems[e.id].quantity}
//                 </button>

//                 {/* Calculate Total with Customization */}
//                 <p>Rs.{calculateProductTotal(e)}</p>

//                 <img
//                   className="cartitems-remove-icon"
//                   src={remove_icon}
//                   alt="remove"
//                   onClick={() => removeFromCart(e.id)}
//                 />
//               </div>
//               <hr />
//             </div>
//           );
//         }
//         return null;
//       })}
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//           <h1>Cart Totals</h1>
//           <div>
//             <div className="cartitems-total-item">
//               <p>Subtotal</p>
//               <p>Rs.{getTotalCartWithCustomization()}</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>Shipping Fee</p>
//               <p>Free</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <h3>Total</h3>
//               <h3>Rs.{getTotalCartWithCustomization()}</h3>
//             </div>
//           </div>
//           <button>PROCEED TO CHECKOUT</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;
