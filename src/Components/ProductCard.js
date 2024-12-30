import React from 'react'
import '../css/ProductCard.css'
import '../Pages/ProductsItem'

const productCard = ({ product }) => {
    return (
        <>
            <div className="products-card">
                <img src={product.img} alt={product.name} className="products-image" />
                <h2 className="products-name">{product.name}</h2>
                <p className="products-description">{product.description}</p>
                <div className="products-rating">⭐ {product.rating}</div>
                <div className="products-price">${product.price.toFixed(2)}</div>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </>
    )
}

export default productCard
