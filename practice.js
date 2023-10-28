// 
// const p1=new Promise((resolve, reject) => {
//     const data=fetch("https://api.github.com/users/mojombo")
//     // const result= data.json()
//     resolve(data.json())
// })
// const p2=new Promise((resolve, reject) => {
//     const data=fetch("https://api.github.com/users/mojombo")
//     // const result=data.json()
//     // resolve(result)
//     resolve(data.json())
// })
// const p3=new Promise((resolve, reject) => {
//     const data=fetch("https://api.github.com/users/mojombo")
//     // const result=data.json()
//     // resolve(result)
//     resolve(data.json())
// })
// Promise.all([p1,p2,p3]).then((res)=>console.log(res))
// async function handlePromise(){
//     let a1="https://api.github.com/users/mojombo"
//     let a2="https://api.github.com/users/mojombo"
//     let a3="https://api.github.com/users/mojombo"
//     const cha = new Promise_All((resolve, reject) =>{
        
//     })
//     const data= await fetch("https://api.github.com/users/mojombo")
//     console.log("hello")
//     console.log(data)
//     const result= await data.json()
//     console.log(result)
// }
// handlePromise()
// const p1 = new Promise( async(resolve, reject) => {
//     let response = await fetch("https://api.github.com/users/mojombo")
//       console.log(response)
//         // if (!response.ok) {
//         //   throw new Error(`HTTP error! Status: ${response.status}`);
//         // }
//         let data = await response.json();
//         console.log(data)
      
//       if(data) resolve(data)
//     //   .catch((error) => reject(error));
//   });
  
//   const p2 = new Promise(async(resolve, reject) => {
//     let response = await fetch("https://api.github.com/users/mojombo")
//       console.log(response)
//         // if (!response.ok) {
//         //   throw new Error(`HTTP error! Status: ${response.status}`);
//         // }
//         let data = await response.json();
//         console.log(data)
      
//       if(data) resolve(data)
//     //   .catch((error) => reject(error));
//   });
  
//   const p3 = new Promise(async(resolve, reject) => {
//     let response = await fetch("https://api.github.com/users/mojombo")
//     console.log(response)
//       // if (!response.ok) {
//       //   throw new Error(`HTTP error! Status: ${response.status}`);
//       // }
//       let data = await response.json();
//       console.log(data)
    
//     if(data) resolve(data)
//   //   .catch((error) => reject(error));
//   });
  
//   Promise.all([p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((error) => console.error(error));
  