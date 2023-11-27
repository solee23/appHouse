import axios from "../axios";

export const apiDetailUser = () => axios({
    url: '/user/detail',
    method: 'get',
})