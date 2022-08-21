import React, { useReducer, createContext, useContext, useRef } from 'react';
import PostList from './components/PostList';

function postReducer(state, action) {
    switch (action.type) {
        // 하트 클릭: !isLike으로 변경, 콘솔에 클릭문구 출력
        case 'HeartClick':
            console.log("Heart is clicked")
            return state.map(post =>
                post.id === action.id ? { ...post, isLike: !post.isLike } : {...post, isLike: false}
              );
        // 코멘트 클릭: 콘솔에 클릭문구 출력
        case 'CommentClick':
            return;
        // 포스트 내용(썸네일, 제목, 내용)클릭: 콘솔에 클릭문구 출력
        case 'ContentClick':
            return;
        // 공유 클릭: 콘솔에 클릭문구 출력
        case 'ShareClick':
            return ;
        
    }
}

const PostStateContext = createContext();
const PostDispatchContext = createContext();
const PostThumnailNextIdContext = createContext();

export function PostProvider({children}){
    const [state, dispatch] = useReducer(postReducer, PostList);
    const nextId = useRef(1);

    return (
        <PostStateContext.Provider value={state}>
            <PostDispatchContext.Provider value={dispatch}>
                <PostThumnailNextIdContext.Provider value={nextId}>
                    {children}
                </PostThumnailNextIdContext.Provider>
            </PostDispatchContext.Provider>
        </PostStateContext.Provider>
    );
}

export function usePostState() {
    const context = useContext(PostStateContext);
    if(!context){
        throw new Error('Cannot find PostProvider');
    }
}

export function usePostDispatch() {
    const context = useContext(PostDispatchContext);
    if(!context){
        throw new Error('Cannot find PostProvider');
    }
}

export function usePostNextId() {
    const context = useContext(PostThumnailNextIdContext);
    if(!context){
        throw new Error('Cannot find PostProvider');
    }
}