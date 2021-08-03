import { handleActions } from 'redux-actions'
import * as api from '../lib/api'

// 액션 타입 선언
// 요청, 성공, 실패로 한 요청당 3개를 만들어야 함

const GET_POST = 'sample/GET_POST'
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCES'
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE'

const GET_USERS = 'sample/GET_USERS'
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS'
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE'

// thunk 함수 생성
// thunk 함수 내부에서는 시작, 성공, 실패했을 때 다른 액션을 dispatch함

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST })
  try {
    const response = await api.getPost(id)
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data,
    }) // 요청 성공
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    }) // 에러 발생
    throw e // 나중에 컴포넌트에서 에러 조회할 수 있도록 함
  }
}

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS })
  try {
    const response = await api.getUsers()
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    }) // 요청 성공
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    })
    throw e
  }
}

// 초기 상태
// 요청 로딩 중 상태는 loading 객체에서 관리

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
}

const sample = handleActions(
  {
    [GET_POST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: true, // 요청 시작
      },
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, // 요청 완료
      },
      post: action.payload,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, // 요청 완료
      },
    }),
    [GET_USERS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: true, // 요청 시작
      },
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false, // 요청 완료
      },
      users: action.payload,
    }),
    [GET_USERS_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false, // 요청 완료
      },
    }),
  },
  initialState,
)

export default sample
