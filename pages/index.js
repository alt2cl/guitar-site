import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from '@/components/layout'
import Guitarra from '@/components/guitarra'
import Post from '@/components/post'
import Banner from '@/components/banner'

export default function Home({guitarras, posts, curso}) {

  console.log('curso:', curso)

  return (
    <>
      <Layout title='Inicio' description=''>
        <main>
          <h1 className='heading'>Nuestra Coleccion</h1>
          <div className='grid  grid-cols-1 lg:grid-cols-3'>
            {guitarras?.map(guitarra => (
                <Guitarra key={guitarra.id} guitarra={guitarra.attributes}/>
            ))}
          </div>
        </main>
        <Banner curso={curso.attributes} />
        <section>
        <h1 className='heading'>Noticias</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-20'>
          {posts?.map(post => (
            <Post
            key={post.id}
            post={post.attributes}
            shortPost={true}
            />
          ))

          }

        </div>

        </section>

      </Layout>
      
      
    </>
  )
}

export async function getStaticProps(){

  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ])

  const [{data:guitarras}, {data: posts}, {data: curso}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ])

  return{
    props: {
      guitarras,
      posts, 
      curso
    }
  }
}
