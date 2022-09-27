
    const calcular = () => {
        //"1+100"
    const formulainput = document.getElementById('formula').value;
    const arreglonumeros = formulainput.split('+')
    console.log(arreglonumeros)
    let suma = 0;
    for (let index = 0; index < arreglonumeros.length;index++){
        suma= Number (arreglonumeros[index]) +suma;
    }
    
console.log(suma)
const barbara=document.getElementById('calcular')
barbara.innerHTML="calcular" + suma
    }
