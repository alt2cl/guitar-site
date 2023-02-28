import Layout from '@/components/layout';
import Guitarra from '@/components/guitarra';


function Tienda({guitarras}) {
    console.log('guitarras:', guitarras)
    return (
        <Layout title='Tienda' description='Descripcion'>
            <h2 className='heading '>Tienda</h2>
            <main>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>
                    {guitarras?.map(guitarra => (
                        <Guitarra key={guitarra.id} guitarra={guitarra.attributes}/>
                    ))}
                </div>
                

            </main>

        </Layout>
    );
}

export default Tienda;

// export async function getStaticProps() {
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//     const {data: guitarras} = await respuesta.json()

//     return {
//         props: {
//             guitarras
//         }
//     }
// }

export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const {data: guitarras} = await respuesta.json()

    return {
        props: {
            guitarras
        }
    }
}