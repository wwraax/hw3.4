import { Casual, Filter } from "../components";
import '../app.css'
import { useEffect, useState } from "react";
import axios from "axios";

export const Category = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);
    const [totalProducts, setTotalProducts] = useState(0);
    const [priceRange, setPriceRange] = useState([0, 500]); 
    const [select, setSelect] = useState('all');

    useEffect(() => {
        axios('https://fakestoreapi.com/products')
            .then(({ data }) => {
                setData(data);
                setFilteredData(data);
                setTotalProducts(data.length);
            })
            .catch((error) => {
                console.error("Failed to fetch products", error);
            });
    }, []);

    const filterProducts = () => {
        if(select === 'all'){
            const filtered = data.filter(
                (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
            );
            setFilteredData(filtered);
            setTotalProducts(filtered.length);
        }else{
            const filtered = data.filter(
                (product) => product.price >= priceRange[0] && product.price <= priceRange[1] && product.category === select
            );
            setFilteredData(filtered);
            setTotalProducts(filtered.length);
        }
            
        setCurrentPage(1); 
    };

    return (
        <div className="container category">
            <div className="flexItem">
                <Filter filterProducts={filterProducts} priceRange={priceRange} setPriceRange={setPriceRange} setSelect={setSelect} />
                <Casual currentPage={currentPage} productsPerPage={productsPerPage} totalProducts={totalProducts} filteredData={filteredData} setCurrentPage={setCurrentPage}  />
            </div>
            
        </div>
    );
}