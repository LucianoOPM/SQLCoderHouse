let dosParametros = (num, cantidad)=>{
    let inicio = num
    let incremento = 0
        for(let i = 0; i <= 5; i+=1){
            incremento += 1
            inicio = inicio + cantidad
            console.log(`Incremento ${incremento}: ${inicio}`)
        }
}
let funcion = dosParametros(1000, 100)