import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
//import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import ReactDOM from "react-dom";
//import GoogleLogin from "react-google-login";
//import FacebookLogin from "react-facebook-login";
import Logintbyfacebook from "./LoginApp/LoginbyFace";
import Dashboard from "./LoginApp/DashBoard";
import LoginPage from "./AppForm/LoginPage";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Router>
            <div className="container">
              <Route exact path="/" component={Logintbyfacebook} />
              <Route path="/Dashboard" component={Dashboard} />
              <Route path="/ExternalLoginCallBack" component={LoginPage} />
            </div>
          </Router>
        </header>
        <MessengerCustomerChat
          pageId="103046775543295"
          appId="2014939388666153"
        />
      </div>
    </>
  );
}

export default App;

// function App() {
//   const responseFacebook = (response) => {
//     console.log(response);
//   };

//   const responseGoogle = (response) => {
//     console.log(response);
//   };

//   return (
//     <div className="App">
//       <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

//       <FacebookLogin
//         appId="639360217231205" //APP ID NOT CREATED YET
//         fields="name,email,picture"
//         callback={responseFacebook}
//       />
//       <br />
//       <br />

//       <GoogleLogin
//         clientId="1091161395922-d52i27k59c6bptbotqlec8tbqeqp12sf.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
//         buttonText="LOGIN WITH GOOGLE"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//       />
//     </div>
//   );
// }

// export default App;
