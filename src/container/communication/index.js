import {
  createElement,
  createHeader,
} from '../../scripts/layout'

const page = document.querySelector('.page')

const header = createHeader('h1', 'title')
page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')
page.append(title)

const TAB_LIST = [
  { id: 0, text: 'База знань', isActive: false },
  { id: 1, text: 'Інформація', isActive: true },
]

const tabList = createElement('nav', 'nav__list')
TAB_LIST.forEach((element) => {
  const tab = createElement(
    'div',
    `tab__item ${
      element.isActive ? 'tab__item--active' : ''
    }`,
    element.text,
  )
  tabList.append(tab)
})

tabList.append()
page.append(tabList)

const information = createElement('section', 'information')

const informationHeader = createElement(
  'img',
  'information__header',
)
informationHeader.src = 'img/information_header.png'

information.append(informationHeader)

const informationTitle = createElement(
  'p',
  'information__title',
  'Що таке база знань?',
)

information.append(informationTitle)

const informationDescription = createElement(
  'p',
  'information__description',
  'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ',
)

information.append(informationDescription)

const informationButton = createElement(
  'a',
  'information__button',
  "Перейти до ком'юніті у Телеграм",
)

informationButton.href = 'https://t.me/liberia_helper_bot'
information.append(informationButton)

page.append(information)
