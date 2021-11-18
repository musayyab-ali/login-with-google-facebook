import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { Redirect } from "react-dom";

export class LoginbyFace extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  signup(res, type) {
    debugger;
    let postData;
    if (type === "facebook" && res) {
      postData = {
        name: res.name,
        ProviderName: type,
        email: res.email,
        token: res.accessToken,
        Image: res.picture.data.url,
      };
    }
    debugger;
    if (type === "google" && res.profileObj) {
      postData = {
        name: res.profileObj.name,
        ProviderName: type,
        email: res.profileObj.email,
        token: res.profileObj.googleId,
        Image: res.profileObj.imageUrl,
      };
    }
    // const responseFacebook = {
    //   Name: res.name,
    //   email: res.email,
    //   token: res.accessToken,
    //   Image: res.picture.data.url,
    //   ProviderName: res.ProviderName,
    //   ProviderId: "Facebook",
    // };
    console.log(postData);
    debugger;
    axios
      .post("https://localhost:44303/api/UserLogin/SocialmediaData", postData)
      .then((result) => {
        let responseJson = result;
        console.log(result.data.name);
        alert("data");
        sessionStorage.setItem("userData", JSON.stringify(result));
        this.props.history.push("/Dashboard");
      });
  }
  render() {
    if (this.state.redirect || sessionStorage.getItem("userData")) {
      return <Redirect to={"/Dashboard"} />;
    }

    const responseFacebook = (response) => {
      console.log("facebook console");
      console.log(response);
      this.signup(response, "facebook");
    };

    const responseGoogle = (response) => {
      console.log("google console");
      console.log(response);
      this.signup(response, "google");
    };

    const responseSuccess = (response) => {
      var profile = response.getBasicProfile();
      console.log(profile);
      sessionStorage.setItem("profile", profile);
      this.props.history.push("/");
    };

    const responseFailed = (response) => {
      console.log("Sign-in Failed");
      console.log(response);
    };
    // const responseFacebook = (response) => {
    //   console.log(response);
    //   var res = response.profileObj;
    //   console.log(res);
    //   debugger;
    //   this.signup(response);
    //};
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-12">
            Login With Facebook And Google Using ReactJS
          </div>
        </div>
        <div className="row">
          <div style={{ paddingTop: "20px" }} className="col-sm-12">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <FacebookLogin
                buttonStyle={{ padding: "6px" }}
                appId="639360217231205"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
              />
            </div>
            <br />
            <div className="col-sm-4">
              <GoogleLogin
                clientId="1091161395922-d52i27k59c6bptbotqlec8tbqeqp12sf.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseFailed}
                buttonStyle={{ padding: "6px" }}
                // appId="639360217231205"
                // autoLoad={false}
                fields="name,email,imageUrl,googleId"
                callback={responseGoogle}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginbyFace;
