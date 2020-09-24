import API from '../../../configs/API'

export default class ReadAPI extends API {

    async updateProductBy(data) {
        return this.authFetch({
            url: 'product/update-product-by',
            method: 'POST',
            body: JSON.stringify(data),
        })
    }

    async insertProduct(data) {
        return this.authFetch({
            url: 'product/insert-product',
            method: 'POST',
            body: JSON.stringify(data),
        })
    }

    async deleteProductByCode(data) {
        return this.authFetch({
            url: 'product/delete-product-by-code',
            method: 'POST',
            body: JSON.stringify(data),
        })
    }
}