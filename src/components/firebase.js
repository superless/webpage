import firebase from 'firebase/app';
import msg from 'firebase/messaging';



class Firebase {
  static instance;


  fbase = () => {
    if (this.instance) {
      return this.instance;
    }

    firebase.initializeApp({ messagingSenderId: "3817913959" });

    this.instance = this;
    return this.instance;

  };

  askForPermission = async () => {
    const messaging = firebase.messaging();

    messaging.getToken().then(async (currentToken) => {
      if (!currentToken) {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
        // Show permission UI.
        const messaging = firebase.messaging();

        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('user token: ', token);
        this.tokensubscribe(token);


      }
    }).catch(function (err) {
      console.log('An error occurred while retrieving token. ', err);
     
    });
  };

 

  tokensubscribe = async (token) => {
    try {

      await fetch(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/all`, {
        headers: {
          'Authorization': 'key=AAAAAOOQvmc:APA91bHz-INTh4x2kXqYRXQtrQNv2fcxlE0PIq3M3WGtM6e_rA0o1FowNXKJHg_vjEZjRz1zR8DH6YIC6mOCcztTNFX2qKAPkPX-trh_2c-RRoYf23Jom4mTHGlc7c7csTmBBTDHBLFE',
          'Content-Type': 'application/json'
        },
        method: "POST"
      }).then(res => console.log(res))
        .catch(error => console.error('Error:', error))
      return token;
    } catch (e) {
      console.log(e);
    }
  };



}

export default Firebase;