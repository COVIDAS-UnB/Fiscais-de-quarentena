import React, { Component } from "react";

class ResetPassword extends Component {

    roteSignUp = (e) => {
        this.props.history.push({
            pathname: '/sign-up',
        });
    }

    render() {
        return (
            <div>
              xxxxxxxxxxx
            </div>
        );
    }
}

export default ResetPassword;