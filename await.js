const getText = (path)=>{
    return new Promise((resolve, reject)=>{
      if(path===1){
          resolve(path)
      }
      else{
          reject(path)
      }
    })
}

const start = async() =>{
    const first = getText(1).then((path)=>console.log(path));
    console.log("Hello world")
}

start()

