import {User, customer, supportTiket} from "../model/Models";
import { users, customers, supportTikets } from "../model/ModelsArrays";

export function newID(){

        return Date.now().toString(40) + "-" + Math.random().toString(40).substr(2);

}

export function signUp(req:{input_userName,
    input_password,
    input_firstName,
    input_lastName,
    input_customerLinkID}, res){
try {
    const newUser: User = {userId: newID(),
        userName:req.input_userName,
        password:req.input_password,
        firstName:req.input_firstName,
        lastName:req.input_lastName,
        userType:"customer",
        customerLinkID:req.input_customerLinkID} 
        users.push(newUser);
        res.send(newUser.userId); // send the new user id
} catch (error) {
    res.send({ error: error.message });
}

}

export function login(req:{username:string, password:string}, res){
try {
    const loginUser = users.find(user => user.userName === req.username && user.password === req.password );
    console.log(`user login successful : ${loginUser.userId}`)
    res.send(loginUser);
} catch (error) {
    console.log("2")
    res.send({ error: error.message });
}
}

export function newSupportTicket(req:{input_customerLinkID,
    input_userLinkId,
    input_title,
    input_details},res){
        try {
        const newTicket = {
            supportTiketID : newID(),
            customerLinkID:req.input_customerLinkID,
            userLinkId:req.input_userLinkId,
            title:req.input_title,
            details:req.input_details,
            dateOpen:null, // need to add from form
            dateEnd:null, // on close of Ticket
            tiketStatusClose:false,
        };
        supportTikets.push(newTicket);
        res.send(newTicket.supportTiketID);
        } catch (error) {
        res.send({ error: error.message });    
        }
}

export function getSupportTicketsByUser(req:{userID}, res){

    try {
        const filter_supportTikets = supportTikets.find(newSupportTicket => newSupportTicket.userLinkId === req.userID);
        res.send(filter_supportTikets)
    } catch (error) {
        res.send({ error: error.message });   
    }

}


export function updateSupportTicket(req:{supportTikets}, res){


}


export function closeSupportTicket(req:{supportTikets}, res){


}









