const promise = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Data Loaded");
    }, 2000);

});

promise.then((result) => {
    console.log(result);
});



const promise = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Data Loaded");
    }, 2000);

});

async function loadData() {

    const result = await promise;

    console.log(result);
}

loadData();