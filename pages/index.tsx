import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Categories from '../components/CategoriesSection';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <Banner h2={`50%`} p={`discount`}/>
      <Categories/>
      <Banner h2={`Get 2
       and 1`} p={`free`}/>
    </Layout>
  )
}
