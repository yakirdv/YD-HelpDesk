
//interface
export interface User{
    userId:string;
    userName:string;
    password:string;
    firstName:string;
    lastName:string;
    userType:string; // support or customer
    customerLinkID:string;
};

export interface customer{
    customerID:string;
    customerName:string;
};

export interface supportTiket{
    supportTiketID:string;
    customerLinkID:string;
    userLinkId:string;
    title:string;
    details:string;
    dateOpen:Date;
    dateEnd:Date;
    tiketStatusClose:boolean;
};

export default User;