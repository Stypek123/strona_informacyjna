import express from 'express';
import path from 'path';
import routes from './routes/routes.js';
// import getNews from './public/scripts/news.js';
// import bootstrap from 'bootstrap';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 3000;
const app = express();

app.listen(port, () => {
    console.log('Hi, I\'m running!');
})

app.use(express.static(
    path.join(__dirname, 'public')
));

// console.log(port);
routes(app);
// getNews(false);