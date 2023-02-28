import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';

function Layout({children, title="", description=""}) {
    return (

        <>
        <Head>
            <title>{`Guitar - ${title}`}</title>
            <meta name="description" content={description}></meta>
        </Head>
        <Header/>
        <main>
        {children}
        </main>
            
        <Footer />
        </>
    );
}

export default Layout;