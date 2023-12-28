import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useCart } from "react-use-cart";

function Book(){
    const {
        isEmpty,cartTotal,items,updateItemQuantity, removeItem,
    } = useCart();
    if(isEmpty) return <p>Your Cart is empty</p>;

    return (
        <>
         <Header />
         <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="/"><i className="fa fa-home"></i> Home</a>
                                <span> Test Booking</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/* Shop Cart Section Begin */}
             <section className="shop-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shop__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Test</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {items.map((item) => (
                                        <tr>
                                            <td className="cart__product__item">
                                                <img src={item.image} width="100px" alt="" />
                                                <div className="cart__product__item__title">
                                                    <h6>{item.name}</h6>
                                                </div>
                                            </td>
                                            <td className="cart__price">BDT {item.price}</td>
                                            <td className="cart__quantity">
                                                <div className="pro-qty">
                                                    <button className="btn btn-link" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                                        {item.quantity}
                                                    <button className="btn btn-link" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} > + </button>
                                                </div>
                                            </td>
                                            <td className="cart__total">BDT {item.itemTotal}</td>
                                            <td className="cart__close"><span className="icon_close" onClick={() => removeItem(item.id)}></span></td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="cart__btn">
                                <a href="./shop">Continue Booking</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="discount__content">
                                <h6>Discount codes</h6>
                                <form action="#">
                                    <input type="text" placeholder="Enter your coupon code" />
                                    <button type="submit" className="site-btn">Apply</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <div className="cart__total__procced">
                                <h6>Total Test</h6>
                                <ul>
                                    {/*<li>Subtotal <span>BDT {cartTotal }</span></li>*/}
                                    <li>Total <span>BDT {cartTotal }</span></li>
                                </ul>
                                <a href="#" className="primary-btn">Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Cart Section End */}
         <Footer />       
        </>
    )
}
export default Book;