import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { FaShoppingCart } from "react-icons/fa";


export default function Cart() {
  return (
    <Layout>
      <header className="category">
        <Banner h2="PRODUCTS" p=""/>
      </header>
      <main className="cart__view container">
        <section className="view__empty__cart">
          <h2>THE CART IS EMPTY</h2>
          <div className="view__empty__cart--text">
            <p>You have no items in your cart</p>
            <i><FaShoppingCart/></i>
          </div>
          <div className="view__empty__cart--button">
            <button className="btn">Continue Shopping</button>
            <button className="btn">Sing in to see my cart</button>
          </div>
        </section>
      </main>

    </Layout>
  )
}