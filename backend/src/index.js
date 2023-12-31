//entry
const express = require("express");
const cors = require('cors')
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const app = express();
// 파일과 폴더의 경로 작업을 위한 기능을 제공하는 Node.js 기본 모듈

const HOST = '0.0.0.0';
const PORT =8008;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('연결완료');
}).catch((err)=>{
    console.error(err);
})

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../uploads')));
app.get('/', (req, res)=>{
    res.send("hi");
})
app.post('/', (req, res)=>{
    console.log(req.body);
    res.json(req.body);

})



// 스테틱 파일을 제공하는걸 막는 것을 특정 폴더만 푸는 미들웨어, 가상 경로도 지정가능
// path.join을 이용해서 path인자로 받은 주소(string)들을 합쳐줌,
// __dirname은 file 명을 제외한 절대 경로 정보를 제공

app.listen(PORT,HOST)
console.log(`http://localhost:${PORT}`)
