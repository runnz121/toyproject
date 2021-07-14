import { useState } from 'react'
import MsgItem from './MsgItem'
import MsgInput from './Msginput'

const UserIds = ['roy','jay']
const getRandomUserId = () => UserIds[Math.round(Math.random())]

const originalMsgs = Array(50).fill(0).map((_, i) => ({
    id: 50 - i, //역순 정렬
    userId: getRandomUserId(),
    timestamp: 1234567890123 + (50 - i) * 1000 * 60,
    text: `${50 - i} mock text`

})) //fill로 array를 채워야지 map을 돌릴 수 있다
//.reverse() 이거 대신 50 - i를 해줌으로서 역순 정렬 됨


// [ 반복되는 작업을 다시 구현
//     {
//         id:1,
//         userId: getRandomUserId(),
//         timestamp: 1234567890123,
//         text:'1 mock text'
//     }
// ]

const MsgList = () => {
const [msgs, setMsgs] = useState(originalMsgs)
 const onCreate = text => {
    const newMsg = {
        id : msgs.length,
        userId: getRandomUserId(),
        timestamp: Date.now(),
        text: `${msgs.length + 1} ${text}`
    }
    setMsgs(msgs => ([newMsg, ...msgs]))
 }


return (
    <>
        <MsgInput mutate={onCreate}/>
            <ul className = "messages">
        { msgs.map(x => (
            <MsgItem key={x.id} {...x} />)
            )}
        </ul>
        </>
    )
}
export default MsgList

