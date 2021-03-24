import { GetStaticProps, GetStaticPaths } from 'next';
/////////////////////////////////////////////////////////
import Axios from '../../config/Axios';
import { Product, ProductParam } from '../../interfaces'
///////////////////////////////////////////////////////
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import { useEffect } from 'react';
///////////////////////////////////////////////////////
import { AiFillCaretUp, AiOutlineHeart } from "react-icons/ai";



export const getStaticProps: GetStaticProps = async ({params}) => {
  const category = params?.category;
  const result = await Axios.get(`/api/products/category/${category}`);
  
  return {
    props: {
      products: result.data
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await Axios.get('/api/products');

  return {
    paths: products.data.products.map((product: Product) => ({
      params: { category: product.category }
    })),
    fallback: false
  }
}

export default function Category({products}: ProductParam) {
  const allProds = products.products;

  console.log(allProds)

  useEffect(()=> {
    console.log('test')
  },[products, allProds])

  console.log('/public/card-2.png')
  return (
    <Layout>
      <header className="category">
        <Banner h2="PRODUCTS" p=""/>
      </header>
      <main className="products">
        <section className="products--grilla-product">
          {allProds.map((prod) => (
            <div className="card-product">
              <div className="card-product__img">
                <img src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/02/25/15826448279676.jpg" alt="Imagen producto" />
              </div>
              <div className="card-product__text">
                <a href="" className="heart"><AiOutlineHeart /></a>
                <h3>{prod.name}</h3>
                <p>${prod.price}</p>
              </div>
            </div>
          ))}

        </section>

        <aside className="products--categories">
            <div className="select">
              <div className="select--text">
                <h3>Categories</h3>
              </div>
              <ul>
                <li><a href="">top</a></li>
                <li><a href="">bottom</a></li>
                <li><a href="">shoes</a></li>
                <li><a href="">accesories</a></li>
              </ul>
            </div>
            <div className="select">
              <div className="select--text">
                <a href="" className="arrow"><AiFillCaretUp /></a>
                <h3>shop by color</h3>
              </div>
              <ul className="colors">
                <li><a href="" className="select--color color--select__red"></a></li>
                <li><a href="" className="select--color color--select__green"></a></li>
                <li><a href="" className="select--color color--select__blue"></a></li>
                <li><a href="" className="select--color color--select__brown"></a></li>
                <li><a href="" className="select--color color--select__pink"></a></li>
              </ul>
            </div>
            <div className="select">
              <div className="select--text">
                <a href="" className="arrow"><AiFillCaretUp /></a>
                <h3>shop by size</h3>
              </div>
              <ul>
                <li><a href="">top</a></li>
                <li><a href="">bottom</a></li>
                <li><a href="">shoes</a></li>
                <li><a href="">accesories</a></li>
              </ul>
            </div>
            <div className="select">
              <div className="select--text">
                <h3>by price</h3>
              </div>
              <ul className="select--price">
                <li><input type="number"/></li>
                <li>-</li>
                <li><input type="number"/></li>
              </ul>
              <input type="submit" className="btn btn__filter" value="filter"/>
            </div>
        </aside>
      </main>

    </Layout>
  )
}