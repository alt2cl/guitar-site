import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "@/utils/helpers";
function Post({post, shortPost}) {
    const {titulo, imagen , contenido, url, publishedAt} = post

    return (
        <article>
            <div>
                <h3 className="title">{titulo}</h3>
                <p>{publishedAt}</p>
                <Image src={imagen.data.attributes.formats.medium.url} alt={`imagen de articulo ${titulo}`} width={800} height={400}></Image>
            </div>
            <div>
            <p className={shortPost ? 'lineclamp-4': ''}>{contenido}</p>
            <Link href={`/blog/${url}`}>Leer post...</Link>
            </div>
        </article>
    );
}

export default Post;