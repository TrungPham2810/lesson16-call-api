import * as Types from './../constants/ActionTypes';
var initialState = {
    id: '',
    txtName: '',
    txtPrice: '',
    txtStatus: false
};

var itemEditing = (state = initialState, action)=> {

    switch(action.type){
        case Types.EDIT_PRODUCT:
            state = action.product
            return state
       
        default: return state
    }

}
export default itemEditing