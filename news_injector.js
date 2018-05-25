let newsContent = document.getElementById('news-content')
let newsContent2 = document.getElementById('news-content2')
let slideshow = document.getElementById('slide-show')

let newsArticles = news['articles']

let index = 0
rotate_news()
let interval = setInterval(function(){
rotate_news()
},5000)

function rotate_news() {
  if(index == newsArticles.length) index = 0
  let slideShowItem = `<li class="media">
<img class="mr-3" src="${newsArticles[index].urlToImage}" alt="Generic placeholder image">
<div class="media-body">
  <h5 class="mt-0 mb-1">${newsArticles[index].title}</h5>
  <p>${newsArticles[index].description}</p>
  <p><small class="text-muted">${newsArticles[index].author} via: ${newsArticles[index].source['name']}</small></p>
  <p><small class="text-muted">${newsArticles[index].publishedAt}</small></p>

</div>
</li>`
slideshow.innerHTML = slideShowItem
index++
}

function full_news() {
  newsContent.innerHTML = ''
  newsArticles.forEach((article) => {
      let articleItem = `<div class="card">
      <a href="${article.url}"><img class="card-img-top" src="${article.urlToImage}" alt="Card image cap"></a>
      <div class="card-body">
        <h5 class="card-title">${article.title}</h5>
        <p class="card-text">${article.description}</p>
        <p class="card-text"><small class="text-muted">${article.author} via: ${article.source['name']}</small></p>
        <p class="card-text"><small class="text-muted">${article.publishedAt}</small></p>
      </div>
    </div>`
  newsContent.innerHTML += articleItem
  })
}

full_news()

/* function full_media() {
  newsContent2.innerHTML = ''
  newsArticles.forEach((article) => {
      let articleItem = `<li class="media">
    <img class="mr-3" src="${article.urlToImage}" alt="Generic placeholder image">
    <div class="media-body">
      <h5 class="mt-0 mb-1">${article.title}</h5>
      <p>${article.description}</p>
      <p><small class="text-muted">${article.author} via: ${article.source['name']}</small></p>
      <p><small class="text-muted">${article.publishedAt}</small></p>

    </div>
  </li>`
  newsContent2.innerHTML += articleItem
  })
}

full_media() */
