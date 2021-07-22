import express from 'express'
import cors from 'cors'
import messagesRoute from './routes/messages.js'
import usersRoute from './routes/users.js'

const app = express() //app 만들기(expressfh)
app.use(express.urlencoded({ extended: true}))
app.use(express.json())//epxress 에서 json형태로 사용하겠다

app.use(cors({
    origin: 'http"//loclahost:3000', //origin host 주소
    credentials: true
}))


//app.[method명](route, handler) => 구현하는법
// app.get('/', (req, res) => { //get method 에 대한 핸들러 추가
//     res.send('ok')
// })
const routes = [...messagesRoute, ...usersRoute]
routes.forEach(({method, route, handler}) => {
    app[method](route, handler)
})



app.listen(8000, () => { //서버경로 설정
    console.log('server listening on 8000...')
})