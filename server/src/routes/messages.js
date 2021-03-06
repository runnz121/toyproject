import { v4 } from 'uuid'
import { readDB, writeDB } from '../dbController.js'

const getMsgs = () => readDB('messages')
const setMsgs = data => writeDB('messages', data)

const messagesRoute = [  //배열로 생성 -> 여러가지 매소드를 한번에 정의하기 위해서
    {//get messages
        method: 'get',
        route: '/messages',
        handler: (req, res) => {
            const msgs = getMsgs()
            res.send(msgs)
        },
    },
    { //get message
        method: 'get',
        route: '/messages/:id',
        handler:({params:{id}}, res) => {
            try {
                const msgs = getMsgs()
                const msg = msgs.find(m => m.id === id)
                if(!msg) throw Error('not found')
                res.send(msg)
            } catch(err){
                res.status(404).send({error:err})
            }
        },
    },
    {//create message
        method: 'post',
        route: '/messages',
        handler: ({body}, res) => { //body에는 새글, id가 들어있다
            const msgs = getMsgs()
            const newMsg = {
                id: v4(), //uuid만들기 위한 선언
                tet: body.text,
                userId: body.userId,
                timestamp: Date.now()
            }
            msgs.unshift(newMsg)
            setMsgs(msgs)
            res.send(newMsg)
        },
    },
    {//update message
        method: 'put',
        route: '/messages/:id',
        handler: ({body,params:{id}}, res) => {
            try{
            const msgs = getMsgs()
            const targetIndex = msgs.findIndex(msg => msg.id === id)
            if (targetIndex < 0) throw '메세지가 없습니다.'
            if(msgs[targetIndex].userId !== body.userId) throw '사용자가 다릅니다.'
            const newMsg = {...msgs[targetIndex], text: body.text}
            msgs.splic(targetIndex, 1, newMsg)
            setMsgs(msgs)
            res.send(newMsg)
            } catch (err) {
                res.status(500).send({error:err})
            }
        },
    },
    {//delete message
        method: 'delete',
        route: '/messages/:id',
        handler: ({body, params: {id}}, res) => {
            try{
                const msgs = getMsgs()
                const targetIndex = msgs.findIndex(msg => msg.id === id)
                if (targetIndex < 0) throw '메세지가 없습니다.'
                if(msgs[targetIndex].userId !== body.userId) throw '사용자가 다릅니다.'
               
                msgs.splic(targetIndex, 1)
                setMsgs(msgs)
                res.send(id)
                } catch (err) {
                    res.status(500).send({error:err})
                }
        },
    },
]

export default messagesRoute