
import ProductList from '../components/product/ProductList.js'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
    </div>

)

Index.getInitialProps = async function () {
    // const res = await fetch('https://my-json-server.typicode.com/mood-board/demo/products');
    // const data = await res.json();
    // console.log("data : ", data)
    let data = [];
    return {
        products: data
    };
};
export default Index