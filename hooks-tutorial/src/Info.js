import { useState, useEffect } from 'react'
/*
    useState 함수는 하나의 상태 값만 관리,
    관리해야 할 상태 값이 여러 개라면 useState를 여러 번 사용

    useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
    클래스형 컴포넌트의 componentDidMount + componentDidUpdate의 형태
 */
const Info = () => {
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')

    useEffect(() => {
        console.log('렌더링이 완료되었습니다.')
        console.log({
            name,
            nickname
        })
    })

    const onChangeName = e => {
        setName(e.target.value)
    }

    const onChangeNickname = e => {
        setNickname(e.target.value)
    }

    return (
        <div>
            <div>
                <input type="text" value={name} onChange={onChangeName}/>
                <input type="text" value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info