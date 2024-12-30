import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../Components/ProductCard';
import '../css/proItem.css'

const ProductsItem = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const respone = await axios.get('http://localhost:7000/products');
                setData(respone.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading Please wait...</p>
    if (err) return <p>Error {err}</p>

    return (
        <div className="product-list">
          {data.map((products) => (
            <ProductCard key={products.id} product={products} className='onePro' />
          ))}
        </div>
      );
};


export default ProductsItem