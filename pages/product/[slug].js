import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client';
import { AiOutlineMinus, AiFillStar, AiOutlineStar, AiOutlinePlus } from 'react-icons/Ai'
import { FooterBanner, Product } from '../../components';

const ProductDetails = ({ products: { image, brand, details, price }, product, bannerData}) => {
  const [index, setIndex] = useState(0);
  return (
    <div>
        <div className='product-detail-container'>
            
              <div className='image-container'>
                  <img src={urlFor(image && image[index])
                   } className='product-detail-image' />
               <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
              </div>
                     
                     <div className='product-detail-desc'>
                      <h4>{brand}</h4>
                      <div className='reviews'>
                        <div>
                          Reviews:
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiOutlineStar />
                        </div>
                        </div>
                        <p>
                          (20)
                        </p>
                        <h3>Details:</h3>
                        <p>{details}</p>
                        <p className='price'>${price}</p>
                        <div className='quantity'>
                          <h3>Quantity:</h3>
                          <p className='quantity-desc'>
                            <span className='minus' onClick=''><AiOutlineMinus /></span>
                            <span className='num'>0</span>
                            <span className='plus' onClick=''><AiOutlinePlus /></span>
                          </p>
                        </div>
                        <div className='buttons'>
                          <button type='button' className='add-to-cart' onClick=''>Add to Cart</button>
                          <button type='button' className='buy-now' onClick=''>Buy Now</button>
                        </div>
                      </div>
        </div>
        <div className='maylike-product-wrapper'>
          <h2>You may also like</h2>
          <div className='marquee'>
            <div className='maylike-products-container track'>
              {product.map((item) => (
                <Product key={item._id}
                         product={item}/>
              ))}
            </div>
          </div>
        </div>
        <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "laptop"] {
      slug {
        current
      }
    }`;
  
    const products = await client.fetch(query);
    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }
   

export async function getStaticProps({ params: { slug }}) {

    const query = `*[_type == "laptop" && slug.current == '${slug}'][0]`;
    const productQuery = '*[_type == "laptop"]';
    
    const products = await client.fetch(query);
    const product = await client.fetch(productQuery);
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
      props: {products, product, bannerData}
    }
  }

export default ProductDetails