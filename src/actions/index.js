import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
    
}

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res=> {
            dispatch(actFetchProducts(res.data))
            
            
        })

    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
    
}
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return  callApi(   `products/${id}`, 'DELETE', null).then(res => {

            dispatch(actDeleteProduct(id))
          
        })

    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    } 
}

export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            // vi sau khi add thi sever se trả về value của product vừa add nên ta sẽ sử dụng res.data 
            dispatch(actAddProduct(res.data))
        })
    }
}

export const actEditProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    } 
}

export const actEditProductRequest = (id) => {
    return (dispatch) => {
        return  callApi(`products/${id}`, 'GET', null).then(res => {
            // vi sau khi add thi sever se trả về value của product vừa add nên ta sẽ sử dụng res.data 
            // console.log(res.data);
            
            dispatch(actEditProduct(res.data))
        })
    }
  
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    } 
}

export const actUpdateProductRequest = (id, product) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'PUT', product).then(res => {
            // vi sau khi add thi sever se trả về value của product vừa add nên ta sẽ sử dụng res.data 
            dispatch(actUpdateProduct(res.data))
        })
    }
}