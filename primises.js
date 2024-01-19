// function saveDb(data,success,failure){
//     let internet_speed=Math.floor(Math.random()*10)+1;

//     if(internet_speed>4){
//         success();
//     }else{
//         failure();
//     }
// }

// saveDb("apna college",
// ()=>{
//     console.log("success: data was saved");
//     saveDb("akshay dange",
//     ()=>{
//         console.log("data saved 2");
//         saveDb("shradha",
//         ()=>{
//             console.log("success 3");
//         },()=>{
//             console.log("not success 3");
//         })
//     },
//     ()=>{
//         console.log("data not saved 2");
//     })
// },
// ()=>{
//     console.log("failure:data was not saved");
// });



// function savebb(data){
//     return new Promise((resolve,reject)=>{
//         let internet=Math.floor(Math.random()*10)+1;
//         if(internet>4){
//             resolve("success: data was saved");
//         }else{
//             reject("data was not save");
//         }
//     });
// };

// savebb("apni kaksya")
// .then((result)=>{
//     console.log("promises was  resolve");
//     console.log(result);
//     savebb("helo hh").then((result)=>{
//         console.log("data2 was save");
//         console.log(result);
//         savebb("nama").then((result)=>{
//             console.log("data3 was save");
//             console.log(result);
//         })
//     });
    
// })
// .catch((error)=>{
//     console.log("promises was rejected");
//     console.log(error);
    
// });


// async function great(){

//     return "hello";
// }
// great()
// .then((result)=>{
//     console.log("promises was selected");
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })

// function getNum(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let num=Math.floor(Math.random()*10)+1;
//         if(num<3){
//             reject();
//         }
        
//         console.log(num);
//         resolve();
       
//     },1000);
//    });
// }

// async function demo(){
//     try{
//    await getNum();
//    await getNum();
//    await getNum();
//     }
//     catch(err){
//          console.log(err);
//     }
// }

// api 
// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
//     console.log(response);
//     response.json().then((data)=>{
//         console.log(data.fact);
//         return fetch(url);
//     }).then((res)=>{
//         return res.json();
//     }).then((data2)=>{
//         console.log("data2",data2);
//     })
// })
// .catch((err)=>{
//     console.log("error->",err);
// });

// let url="https://catfact.ninja/fact";
// async function getfact(){
//     try{
//     let res=fetch(url);
//     let data= await res.json();
//     console.log(data.fact);
//     }catch(e){
//         console.log("err");
//     }
//


let url2="https://dog.ceo/api/breeds/image/random";
let btn1=document.querySelector("#dog");
btn1.addEventListener("click",async()=>{
        
        let link=await getImage();
console.log(link);
let img= document.querySelector("#img1");

img.setAttribute("src",link);
    });
    
    
    
    async function getImage(){
        try{
            let res=await axios.get(url2);
          return res.data.message;
        }catch(e){
           return "no fact found";
           
        }
    }
    ///...................................................................................


let btn= document.querySelector("button");
btn.addEventListener("click",async()=>{
    let fact=await getfact();
    console.log(fact);
    let p=document.querySelector("#result");
    p.innerHTML=fact;
});

let url="https://catfact.ninja/fact";


async function getfact(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }catch(e){
       return "no fact found";
    }
}



// college name find out api

