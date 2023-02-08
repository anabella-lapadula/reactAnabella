let productos = [
    { id: 1 , nombre: 'Jirafa', precio: 1520, img: '/public/imagenes/jirafa.jpeg'},
    { id: 2 , nombre: 'perro', precio: 1520, img: '/public/imagenes/jirafa.jpeg'},
    { id: 3 , nombre: 'gato', precio: 1520, img: '/public/imagenes/jirafa.jpeg'},
    { id: 4 , nombre: 'remera', precio: 1520, img: '/public/imagenes/jirafa.jpeg'},
    { id: 5 , nombre: 'remera', precio: 1520, img: '/public/imagenes/jirafa.jpeg'},
    { id: 6 , nombre: 'remera', precio: 520, img: '/public/imagenes/jirafa.jpeg'}
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
