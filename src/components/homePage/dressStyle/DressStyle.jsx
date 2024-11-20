import './dressStyle.css';
import Casual from '../../../img/dressStyle/image11.jpg'
import Formal from '../../../img/dressStyle/image13.jpg'
import Party from '../../../img/dressStyle/image12.jpg'
import Gym from '../../../img/dressStyle/image14.jpg'

export const DressStyle = () => {
    return (
        <div className='container'>
            <div className='block'>
                <h2>BROWSE BY DRESS STYLE</h2>

                <div className='blockFlex'>
                    <div className='smallBlock'>
                        <img src={Casual} alt="" />
                        <h3>Casual</h3>
                    </div>
                    <div className='largeBlock'>
                        <img src={Formal} alt="" />
                        <h3>Formal</h3>
                    </div>
                </div>
                <div className='blockFlex'>
                    <div className='largeBlock'>
                        <img src={Party} alt="" />
                        <h3>Party</h3>
                    </div>
                    <div className='smallBlock'>
                        <img src={Gym} alt="" />
                        <h3>Gym</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

