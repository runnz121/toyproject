import fs from 'fs' //node js에서 파일 시스템이 모여있는 곳
import{resolve} from 'path'

const basePath = resolve() //현재의 경로가 베이스 path 로 잡힌다

const filenames = {
    messages: resolve(basePath, 'src/db?messages.json'),
    users: resolve(basePath, 'src/db/users.json')
}

export const readDB = target => {
    try {
        return fs.readFileSync(filenames[target], 'utf-8') //글자 꺠질 수있음으로 포멧 설정 해줌
    } catch (err) {
        console.error(err)
    }
}

export const writeDB = (target, data) => {
    try {
        return fs.writeFileSync(filenames[target], JSON.stringify(data))
    } catch(err) {
        console.error(err)
    }
}