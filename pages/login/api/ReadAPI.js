import API from '../../../configs/API'

export default class ReadAPI extends API { 

    async getProductBy(data) {
        return this.authFetch({
            url: 'product/get-product-by',
            method: 'POST',
            body: JSON.stringify(data),
        })
    }

    async getProductByCode(data) {
        return this.authFetch({
            url: 'product/get-product-by-code',
            method: 'POST',
            body: JSON.stringify(data),
        })
    }

}