
import rootreduce from "./reducer";

import { applyMiddleware, createStore,Middleware } from "redux";


import { midle } from "./reducer";

const store=createStore(rootreduce,applyMiddleware(midle)
    
    
    );


export default store;