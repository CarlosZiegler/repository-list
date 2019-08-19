const minhaPromisse = ()=> new Promise((resolve, reject) => {
    setTimeout(()=> {resolve('ok')},2000);
});

async function executaPromise() {
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
}
executaPromise();
//or

const executaPromiseArrowFunction = async ()=>{
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
};

executaPromiseArrowFunction();