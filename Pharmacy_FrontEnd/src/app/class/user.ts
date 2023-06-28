class login_user{
    private static instance_variable : any;
    public login_email = String;
    public login_pharmacyId = String;
    public login_password=  Number;
  static login_email: StringConstructor;
  static login_pharmacyId: StringConstructor;
    private Constructor(){
        //no details
    }
    public static GetInstance(){
        if (login_user.instance_variable == null){
            this.instance_variable = new login_user();
        }
        return this.instance_variable
    }

}

export {login_user}
