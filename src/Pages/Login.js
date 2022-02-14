import React,{Component} from 'react'
import {TextField,Divider,FormControlLabel,FormHelperText} from '@mui/material'
import {Person,CheckBoxOutlineBlank} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import './Style.css'
import ForgotPass from './ForgotPass'
import { Modal,Button } from 'react-bootstrap'


class Login extends Component{
    constructor(){
        super();
        this.state = {
            email : '',
            password : '',
            erroremail : false,
            errorpass : false,
            showModal : false,
        }
    }

    ModalOpenHandler = ()=> {
        this.setState({
            showModal : true
        });
    }
    ModalCloseHandler = ()=> {
        this.setState({
            showModal : false
        });
    }

    changeHandler = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name] : value.toString()
        })
    }

    submitHandler = () => {
        const {email,password} = this.state;
        let pass = password.toString();
        if((email !== '')&&(password !== '')){
            let data = {
                emailId : email,
                password : pass
            }
            console.log(data)
            const user = localStorage.getItem("type");
            if(user === "Customer"){
                axios.post('http://localhost:18084/api/User/CustomerLogin',data).then(res => {
                    if(res.data.userid !== 0){
                        localStorage.setItem("userId",res.data.userid)
                        console.log(res)
                        this.props.history.push('/dashboard');
                    }else{
                        alert("Invalid Email and Password")
                    }
                    console.log(res);
                })
            }
        }else if(email === ''){
            if(password === ''){
                this.setState({
                    erroremail : true,
                    errorpass : true
                })
            }else{
                this.setState({
                    erroremail : true
                })
            }
        }else{
            this.setState({
                errorpass : true
            })
        }
        
        
    }

    render(){
        let {erroremail,errorpass,showModal} = this.state;
        return(
            <>
            <div className="icon">
                <div className="icon_class">
                    <Person fontSize="large"/>
                </div>
                <div className="text">Login</div>
                <div className="row m-2">
                    <TextField id="email" name="email" className="p-2" type ="text" variant="outlined" label="Enter Email" fullwidth onChange={this.changeHandler}/>
                    {
                        erroremail ? <><div className='form-help-text'>Enter your Email</div><br/></>  : ''
                    }
                    <TextField id="password" name="password" className="p-2"  type="password" variant="outlined" label="Enter Password" fullwidth onChange={this.changeHandler}/><br/><br/>
                    {
                        errorpass ? <><div className='form-help-text'>Enter your Password</div><br/></>  : ''
                    }
                    <button className='btn btn-success login-btn' variant="outlined" color="primary" fullwidth onClick={this.submitHandler}>Login</button>
                </div>
                <Divider variant="middle"/>
                    <p className="text-center">
                        <Link to="register" className="text-black-50">
                            <h5>Signup</h5>
                        </Link>
                    </p>
                    <p className="text-center">
                        <a  className="text-black-50" onClick={this.ModalOpenHandler} >
                            <h5>Forgot Password...</h5>
                        </a>
                    </p>
            </div>
            <Modal show={showModal} onHide={this.ModalCloseHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ForgotPass/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={this.ModalCloseHandler}>Close</Button>
                    <Button variant='primary' onClick={this.ModalCloseHandler}>Save</Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}
export default withRouter(Login);