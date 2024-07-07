// const promise = new Promise((resolve,reject)=>{
//     let myPromise = true
//     if(myPromise){
//         resolve("success")
//     }else{
//         reject("not success")
//     }
// })

// .then((resolve)=>{
//     console.log(resolve,"then")
// })
// .catch((reject)=>{
//     console.log(reject)
// })







fetch("https://api.escuelajs.co/api/v1/products/")
.then((response)=>{
    response.json()
})

.then((result)=>{
    console.log("result",result)
    append(parent)

})
.catch((error)=>{
    console.log("error",error)
})


let append=()=>{
    console.log("hello")
   parent.innerHTML += ` <div class="card" style="width: 18rem;">
            <img src="${parent.images[0]}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${parent.title}</h5>
              <p class="card-text">${parent.description}</p>
              <a href="#" class="btn btn-primary">Go details</a>
            </div>
          </div>`
}