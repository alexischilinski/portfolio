import React, { Component } from 'react'

class Contact extends Component{

    state = {
        name: "",
        email: "",
        message: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <>
                <h1 className="section-title">Contact</h1>
                <form className="form" action="https://send.pageclip.co/HvqiA8VD2z3QiWsVoprDyXY98ua4JRHv" class="pageclip-form" method="post">
                    <input className="name-input" onChange={this.handleChange} type="text" name="name" value={this.state.name} placeholder="your name" />
                    <input className="email-input" onChange={this.handleChange} type="email" name="email" value={this.state.email} placeholder="email@email.com"/>
                    <textarea className="message-input" onChange={this.handleChange} type="text" name="message" value={this.state.message} placeholder="send a message"/>

                    <button type="submit" class="pageclip-form__submit">
                        <span>Send</span>
                    </button>
                </form>
            </>
        )
    }
}

export default Contact;