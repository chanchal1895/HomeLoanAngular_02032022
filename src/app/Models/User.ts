export class User {
    userResId:number=0
    firstname: string = "";
    lastname: string = "";
    gender: string = "";
    email: string = "";
    mobileNum: number = 0;
    country: string = "";
    state: string = "";
    loanAmt: number = 0;
    loanTenure: number = 0;
    password: string="";
    formName: string="";
    loanTypeId:number =0;

    constructor(userResId:number ,firstname: string, lastname: string, gender: string, email: string, mobileNum: number, currentLoc: string, loanAmt: number
                ,country: string,state: string, loanTenure:number, password:string, formName:string, loanTypeId:number) {
        this.firstname = firstname;
        this.userResId=userResId;
        this.lastname = lastname;
        this.gender = gender;
        this.email = email;
        this.mobileNum = mobileNum;
        this.loanAmt = loanAmt;
        this.country = country;
        this.state = state;
        this.loanTenure =  loanTenure;
        this.password = password;
        this.formName = formName;
        this.loanTypeId = loanTypeId;
    }

}