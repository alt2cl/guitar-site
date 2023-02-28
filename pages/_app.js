import '@/styles/globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
     <style jsx global>{`
        html {
          font-family: ${outfit.style.fontFamily};
        }
      `}</style>
       <div className={outfit.className}>
        <Component {...pageProps} />
      </div>
    
    </>
   
  )
}
