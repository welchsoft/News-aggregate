let newsContent = document.getElementById('news-content')
let newsContent2 = document.getElementById('news-content2')

let newsArticles = news['articles']



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

function full_media() {
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

full_media()
