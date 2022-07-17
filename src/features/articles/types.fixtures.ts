import { faker } from '@faker-js/faker'

import type { ArticleDetailTye, ArticleType, CommentType } from './types'

export const createArticle = (): ArticleType => {
  return {
    articleId: faker.datatype.uuid(),
    createdAt: faker.date.past().toISOString(),
    imageId: '',
    lastUpdatedAt: faker.date.past().toISOString(),
    title: faker.lorem.words(3),
    perex: faker.lorem.paragraph(1),
  }
}

export const createComment = (): CommentType => {
  return {
    commentId: faker.datatype.uuid(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    content: faker.lorem.paragraph(3),
    createdAt: faker.date.past().toISOString(),
    score: faker.datatype.number({ min: -50, max: 50 }),
  }
}

export const createArticleDetail = (): ArticleDetailTye => {
  return {
    articleId: faker.datatype.uuid(),
    title: faker.lorem.words(3),
    perex: faker.lorem.paragraph(1),
    content: faker.lorem.paragraph(5),
    createdAt: faker.date.past().toISOString(),
    lastUpdatedAt: faker.date.past().toISOString(),
    imageId: '',
    comments: Array(faker.datatype.number({ min: 0, max: 10 }))
      .fill(0)
      .map(() => createComment()),
  }
}
