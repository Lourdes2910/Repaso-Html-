const saludar = () => {
    console.log("hello world!")
}

const getsalute = (name, segundoname, apellido) => {
    return "hola " + name +" " segundoname + " " + apellido
}

console.log(getSalute('barbara', 'de lourdes', 'lagos'))

    //saludar()
    //console.log(getSalute('sol'))
   // console.log(getSalute('barbara'))
    //console.log("Hola")


    const esPar = (number) => {
        if(number % 2 == 0){
            return true
        }else {
            return false 
        }
    }
        console.log(esPar(2))

        const numbers = [1,2,5,6,9]
         
        for(let i = 0; 1 < numbers. length; i++){
            if(esPar(numbers[i])){
            console.log ("El numero", numbers [])
