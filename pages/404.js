import Layout from "@/components/layout";
import Link from "next/link";
function Pagina404(props) {
    return (
        <Layout title="Página no encontrada">
            <main>
                <h2>404</h2>
                <p className="error">Página no encontrada</p>
                <Link href="/">Volver al home</Link>
            </main>
           
        </Layout>
    );
}

export default Pagina404;