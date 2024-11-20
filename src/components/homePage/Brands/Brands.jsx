import './brands.css'
import rect from '../../../img/Rectangle 2.jpg'
import versace from '../../../img/brands/Group.svg'
import zara from '../../../img/brands/zara-logo-11.svg'
import gucci from '../../../img/brands/gucci-logo-11.svg'
import prada from '../../../img/brands/prada-logo-11.svg'
import calvin from '../../../img/brands/Group(1).svg'

export const Brands = () => {
    return (
        <div id='on-brands' className='containerBrand'>
            <div className='bannerCont'>
                <img className='banner' src={rect} alt="" />
                <div className='container'>
                    <div className='content'>
                        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button>Shop Now</button>
                        <div className='indicators'>
                            <div>
                                <h2>200+</h2>
                                <p>International Brands</p>
                            </div>
                            <div>
                                <h2>2,000+</h2>
                                <p>High-Quality Products</p>
                            </div>
                            <div>
                                <h2>30,000+</h2>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div className='brands'>
                <div className='container'>
                    <div className='brandsItem'>
                        <img src={versace} alt="" />
                        <img src={zara} alt="" />
                        <img src={gucci} alt="" />
                        <img src={prada} alt="" />
                        <img src={calvin} alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

