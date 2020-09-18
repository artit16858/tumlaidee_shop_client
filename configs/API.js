import GLOBAL from './GLOBAL'

export default class API {
    async directFetch(data) {
        return await fetch(GLOBAL.BASE_URL.URL + data.url, {
            method: data.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: data.body,
        }).then((response) => response.json().then((responseJson) => {
            return responseJson
        })).catch((error) => {
            return { require: false, data: [], err: error }
        })
    }

    async authFetch(data) {
        const response = await fetch(GLOBAL.BASE_URL.URL + data.url, {
            method: data.method,
            headers: GLOBAL.AUTH_HEADERS,
            body: data.body,
        }).then((response) => response.json().then((responseJson) => {
            return responseJson
        })).catch((error) => {
            return { require: false, data: [], err: error }
        })

        if (!response.authenticate) {
            
        }

        return response
    }
}