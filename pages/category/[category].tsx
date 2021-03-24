import { GetStaticProps, GetStaticPaths } from 'next';
/////////////////////////////////////////////////////////
import Axios from '../../config/Axios';
import { Product, ProductParam } from '../../interfaces'
///////////////////////////////////////////////////////
import Layout from '../../components/Layout';
///////////////////////////////////////////////////////

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

  return (
    <Layout>
      <h1 className="prueba">Category</h1>
    </Layout>
  )
}