
import {Page, NavController, AlertController, Loading} from 'ionic-angular';
import {FirebaseAuth} from 'angularfire2';
import {HomePage} from '../home/home'  ;

@Page({
    templateUrl: 'build/pages/login/login.html'
})
export class LoginPage{
public loading: Loading;

    constructor(public nav: NavController, public auth: FirebaseAuth, 
                private Alert: AlertController){}

    public registerUser(credentials){
      this.loading.present();
      
      this.auth.createUser(credentials).then((authData) =>{
      let prompt = this.Alert.create({
        title: 'Success',
        subTitle: 'Your new Account was created!',
        buttons: ['OK']
      });
    prompt.present();

        });
    }
      

    public login(credentials){
        this.loading.present('Logging in, please Wait...');
         

    //showError(text){
    //  setTimeout(() => {
    //    this.loading.dismiss();
    //  });

//TODO: Error Handling
    }
}