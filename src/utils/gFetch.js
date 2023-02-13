let productos = [
    { id: '1' ,categoria: 'animales', nombre: 'Jirafa', precio: 1520, img: '/public/imagenes/jirafa.jpeg'},
    { id: '2 ',categoria: 'animales', nombre: 'Oso Gris', precio: 1520, img: '/public/imagenes/oso.jpeg'},
    { id: '3' ,categoria: 'personajes', nombre: 'Oso Rojo', precio: 1520, img: '/public/imagenes/osorojo.jpg'},
    { id: '4 ',categoria: 'animales', nombre: 'Pato', precio: 1520, img: '/public/imagenes/patito.jpg'}
]

export const gFetch= () =>{
  return new Promise ((res , rej)=>{
    if (true){
      setTimeout(()=>{
      res( productos )
      }, 1500 )
    
    }
  })

} 
