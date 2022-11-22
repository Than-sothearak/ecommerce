import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner,  } from '../components';
const Home = ({products, bannerData}) => (

    <div>
      <HeroBanner heroBanner = {bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
        <h2>Tagline describing your e-shop</h2>
        <p>Speaker of many variations</p>
      </div>
      <p>laptop</p>
      <div className='products-container'>
        
       {products?.map((product) => 
        <Product 
        key = {product._id} 
        product = {product}
        />
        )}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </div>
  
)
export async function getServerSideProps() {

  const query = '*[_type == "laptop"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: {products, bannerData}
  }
}


export default Home;