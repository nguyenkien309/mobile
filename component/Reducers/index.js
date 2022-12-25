import { combineReducers } from 'redux';
import {GET_ALL_PRODUCT,GET_NUMBER_CART,ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART} from  '../Action/index';
const data=require('../../Data/qa.json')

const initProduct = {
    numberCart:0,
    Carts:[],
    _products:[data.History]
}

function todoProduct(state = initProduct,actions) {
    switch (actions.type) {
        case GET_ALL_PRODUCT:
            return{
                ...state,
                _products:actions.payload
            }
        case GET_NUMBER_CART:
                return{
                    ...state
                }
        case ADD_CART:
            if(state.numberCart == 0){
                let cart = {
                    qty:1,
                    Name:actions.payload.Name,
                    img:actions.payload.img,
                    price:actions.payload.price,
                    day:actions.payload.day,
                    night:actions.payload.night,
                }
                state.Carts.push(cart);
            }
            else {
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.Name == actions.payload.Name){
                        state.Carts[key].qty++;
                        check = true;
                    }
                });
                if(!check){
                    let _cart = {
                        qty:1,
                        Name:actions.payload.Name,
                        img:actions.payload.img,
                        price:actions.payload.price,
                        day:actions.payload.day,
                        night:actions.payload.night
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1,
            }
        case DELETE_CART:
            let qty_ = state.Carts[actions.payload].qty;
            return{
                ...state,
                numberCart:state.numberCart - qty_,
                Carts:state.Carts.filter(item=>{
                    return item.Name!=state.Carts[actions.payload].Name
                })
            }
        default: 
            return state;
    }
}

const ShopApp = combineReducers({
    _todoProduct:todoProduct
});
export default ShopApp;
