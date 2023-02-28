import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";

function Post({post}) {
    const {titulo, contenido, imagen, publishedAt} = post[0].attributes
    return (
        <Layout>
            <main className="container">
            <article>
                <div>
                    <h3 className="title">{titulo}</h3>
                    <p>{publishedAt}</p>
                    <Image src={imagen.data.attributes.formats.medium.url} alt={`imagen de articulo ${titulo}`} width={800} height={400}></Image>
                </div>
                <div>
                <p>{contenido}</p>
                </div>
            </article>

            </main>
            
        </Layout>
    );
}

export default Post;

export async function getServerSideProps({query: {id}}){


    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${id}&populate=imagen`)
    const { data: post} = await respuesta.json()

    return {
        props: {post}
    }
}