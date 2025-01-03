const redux = require('redux')
const reduxLogger=require('redux-logger')

const createStore = redux.createStore
const combineReducer=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()

const BUY_ICECREAM='BUY_ICECREAM'
const BUY_CAKE='BUY_CAKE'

function buycake(){
    return{
        type:BUY_CAKE,
        info:"Cake is bought"
    }
}
function buyicecream(){
    return{
        type:BUY_ICECREAM,
        info:"Icecream is bought"
    }
} 

//reducer
// const initialState={
//     cakeCount:20,
//     icecreamCount:10
// }    

const initialCakeState={
    cakeCount:20
}
const initialIceCreamState={
    icecreamCount:10
}
const cakeReducer=(state=initialCakeState,action)=>{
    switch (action.type) {
        case BUY_CAKE:
            return{
                ...state,
                cakeCount:state.cakeCount-1
            }
        default:
            return state
    }
}
const IceCreamreducer=(state=initialIceCreamState,action)=>{
    switch (action.type) {
        case BUY_ICECREAM:
            return{
                ...state,
                icecreamCount:state.icecreamCount-1
            }
        default:
            return state
    }
}

const rootReducer=combineReducer({
    cake:cakeReducer,
    icecream:IceCreamreducer
})

const store=createStore(rootReducer,applyMiddleware(logger))
console.log('intial state',store.getState())
const unsubscribe=store.subscribe(()=>{})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe()