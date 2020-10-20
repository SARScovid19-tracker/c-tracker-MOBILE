import axios from 'axios'
import { FETCH_DATA_COVID } from './action-type'


export const fetchDataCovid = (payload) => {
    return {
        type: FETCH_DATA_COVID,
        payload
    }
}


export function getDataCovid() {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/more'
        })
            .then(({ data }) => {
                console.log(data.penambahan, ">>>>>>>>>>>>>>> result action")
                dispatch(fetchDataCovid(data.penambahan))
            })
            .catch(err => {
                console.log(err, ">>>>>>>>>>>>> err get data covid")
            })


    }
}