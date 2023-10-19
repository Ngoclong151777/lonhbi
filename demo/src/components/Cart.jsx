import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../features/cartSlice";
import { useEffect } from "react";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTotals());
    },[cart,dispatch]);

    const handleRemoveFromCart = (cartItem) =>{
        dispatch(removeFromCart(cartItem));
    };

    const handleDecreaseCart = (cartItem) =>{
        dispatch(decreaseCart(cartItem));
    };

    const handleIncreasCart = (cartItem) =>{
        dispatch(addToCart(cartItem));
    };
    const handleClearCart = (cartItem) =>{
        dispatch(clearCart(cartItem));
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your cart is currently empty</p>
                    <div className="start-shoping">
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                                <path fillrule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                                <path fillrule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                            </svg>
                            <span>Start-shopping</span>
                        </Link>
                    </div>
                </div>
            ) : (<div>
                <div className="titles">
                    <h3 className="product-title">Product</h3>
                    <h3 className="price">Price</h3>
                    <h3 className="Quantity">Quantity</h3>
                    <h3 className="total">Total</h3>
                </div>
                <div className="cart-items">
                    {cart.cartItems?.map(cartItem => (
                        <div className="cart-item" key={cartItem.id}>
                            <div className="cart-product">
                                <img src={cartItem.img} alt={cartItem.name} />
                                <div>
                                    <h3>{cartItem.name}</h3>
                                    <p>{cartItem.desc}</p>
                                    <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                                </div>
                            </div>
                            <div className="cart-product-price">${cartItem.price}</div>
                            <div className="cart-product-quantity">
                                <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                                <div className="count">{cartItem.cartQuantity}</div>
                                <button onClick={() => handleIncreasCart(cartItem)}>+</button>
                            </div>
                            <div className="cart-product-total-price">
                                ${cartItem.cartQuantity * cartItem.price}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <button className="clear-cart" onClick={()=> handleClearCart()}>Clear Cart</button>
                    <div className="cart-checkout">
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span className="amount">
                                ${cart.cartTotalAmount}</span>
                        </div>
                        <p>Taxes anh shipping calculated at check out</p>
                        <button>Check out</button>
                        <div className="continute-shoping">
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                                    <path fillrule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                                    <path fillrule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                </svg>
                                <span>Start-shopping</span>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
        )}
            </div>
            );
};

 export default Cart;