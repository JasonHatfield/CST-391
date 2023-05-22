import React from "react";

class LoginPage extends React.Component
{
    state = {
        isLoggedIn: false
    }

    handleLogin = () =>
    {
        this.setState( {isLoggedIn: true}, () => {
            this.props.onClick(this.state.isLoggedIn);
        } );
    }

    render()
    {
        return (
            <div>
                <button onClick={this.handleLogin}>Login Here</button>
            </div>
        )
    }
}

export default LoginPage;