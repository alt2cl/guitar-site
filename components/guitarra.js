import Image from 'next/image'
import Link from 'next/link';
function Guitarra({guitarra}) {
     const {imagen, nombre, precio, descripcion, url} = guitarra
    return (
        <div className='grid grid-cols-2 gap-6'>
            <div>
            <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen ${nombre}`} width={600} height={400} />
            </div>
            <div className='flex flex-col'>
                <h3 className='mb-5 font-semibold'>{nombre}</h3>
                <p className='lineclamp-4 mb-5'>{descripcion}</p>
                <span>${precio}</span>
                <Link href={`/guitarras/${url}`} className="rounded-md bg-red-700 text-center block">
                    Ver Detalles
                </Link>
            </div>
        </div>
    );
}

export default Guitarra;