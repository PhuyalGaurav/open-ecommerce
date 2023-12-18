import { 
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST
} from "../constants/productConstants";
import Axios from 'axios'

export const listProducts = () => async (dispatch) =>{
    try{
        dispatch({type : PRODUCT_LIST_REQUEST })

        const { data } = await Axios.get('/api/products')

        dispatch({
            type : PRODUCT_LIST_SUCCESS ,
            payload : data
        })
    }
    catch(error){
        dispatch({
            type : PRODUCT_LIST_FAIL,
            payload : error.response && error.response.data.message
            ? error.data.message
            : error.message,
         })
    }
}