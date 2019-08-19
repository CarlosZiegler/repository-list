const myPromisse = ()=> new Promise((resolve, reject) => {
    setTimeout(()=> {resolve('ok')},2000);
});

async function executPromise() {
    console.log(await myPromisse());
    console.log(await myPromisse());
    console.log(await myPromisse());
    console.log(await myPromisse());
}
executPromise();
//or

const executPromiseArrowFunction = async ()=>{
    console.log(await myPromisse());
    console.log(await myPromisse());
    console.log(await myPromisse());
    console.log(await myPromisse());

};

executPromiseArrowFunction();