import t_shirt from '../../../img/product/image7.svg';
import start from '../../../img/Star2.svg';
import './TopSelling.css';

export const TopSelling = () => {
    return (
        <div id='on-sale' className="container">
            <h2 className='title'>TOP SELLING</h2>
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
            <div className='buttonSel'>
                <button>View All</button>
            </div>
        </div>
    );
}

