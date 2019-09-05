fetch('https://api.github.com/users/michal-robert-adamczyk/repos')
.then(resp => resp.json())
.then(resp => {
    console.log(resp)
})
.catch(err=>{
    console.log(err);
})

console.log('test');