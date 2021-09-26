// https://newsapi.org/v2/top-headlines?country=pl&apiKey=214c7c45b12843028a3e5349cc12576c
const hticker = document.querySelectorAll('.hwtext');
const sliderImg = document.querySelectorAll('.slider-img');
const sliderImgText = document.querySelectorAll('.slider-img-text');
const articleImg = document.querySelectorAll('.article-box-img');
const articleText = document.querySelectorAll('.article-box-text');
let news;
function fillHticker () {

        fetch(`https://newsdata.io/api/1/news?apikey=pub_1476a0386dad153ca0324c27fa4f8c69559e`)
        .then(res => {
            // console.log(res.status);
            // console.log(res.ok);
            return res.json();
        })
        .then(data => {
            news = data;
            console.log(news);
            hticker.forEach((box, index) => {
                box.textContent = news.results[index].title;
                // console.log(news.results[index].title);
            });
        })
        .catch(err => console.log('Error', err));

}

function setIntervalAndExecute(fn, t) {
    fn();
    return(setInterval(fn, t));
}

// setIntervalAndExecute(fillHticker, 600000);


function fillSlider () {
    fetch(`https://newsdata.io/api/1/news?apikey=pub_1476a0386dad153ca0324c27fa4f8c69559e`)
        .then(res => {
            // console.log(res.status);
            // console.log(res.ok);
            return res.json();
        })
        .then(data => {
            news = data;
            // console.log(news);
            sliderImg.forEach((slide, index) => {
                slide.src = news.results[index+5].urlToImage;
                // console.log(news.results[index].title);
            });
            sliderImgText.forEach((slide, index) => {
                slide.textContent = news.results[index+5].title;
            })
        })
        .catch(err => console.log('Error', err));
}
// setIntervalAndExecute(fillSlider, 600000);

function fillArticleBoxes () {
    fetch(`https://newsdata.io/api/1/news?apikey=pub_1476a0386dad153ca0324c27fa4f8c69559e`)
        .then(res => {
            // console.log(res.status);
            // console.log(res.ok);
            return res.json();
        })
        .then(data => {
            news = data;
            // console.log(news);
            articleImg.forEach((slide, index) => {
                slide.src = news.results[index + 10].urlToImage;
                console.log(news.results[index + 10].urlToImage);
            });
            articleText.forEach((slide, index) => {
                slide.textContent = news.results[index+ + 10].title;
            })
        })
        .catch(err => console.log('Error', err));
}

// setIntervalAndExecute(fillArticleBoxes, 600000);
