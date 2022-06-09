// import { router } from "../routes/routes"

async function test(){
        
    const test = "test1";
    // @ts-ignore
    const { data } = await axios.get('/api/test', {test});
    console.log(data);

}

async function handleLogin(){

    const username = "suser1"
    const password = "pass1"
    // @ts-ignore
    const { data } = await axios.get('/api/login', {username, password});
    console.log(data);

}
        // {username:"user test1", password:"password"}