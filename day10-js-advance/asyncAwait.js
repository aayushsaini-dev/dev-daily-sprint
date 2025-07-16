function fetchUserData(){
    return new Promise((reslove, reject) => {
        setTimeout(() =>{
            reslove({name: "chaicode",url:"https://chaicode.com"})
        },3000)
    })
}
 async function getUserData(){
    try{
        console.log('Fetching user data...');
        const userData = await fetchUserData()
        console.log("user data", userData);
        
    } catch (error){
        console.log("Error fetching data", error);
        
    }
 }
 getUserData();