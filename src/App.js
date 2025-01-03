import React,{useReducer} from "react";
import "./App.css";
import ParentComponent from "./CallBack/ParentComponent";
import Counter from "./CallBack/Counter";
import FocusInput from "./Refs/FocusInput";
import ClassTimer from "./Refs/ClassTimer";
import HookTimer from "./Refs/HookTimer";
import DocTitleOne from "./CustomHooks/DocumentName/DocTitleOne";
import DocTitleTwo from "./CustomHooks/DocumentName/DocTitleTwo";
import CounterOne from "./CustomHooks/Counter/CounterOne";
import CounterTwo from "./CustomHooks/Counter/CounterTwo";
import UserForm from "./CustomHooks/UserForm/UserForm";
// import ComponentA from "./Reducer/ComponentA";
// import ComponentC from "./Reducer/ComponentC";
// import ComponentB from "./Reducer/ComponentB";
// import DataFetchingOne from "./Reducer/DataFetchingOne";
// import DataFetching2 from "./Reducer/DataFetching2";
// import CounterOne from './Reducer/CounterOne';
// import Counter2 from './Reducer/Counter2';
// import CounterThree from './Reducer/CounterThree';
// import ComponentC from './Context/ComponentC';
// import IntervelClassCounter from './Components/IntervelClassCounter';
// import IntervelHookCounter from './Components/IntervelHookCounter';
// import DataFetching from './Data/DataFetching';
// import SingleDataFetch from './Data/SingleDataFetch';
// import ClassMouse from './Components/ClassMouse';
// import HookCounterFour from './Components/HookCounterFour';
// import HookCounterOne from './Components/HookCounterOne';
// import HookMouse from './Components/HookMouse';
// import MouseContainer from './Components/MouseContainer';
// import CounterInc from './Components/CounterInc';
// import HookCounter from './Components/HookCounter';
// import HookCounterTwo from './Components/HookCounterTwo';
// import HookCounterThree from './Components/HookCounterThree';

// export const userContext = React.createContext()
// export const ChannelContext=React.createContext()

// export const countContext=React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <countContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div className="App">
      <UserForm />
      {/* <CounterOne />
      <CounterTwo /> */}
      {/* <DocTitleOne/> */}
      {/* <DocTitleTwo /> */}
      {/* <HookTimer />
      <ClassTimer /> */}
      {/* <FocusInput/> */}
      {/* <Counter/> */}
      {/* <ParentComponent /> */}
      {/* <DataFetching2/> */}
       {/* <DataFetchingOne /> */}
      {/* <h1>Count: {count}</h1>
      <ComponentA />
      <ComponentB />
      <ComponentC /> */}
      {/* <CounterThree/> */}
      {/* <CounterOne /> */}
      {/* <Counter2/> */}
      {/* <userContext.Provider value={'Luffy'}>
        <ChannelContext.Provider value={'OP'}>
        <ComponentC />
        </ChannelContext.Provider>
      </userContext.Provider> */}
      {/* <SingleDataFetch/> */}
      {/* <DataFetching /> */}
      {/* <IntervelClassCounter /> */}
      {/* <IntervelHookCounter/> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse/> */}
      {/* <ClassMouse /> */}
      {/* <CounterInc/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterOne/> */}
    </div>
    // </countContext.Provider>
  );
}

export default App;
