const redux=require('redux')
const createStore=redux.createStore

const BUY_CAKE='BUY_CAKE'  //action

function buycake(){ //it is a action creator which is a function which returns an action
    return {
        type:BUY_CAKE,
        info:'First Redux action'
    }
}

// (previousState,action)=>newState 
const initialState={
    numOfCakes:10
}
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes:state.numOfCakes-1
            }
        default : return state    
    }
}

const store=createStore(reducer) //it is basically we will tell the application what will happen so if a person comes to buy a cake at a cake shop then we will tell the shopkeeper to reduce the number of cakes by 1 here shopkeep is reducer function cake shop is the store and the person is giving an action called buy cake
console.log('intial state',store.getState())
const unsubscribe=store.subscribe(()=>console.log('updated state',store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
unsubscribe()