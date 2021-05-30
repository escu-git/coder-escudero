//*Function to resolve array and return objects filtered by params:
export const getItems =((arrayToResolve, stateToSet, state,setTime)=>{
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(arrayToResolve)
        },setTime);
    }).then(res=>{   
        stateToSet(res[10]) //idk how to choose between the "[0]" or "res" param.
        console.log(state)
    }).catch(err=>{
        console.log(err)
    });
});


export const getProducts =((arrayToResolve, setProducts, setTime, categoryId, products)=>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(arrayToResolve)
        },setTime);
    })
    categoryId ? promise.then(res => setProducts(res.filter(i => i.category === categoryId))) : promise.then(res => setProducts(res));
    console.log(products)
});

