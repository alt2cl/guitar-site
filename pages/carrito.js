import {useEffect, useState} from 'react'
import Layout from "@/components/layout";
import Image from "next/image";
function Carrito({carrito, actualizarCantidad, eliminarProducto}) {
    const [total, setTotal] = useState(0)

    //acumuador usamos reduce, como dependencia de carrito, reduce itera sobre cada "producto" y va sumando al total de "total"
    useEffect(()=> {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad* producto.precio), 0)
        setTotal(calculoTotal)

    },[carrito])
    return (
        <Layout title={"Carrito de compas"} >
            <div>
            <h1 className="heading">Carrito</h1>
            <div>
                <div className="grid grid-cols-12 gap-6">
                    <main className="col-span-9">
                        <div>
                            <h2>Artículos</h2>
                        </div>
                        <div>
                            {carrito.length === 0 ? 'Carrito vacio' : (
                                carrito.map(producto=>(
                                    <div key={producto.id} className='flex'>
                                        <div>
                                            <Image src={producto.imagen} width={120} height={200} alt={`Imagen de ${producto.nombre}`} />
                                        </div>
                                        <div className='flex-1'>
                                            <p>{producto.nombre}</p>
                                            <p>Precio: ${producto.precio}</p>
                                            <p>Cantidad de productos: {producto.cantidad}</p>
                                            <div className="cantidad-select">
                                                
                                                    <label htmlFor="">Cantidad</label>
                                                    <select onChange={ e => actualizarCantidad({
                                                        id:producto.id,
                                                        cantidad: e.target.value,
                                                    })} value={producto.cantidad}>
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
                                            <p>Subtotal: $ {producto.cantidad * producto.precio}</p>
                                        </div>
                                        <button className='eliminar-btn col-span-1' type='button' onClick={()=>eliminarProducto(producto.id)}>
                                            x
                                        </button>
                                        
                                        
                                    </div>

                                ))
                            )}
                        </div>
                    </main>
                    <aside className="col-span-3">
                        <h3>Resumend el pedido</h3>
                        <p>Total a Pagar: ${total}</p>

                    </aside>
                </div>
            </div>
            </div>
            
        </Layout>
        
    );
}

export default Carrito;