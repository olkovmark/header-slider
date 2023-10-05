import {
  createElement,
  createHeader,
} from '../../scripts/layout'

const page = document.querySelector('.page')

const title = createElement('h1', 'title', 'Мій блог')
page.append(title)

const header = createHeader('h1', 'title')
page.append(header)

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: `До біса планувальник, наймаємо
        дизайнера і готуємося до презентації, як Джобс`,
    date: '25.01',
    viewed: false,
  },
  {
    category: [{ text: 'Нова', id: 2 }],
    info: `Ми хотіли щоб у цьому чаті було
        близько 150 людей щоб зробити якісний пак
        само-презентацій.`,
    date: '24.01',
    viewed: true,
  },
]

const createPost = () => {
  const postList = createElement('main', 'post__list')
  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'post button post--viewed'
        : 'post button',
    )

    const postHeader = createElement('div', 'post__header')

    const categoryList = createElement(
      'div',
      'post__category-list',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `post__category post__category--${category.id}`,
        category.text,
      )
      categoryList.append(categorySpan)
    })

    const dateSpan = createElement(
      'span',
      'post__date',
      postData.date,
    )

    postHeader.append(categoryList, dateSpan)

    const infoParagraph = createElement(
      'p',
      'post__info',
      postData.info,
    )

    post.append(postHeader, infoParagraph)

    postList.append(post)
  })

  return postList
}

const post = createPost()
page.append(post)
