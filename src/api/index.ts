import axios from 'axios'

const config = {
    baseURL: 'https://api.giphy.com/v1/'
}

const _axios = axios.create(config)

export default _axios