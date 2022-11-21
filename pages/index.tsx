import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

interface Articles {
  urlToImage: string
  title: string
  description: string
}

interface ArticleState {
  arts: Array<Articles>
}

export default function Home({articles}: Articles ) {

  /* const [article, setArticle] = useState<ArticleState['arts']>([]) */

  /* useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-10-21&sortBy=publishedAt&apiKey=3b7bc96bfb824b6c96df8d47328857f3')
      .then(res => res.json())
      .then(response => {
        const {articles} = response
        setArticle(articles)
      })
  }, []) */

  return (
    <>
      <div className={styles.container}>
        {articles.length > 0 ? articles.map((art: Articles, index: number) => (
          <div key={index}>
            <img 
              src={art.urlToImage} 
              alt="Image not found" height='150px' width='200px' />
            <h2>{art.title}</h2>
            <p>
              {art.description}
            </p>
          </div>
        ))
      :
      <p>Ups, limit of orders reached </p>}
      </div>
    </>
  )
}

export async function getServerSideProps () {
  const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-10-21&sortBy=publishedAt&apiKey=3b7bc96bfb824b6c96df8d47328857f3')
  const { articles } = await response.json()
  return {
    props: {
      articles 
    }
  }
}
