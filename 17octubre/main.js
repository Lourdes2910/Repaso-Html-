 const callback = (element,index,a)=>{
    console.log(element,index,a)
    return element *2
 }

 //const mayorA5=(element)=>{
    //if(element>=5){
     //   return element
   // }else{
   //     return 0
 //}
 //}
 //const arr=[1,5,6,8].map(mayorA5)

 const mayorA5 =(element)=>{
        return element >5
    }
const arr =[1,50,4,8].filter(mayorA5)
console.log(arr) 
 




 
 


 //const arr=[1,5,6,8].map ((element)=>{
//console.log(element)
//return element *2
 //})
 //console.log(arr)