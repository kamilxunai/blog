export interface PostContent {
  body: string
  frontmatter: {
    date: string
    title: string
  }
}

export interface Frontmatter {
  frontmatter: {
    path: string
    title: string
  }
}
