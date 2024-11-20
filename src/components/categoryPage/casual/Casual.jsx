import './Casual.css';
import { Link } from "react-router-dom";
import ReactStars from 'react-stars'

export const Casual = ({ currentPage, productsPerPage, totalProducts, filteredData, setCurrentPage }) => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredData.slice(indexOfFirstProduct, indexOfLastProduct);

    const nextPage = () => {
        if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };
    return (
        <div className="casualBlock">
            <h1>Casual</h1>  
            <div className="flexItem">
                {
                    currentProducts && 
                    currentProducts.map((product) => (
                        <div key={product.id} className="product">
                            <div className="item">
                                <img className="image" src={product.image} alt="Product img" />
                            </div>
                            <div className="description">
                                <h2><Link to={`/detail/${product.id}`}>{product.title}</Link></h2>
                                <div className="rating">
                                    <ReactStars
                                        count={5}
                                        value={product.rating.rate}  
                                        isHalf={true}          
                                        size={18}       
                                        edit={false}    
                                        activeColor="#ffd700" 
                                        inactiveColor="#ffffff"
                                    />
                                    <p>{product.rating.rate}/5</p>
                                </div>
                                
                                <h3>${product.price}</h3>
                                <button>Buy</button>
                            </div>
                        </div>
                        
                    ))
                }
            </div>

            <div className="pagination">
                <div className='btnPrevious'>
                    <button onClick={prevPage} disabled={currentPage === 1}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663" stroke="black" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Previous
                    </button>
                </div>
                <div>
                    <span>Page {currentPage}</span>
                </div>
                <div className='btnNext'>
                    <button onClick={nextPage} disabled={currentPage === Math.ceil(totalProducts / productsPerPage)}>
                        Next
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663" stroke="black" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                
            </div>
            
        </div>
    );
}