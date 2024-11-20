import ReactStars from 'react-stars';
import './infoProduct.css'

export const InfoProduct = ({ product }) => {
    return (
        <div>
            {
                product && (
                    <div className="productInfo">
                        <h2>{product.title}</h2>
                        <div className="rating">
                            <ReactStars
                                count={5}
                                value={product?.rating?.rate ? product.rating.rate : 0}  
                                isHalf={true}          
                                size={30}       
                                edit={false}    
                                activeColor="#ffd700" 
                                inactiveColor="#ffffff"
                            />
                            <p>{product?.rating?.rate ? `${product.rating.rate}/5` : ''}</p>
                        </div>
                        <h3>${product.price}</h3>
                        <p>{product.description}</p>
                        <button>Buy</button>
                    </div>
                )
            }
        </div>
    );
}

