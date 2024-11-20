import './Filter.css'
import filter from '../../../img/filter.svg'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const Filter = ({ filterProducts, priceRange, setPriceRange, setSelect }) => {

    const [category, setCategory] = useState();

    useEffect(() => {
        axios('https://fakestoreapi.com/products/categories')
        .then(({data}) => {
            setCategory(data)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])     

    return (
        <aside className='asideBlock'>
            <div className='title'>
                <h2>Filter</h2>
                <img src={filter} alt="" />
            </div>

            <div className='category'>
                <input className='input' type='radio' value='all' id='all' name="category" />
                <label onClick={() => setSelect('all')} htmlFor='all'>all</label>
                {
                    category &&
                    category.map((item, indx) => (
                        <div key={indx}>
                            <input type='radio' value={item} id={indx} name="category" />
                            <label onClick={() => setSelect(item)} htmlFor={indx}>{item}</label>
                        </div>
                    ))
                }
            </div>

            <div className='price'>
                <h2>Price</h2>

                <h4>${priceRange[0]} - ${priceRange[1]}</h4>
                <Slider
                    range
                    min={0}
                    max={500}
                    value={priceRange}
                    onChange={setPriceRange}
                    allowCross={false}
                    className="custom-slider"
                />
            </div>

            <div className='filterButton'>
                <button onClick={filterProducts}>Go filter</button>
            </div>

        </aside>
    );
}

