import { useState} from "react"
import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";

function Producto({guitarra, agregarCarrito}) {
    const [cantidad, setCantidad] = useState(0)
    const {nombre, descripcion, imagen, precio} = guitarra[0]?.attributes

    const handleSubmit = e => {
        e.preventDefault()

        if(cantidad < 1){

            alert('Cantidad invalida')
            return

        }

        //construir un objeto
        const guitarraSeleccionada = {
            id:guitarra[0].id,
            imagen: imagen.data.attributes.formats.medium.url,
            nombre,
            precio,
            cantidad
        }

        //pasando la informacion al carrito

        agregarCarrito(guitarraSeleccionada)


    }

    return (
        <Layout title={nombre} description={`Guitarra ${nombre}`}>
            <main>
                <div className='grid grid-cols-7 gap-6'>
                    <div className="flex justify-center col-span-3">
                    <Image src={imagen.data.attributes.url} alt={`Imagen ${nombre}`} width={200} height={450} />
                    </div>
                    <div className='flex flex-col col-span-4'>
                        <h3 className='mb-5 font-semibold'>{nombre}</h3>
                        <p className='mb-5'>{descripcion}</p>
                        <span>${precio}</span>
                        <form onSubmit={handleSubmit} className="formulario border-gray-100 p-5 mt-10 bg-slate-300">
                            <div className="grid grid-cols-2 gap-5 mb-5">
                                <label htmlFor="cantidad">Cantidad</label>
                                <select id="cantidad" onChange={e=> setCantidad(+e.target.value)}>
                                    
                                    <option value="0">--Seleccione--</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <input type="submit" value="Agregar al carrito" className="block w-full p-3 text-center bg-black text-white" />
                           
                        </form>
                        
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