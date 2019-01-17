export class Account {
    brokerSessionToken:String;
        accountNumber:String;
        brokerAccountId:String;
        userAccountId:String;
    constructor(brokerSessionToken:String,
        accountNumber:String,
        brokerAccountId:String,
        userAccountId:String){
            this.brokerSessionToken = brokerSessionToken;
            this.accountNumber = accountNumber;
            this.brokerAccountId = brokerAccountId;
            this.userAccountId = userAccountId;

        }

    
}