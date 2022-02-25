import React from 'react'
import Button from './Button'
class loginForm extends React.Component {

    userName = React.createRef();

    handleSubmit = (e)=>{
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input 
                            type='text'
                            ref= {this.userName}
                            placeholder= '@companymail.com'
                        />
                    </div>
                    <div className="col-3">
                        <Button 
                            type = 'submit'
                            title = 'Sign in'
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default loginForm