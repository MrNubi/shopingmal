import creatrSlice from '@reduxjs/toolkit'

const initialState = {
    userData : {
        id : '',
        email : '',
        name : '',
        role : 0, // 0으로 하면 일반 유저, 1로하면 어드민 유저 
        image : '',
    },
    isAuth:false,
    isLoading:false,
    error:'',

}

const userSlice = creatrSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => {}
})

export default userSlice.reducer;
// action과 reducer 동시에 만들어주는 리덕스 툴킷의 기능
/*
createSlice는 초기값, 리듀서, 액션을 하나의 객체에 담아 전달받는다. 
그렇게 만든 슬라이스 객체에서 액션과 리듀서는 아래와 같이 가져올 수 있다.

const { addTodo, removeTodo } = todosSlice.actions;
const { reducer } = todosSlice;
*/

