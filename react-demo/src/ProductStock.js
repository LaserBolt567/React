import React from 'react';

export default class ProductStock extends React.Component {
    render() {
        return (
            <div className='product-stock'>
                <SearchBar />
                <ProductView stock={this.props.stock} />
            </div>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <div className='search-bar'>
                <input type='text' value={this.props.searchKey} placeholder='search here...' />
                <br />
                <input type='checkbox' /> {' '} Only show products in stock
            </div>
        );
    }
}

class ProductView extends React.Component {
    render() {
        const productCategories = this.props.stock ? this.props.stock.map((productCategory) => (<ProductCategory category={productCategory} />)) : <p>Stock is empty</p>;
        return (
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                {productCategories}
            </table>
        );
    }
}

class ProductCategory extends React.Component {
    render() {
        const products = this.props.category.products.map((p) => <Product product={p} />)
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.category.name}</td>
                </tr>
                {products}
            </React.Fragment>
        );
    }
}

class Product extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}