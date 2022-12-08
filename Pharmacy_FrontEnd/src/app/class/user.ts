class login_user{
    private static instance_variable : any;
    public login_email = String;
    public login_password=  Number;
  static login_email: StringConstructor;

    private Constructor(){
        //no details
    }
    public static GetInstance(){
        if (login_user.instance_variable == null){
            this.instance_variable = new login_user();
        }
        return this.instance_variable
    }
    // public setEmail(email:string){
    //     this.login_email = email;
    // }
    // public getEmail(){
    //     return this.login_email;
    // }

}

export {login_user}