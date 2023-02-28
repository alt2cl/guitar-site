import {useRouter} from "next/router";
import Link from 'next/link'

function Footer(props) {

    const router = useRouter()
    return (
        <footer className="bg-slate-800">
            <div className="container flex flex-col items-center py-24 text-white">
            <nav className="m-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 gap-10 text-white" >
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
                
            
            </nav>
            <p>Todos los derechos reservados {new Date().getFullYear()}</p>

            </div>
            
        </footer>
        
    );
}

export default Footer;