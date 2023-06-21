
console.log('a');
console.log('b');
new Promise((resolve,reject)=>
{
    setTimeout(()=> resolve('c'),1000)
}).then(data => 
    {
       console.log(data);
       new Promise((resolve,reject)=>
{
    setTimeout(()=> resolve('d'),1000)
}).then(data => 
    {
        console.log('data');
        console.log ('e')
    })

    })

    const data = await axios.get();
    function random()
    {
        return new Promise(());
    }
    random.then()