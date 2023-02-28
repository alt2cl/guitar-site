import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";

function Producto({guitarra}) {
    const {nombre, descripcion, imagen, precio} = guitarra[0]?.attributes
    return (
        <Layout title={nombre} description={`Guitarra ${nombre}`}>
            <main>
                <div className='grid grid-cols-2 gap-6'>
                    <div>
                    <Image src={imagen.data.attributes.url} alt={`Imagen ${nombre}`} width={600} height={400} />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='mb-5 font-semibold'>{nombre}</h3>
                        <p className='mb-5'>{descripcion}</p>
                        <span>${precio}</span>
                        
                    </div>
                </div>
            </main>
           
        </Layout>
    );
}

export default Producto;

export async function getStaticProps({params:{id}}){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${id}&populate=imagen`)
    const {data: guitarra} = await respuesta.json()

    return{
        props:{
            guitarra
        }
    }
}

export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const {data} = await respuesta.json()

    const paths = data.map(guitarra => ({
        params: { id: String(guitarra.attributes.url) }
    }))


    return {paths,fallback: false}
}





//con serverSideProps asi:
// export async function getServerSideProps({query}){
//     console.log('la:::-->',query.id)
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${query.id}&populate=imagen`)
//     const {data: guitarra} = await respuesta.json()

//     return{
//         props:{
//             guitarra
//         }
//     }
// }