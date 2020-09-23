
import ProductList from '../components/product/ProductList.js'
import fetch from 'isomorphic-unfetch'

const ProductPage = (props) => ( 
    
    <ProductList products={props.products} />
)

ProductPage.getInitialProps = async function () {
    const res = await fetch('https://my-json-server.typicode.com/mood-board/demo/products');
    const data = await res.json();
    console.log("data : ", data)
    return {
        products: data
    };
};
export default ProductPage