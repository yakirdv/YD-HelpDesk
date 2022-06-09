function handleSignUP(){

    console.log("handleSignUP");

}




function handleLogin(){
    // ev.preventDefault()
    console.log("test");
        // @ts-ignore
        const { data } = await axios.get('/login', "12313");
        console.log(data.loginUser);

}



        // {username:"user test1", password:"password"}