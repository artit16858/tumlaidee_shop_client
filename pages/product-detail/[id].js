import fetch from 'isomorphic-unfetch';
import ProductDetail from '../../components/ProductItem'
const ProductView = props => {
    return (
        <ProductDetail product={props.product} />
    )
};
Productitem.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`https://my-json-server.typicode.com/mood-board/demo/products/${id}`);
    const product = await res.json();
    return { product };
};
export default ProductView;