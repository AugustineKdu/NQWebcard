
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// EJS 템플릿 엔진 사용 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일 제공 (CSS 등)
app.use(express.static(path.join(__dirname, 'public')));

// 라우팅
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/case-studies', (req, res) => {
    res.render('case-studies');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// 서버 실행
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
