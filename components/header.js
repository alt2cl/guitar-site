import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';

function Header(props) {

    const router = useRouter()
    return (
        <>
        <div className=" bg-gray-50" style={{backgroundImage:'linear-gradient(to right, rgb(0 0 0 / .8), rgb(0 0 0 / .7)), url(/img/header.jpg)'}} >
            <div className='container mx-auto lg:py-24 lg:flex items-center'>
                <Link href="/" className="m-auto lg:ml-0">
                    <Image src={'/img/logo.svg'} width={300} height={40} alt="Logo" />  
                </Link>
            
            <nav className="ml-auto flex max-w-7xl items-right justify-between p-6 lg:px-8 gap-10 text-white" >
                <Link href="/" className={router.pathname ==='/' ? 'bg-orange-300' : ''}>
                   
                    Inicio
                   
                </Link>
                <Link href="/nosotros" className={router.pathname ==='/nosotros' ? 'bg-orange-300' : ''}>
                    
                    Nosotros
                   
                </Link>
                <Link href="/blog" className={router.pathname ==='/blog' ? 'bg-orange-300' : ''}>
                   
                    Blog
                   
                </Link>
                <Link href="/tienda" className={router.pathname ==='/tienda' ? 'bg-orange-300' : ''}>
                    
                    Tienda
                   
                </Link>
                <Link href={"/carrito"}>
                <Image src={"/img/carrito.png"} width={30} height={25} alt={"Imagen Carrito"}/>
                </Link>
                
            
            </nav>

            </div>
            
            
        </div>
        </>
        
    );
}

export default Header;