import getData from "./getData.js";

const getCard = function (dataCard) {
  const li = document.createElement("li");
  li.classList.add("card");

  switch (this) {
    case "video":
      li.classList.add("card-video");
      li.innerHTML = `<a href="${dataCard.link}" class="card-link">
                      <figure class="card-link__figure">
                        <img src="${dataCard.preview}" alt="" class="card-link__img"/>
                        <svg class="card-link__icon">
                          <use xlink:href="#play"></use>
                        </svg>
                        <figcaption class="card-link__text">
                          ${dataCard.description}
                        </figcaption>
                      </figure></a>`;
      break;

    case "photo":
      li.classList.add("card-img");
      li.innerHTML = `<img src="${dataCard.link}" alt="${dataCard.description}" class="tabs-content__img"/>`;
      break;

    case "goods":
      li.classList.add("card-prod");
      li.innerHTML = `<article class="prod">
                        <img src="${dataCard.picture}" alt="" class="prod-img" />
                        <h2 class="prod-title">${dataCard.name}</h2>
                        <div class="prod-buy">
                         <p class="prod-price">${dataCard.price}₴</p>
                        <button class="prod-btn">
                          <svg class="prod-icon"><use xlink:href="#add"></use></svg>
                        </button>
                        </div>
                      </article>`;
      break;

    default:
      li.innerHTML = "Нет данных";
  }

  return li;
};

const renderTabs = async (i = 0) => {
  const tabsContent = document.querySelectorAll(".tabs-content");

  const type = tabsContent[i].dataset.base;

  const data = getData(`db/${type}.json`);

  const listElem = data.map(getCard, type);

  tabsContent[i].textContent = ``;

  tabsContent[i].append(...listElem);
};

export default renderTabs;
