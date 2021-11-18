import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import { Redirect } from "react-dom";

export class Logintbyfacebook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  signup(res, type) {
    let postData;
    if (type === "facebook" && res.email) {
      postData = {
        name: res.name,
        ProviderName: type,
        email: res.email,
        provider_id: res.Id,
        token: res.accessToken,
        Image: res.picture.data.url,
      };
    }
    if (type === "google" && res.email) {
      postData = {
        name: res.name,
        ProviderName: type,
        email: res.email,
        provider_id: res.Id,
        token: res.access_token,
        Image: res.picture.data.url,
      };
    }
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
    const responseFacebook = (response) => {
      console.log(response);
      var res = response.profileObj;
      console.log(res);
      debugger;
      this.signup(response);
    };
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-12 btn btn-info">
            Login With Facebook Using ReactJS
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
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logintbyfacebook;
