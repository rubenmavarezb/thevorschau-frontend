import { useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next';
/////////////////////////////////////////////////////////
import Axios from '../../config/Axios';
import { Product, ProductParam } from '../../interfaces'
///////////////////////////////////////////////////////
import Layout from '../../components/Layout';
///////////////////////////////////////////////////////

export const getStaticProps: GetStaticProps = async ({params}) => {
  const id = params?.id;
  const result = await Axios.get(`/api/products/product/${id}`);
  console.log(result)
  return {
    props: {
      product: result.data
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await Axios.get('/api/products');

  return {
    paths: products.data.products.map((product: Product) => ({
      params: { id: product._id }
    })),
    fallback: false
  }
}

export default function Detail({product}: ProductParam) {
  
  const prod = product.product;

  console.log(prod)

  useEffect(() => {
    console.log('test')
  }, [product])

  return (
    <Layout>
      <h1 className="prueba">{product.product.name}</h1>
    </Layout>
  )
}