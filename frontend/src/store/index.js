import {configureStore,  combineReducers,    } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import storage from 'redux-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';


//서로 다른 리듀싱 함수들을 값으로 가지는 객체를 받아서 createStore에 넘길 수 있는 하나의 리듀싱 함수로 반환
export const rootReducer = combineReducers({
    user: userReducer
});

const persistConfig = {
    key: "root",//key이름
    storage, // localStorage에 저장하겠단 뜻
    // whitelist : []  // 여러 리듀서중에 해당 리듀서만 localStorage에 저장
    // blackList : [] // 여러 리듀서중에 해당 리듀서만 제외하고 저장

}



const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    
    reducer: persistedReducer,
    middleware: getDefaultMiddleware=> getDefaultMiddleware({
        
            serializableCheck: {
                ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]   
            }
        
    }), 


})

export const persistor = persistStore(store)

//


