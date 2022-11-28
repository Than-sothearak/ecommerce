import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client';
import { AiOutlineMinus, AiFillStar, AiOutlineStar, AiOutlinePlus } from 'react-icons/ai'
import { FooterBanner, Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ products, product, bannerData}) => {
  const [index, setIndex] = useState(0);
  const { name, image, brand, cpu, ram, graphich, display, os, 
          keyboard, battery, price } = products;
  const { decQty, incQty, qty, onAdd, } = useStateContext();
 
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
                        <ul>
                          <li>{`CPU: `}<span>{cpu}</span></li>
                          <li>{`Ram: ${ram}`}</li>
                          <li>{`GPU: ${graphich}`}</li>
                          <li>{`Display: ${display}`}</li>
                          <li>{`Os: ${os}`}</li>
                          <li>{`Keyboard: ${keyboard}`}</li>
                          <li>{`battery: ${battery}`}</li>
                        </ul>
                        <p className='price'>${price.toLocaleString('en', { maximumFractionDigits: 0 })}</p>
                        <div className='quantity'>
                          <h3>Quantity:</h3>
                          <p className='quantity-desc'>

                            <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
                            <span className='num'>{qty}</span>
                            <span className='plus' onClick={incQty}><AiOutlinePlus /></span>

                          </p>
                        </div>
                        <div className='buttons'>
                          <button type='button' className='add-to-cart' onClick={() => onAdd(products, qty)}>Add to Cart</button>
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