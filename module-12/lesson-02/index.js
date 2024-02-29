/**
 * Отримуємо ключ https://newsapi.org/
 * Запити робитимемо на http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 *
 * Пагінація: номер групи та кількість елементів групи
 * - Завантажуємо статті при самітті форми
 * - Завантажуємо статті при натисканні на кнопку «Завантажити ще»
 * - Оновлюємо групу в параметрах запиту
 * - Рендерим статті
 * - Скидання значення при пошуку за новим критерієм
 * - Показуємо спинер поки йде запит
 */

const searchForm = document.querySelector(".search-form");
const articlesContainer = document.querySelector(".articles");
const loadMoreBtn = document.querySelector('[data-action="load-more"]');
const spinner = document.querySelector('[data-action="load-more"] span.spinner-border');

const TOKEN = "723c1af1f15b42cc96f23314359d47d4"

async function getNews(query, amount, page){
  
  const resp = await fetch(`http://newsapi.org/v2/everything?q=${query}&language=en&pageSize=${amount}&page=${page}&apiKey=${TOKEN}`);
  

  if (!resp.ok){
    throw new Error('Problem with request to news API!');
  }

  return resp.json()
}



function appendArticlesMarkup(articles) {
  const markup = articles
    .map(
      ({ url, urlToImage, title, author, description }) => `
   <li>
     <a href="${url}" target="_blank" rel="noopener noreferrer">
       <article>
         <img src="${urlToImage}" alt="" width="480">
         <h2>${title}</h2>
         <p>Posted by: ${author}</p>
         <p>${description}</p>
       </article>
     </a>
   </li>`
    )
    .join("");

  articlesContainer.insertAdjacentHTML("beforeend", markup);
}


let current_page;
let current_query;


searchForm.addEventListener('submit', event => {
  event.preventDefault();
  articlesContainer.innerHTML = null;
  const query = event.target.elements.query.value.trim();

  if (!query){
    return;
  }

  getNews(query, 5, 1).then(data => {

    if (!data.articles.length){
      alert('No such articles. Provide another query..')
      return;
    }

    appendArticlesMarkup(data.articles)
    current_query = query;
    current_page = 1;
    loadMoreBtn.classList.remove('is-hidden')
  })
  .catch(e => alert(e.message))
})


loadMoreBtn.addEventListener('click', event => {
  spinner.classList.remove('is-hidden')
  current_page++;
  getNews(current_query, 5, current_page).then(data => {
    appendArticlesMarkup(data.articles)
    spinner.scrollIntoView()
    spinner.classList.add('is-hidden')
  }).catch(e => alert(e.message))


})