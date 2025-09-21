import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../../redux/cartSlice";
import "./CartDrawer.css";
import { useEffect } from "react";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cart.isOpen);
  const cartItems = useSelector((state) => state.addToCart.cartArr);

  useEffect(() => {
    console.log(cartItems);
  }, [isOpen, cartItems]);

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-drawer-header">
        <h2>Cart</h2>
        <button onClick={() => dispatch(closeCart())}>✕</button>
      </div>

      <div className="cart-drawer-content">
        <p>Cart drawer opened!</p>
        <div>
          {cartItems.map((item, index) => (
            <div className="cartProduct">
              <img src={item.image} alt={item.title} />
              <h5>{item.title}</h5>
              <h5>{item.count}</h5>
            </div>
          ))}
          {/* <div className="cartProduct">
            <img
              src="https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/27012023/img-7082-copy_1673241382-647061030146.jpg"
              alt="{item.title}"
            />
            <h5>"kajdfklj"</h5>
          </div> */}
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
}
