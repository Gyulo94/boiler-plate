const express = require('express')
const app = express()
const port = 8000
const { User } = require('./models/User');

//application/json
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gyulo94:q1w2e3@boilerplate.guzruec.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World !'))

app.post('/register', async (req, res) => {
    //회원가입 할때 필요한 정보들을 클라이언트에서 가져오면
    //그것들을 데이터베이스에 넣어준다.
    const user = new User(req.body)
    await user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.error(err);
      res.json({
        success: false,
        err: err,
      });
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

