import t_shirt from '../../../img/product/image7.svg';
import start from '../../../img/Star2.svg';
import './NevArrivals.css'

export const NevArrivals = () => {
    return (
        <div id='on-newArrivals' className="container">
            <h2 className='title'>NEW ARRIVALS</h2>
            <div className='products'>
                <div>
                    <img src={t_shirt} alt="" />
                    <p>T-SHIRT WITH TAPE DETAILS</p>
                    <p className='grade'>
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                        4.5/5</p>
                    <h3>$120</h3>
                </div>
                <div>
                    <img src={t_shirt} alt="" />
                    <p>T-SHIRT WITH TAPE DETAILS</p>
                    <p className='grade'>
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                        4.5/5</p>
                    <h3>$120</h3>
                </div>
                <div>
                    <img src={t_shirt} alt="" />
                    <p>T-SHIRT WITH TAPE DETAILS</p>
                    <p className='grade'>
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                        4.5/5</p>
                    <h3>$120</h3>
                </div>
                <div>
                    <img src={t_shirt} alt="" />
                    <p>T-SHIRT WITH TAPE DETAILS</p>
                    <p className='grade'>
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                        4.5/5</p>
                    <h3>$120</h3>
                </div>
            </div>

            <div className='button'>
                <button>View All</button>
            </div>
        </div>
    );
}

