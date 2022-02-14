import React,{Component} from 'react'
import {TextField,Button,Divider,FormControlLabel,Checkbox,FormHelperText} from '@mui/material'
import { CheckBoxOutlineBlank,PersonAdd, Tune} from '@mui/icons-material'
import {Link,withRouter} from 'react-router-dom'
import axios  from 'axios'
import validator from 'validator'


class Register extends Component{
    constructor(){
        super();
        this.state = {
            email : '',
            password : '',
            name : '',
            phone : '',
            DOB : '',
            gender : '',
            address : '',
            Annual : '',
            errorname : false,
            errormobnum : false,
            erroremail : false,
            errorpass : false,
            errordob : false,
            errorgender : false,
            erroraddress : false,
            errorannual : false,
            errormobmsg : '',
            erroremailmsg : '',
            errorpassmsg : '',
            errornamemsg : '',
            errorDobmsg : '',
            errorgendermsg : '',
            erroraddressmsg : '',
            errorannualmsg  :''
        }
    }

    changeHandler= (e)=>{
        var name = e.target.name;
        var val = e.target.value;
        this.setState({
            [name] : val
        })
    }

    chackvalid = () =>{
        let o = 0;
        let error = 0
        const {name,email,password,Annual,address,gender,DOB,phone} = this.state;
        if(name === ''){
            error++;
            this.setState({
                errorname : true,
                errornamemsg : 'Enter your Name...'
            });
        }else{
            this.setState({
                errorname : false,
            })
        }
        if(email === ''){
            error++;
            this.setState({
                erroremail : true,
                erroremailmsg : "Enter your Email..."
            });
        }else{
            if(!(validator.isEmail(email))){
                error++;
                this.setState({
                    erroremail : true,
                    erroremailmsg : "Email is Not Valid..."
                })
            }else{
                this.setState({
                    erroremail : false
                })
            }
        }
        if(phone === ''){
            error++;
            this.setState({
                errormobnum : true,
                errormobmsg : "Enter your Mobile Number..."
            });
        }else{
            console.log(phone.length)
            if(((phone.length+1 > 9))){
                this.setState({
                    errormobnum : false
                })
            }else{
                error++;
                this.setState({
                    errormobnum : true,
                    errormobmsg : "Mobile Number is Not Valid..."
                })
            }
        }
        if(password == ''){
            error++;
            this.setState({
                errorpass : true,
                errorpassmsg : "Enter your Password..."
            });
        }else{
            if(password.length < 6){
                error++;
                this.setState({
                    errorpass : true,
                    errorpassmsg : "Password is atleast 6 character..."
                });
            }else{
                this.setState({
                    errorpass : false,
                    
                });
            }
        }
        if(DOB === ''){
            error++;
            this.setState({
                errordob : true,
                errorDobmsg : "Enter your Date of Birth..."
            });
        }else{
            this.setState({
                errordob : false,
                
            });
        }
        if(gender === ''){
            error++;
            this.setState({
                errorgender : true,
                errorgendermsg : "Enter your gender..."
            });
        }else{
            this.setState({
                errorgender : false,
            });
        }
        if(address === ''){
            error++;
            this.setState({
                erroraddress : true,
                erroraddressmsg : "Enter your Address..."
            });
        }else{
            this.setState({
                erroraddress : false,
            });
        }
        if(address === ''){
            error++;
            this.setState({
                errorannual : true,
                errorannualmsg : "Enter your Annual income"
            })
        }else{
            this.setState({
                errorannual : false,
                
            })
        }
        if(error === 0){    
            return true
        }else{
            return false
        }
    }

    submitHandler=()=>{
        console.log("Hi")
        const {name,email,password,Annual,address,gender,DOB,phone} = this.state;
        let status = this.chackvalid();
        console.log(status)
        if(status){
            const data ={
                name : name,
                mobnum : phone,
                emailid : email,
                password : password,
                dob : DOB,
                gender : gender,
                address : address,
                annualincome : Annual
            }
            console.log(data)
            axios.post('http://localhost:18084/api/User/RegisterCustomer',data).then(res=>{
                if(res){
                    this.props.history.push('/login')
                }
            })
        }
    }
    
    
    render(){
        const {errorname,errormobnum,erroraddress,errorannual,
            errordob,erroremail,errorpass,errorgender} = this.state;
        return(
            <>
            <div className='card' >
                <div className='card-body register-card'>
                <div className='icon'>
                <div className='icon_class'>
                    <PersonAdd fontSize='large'/>
                </div>
                <div className='text'>Sign Up</div>
            </div>
            <div className='login-container'>
                <div className='login-form'>
                    <div className='row m-2'>
                        <TextField id="name" type="text" variant="outlined" label="Enter Name" name="name" fullwidth onChange={this.changeHandler}/>
                        {
                            errorname ? <div className='form-help-text'>{this.state.errornamemsg}</div> : ''
                        }
                    </div>
                    <div className="row m-2">
                        <TextField required id="phone" className="p-2" name='phone' onChange={this.changeHandler} type ="text" variant="outlined" label="Enter Contact Number" fullwidth onChange={this.changeHandler}/>
                        {
                            errormobnum ? <div className='form-help-text'>{this.state.errormobmsg}</div> : ''
                        }
                        <TextField required id="email" className="p-2" name="email" onChange={this.changeHandler} type ="text" variant="outlined" label="Enter Email" fullwidth onChange={this.changeHandler}/>
                        {
                            erroremail ? <div className='form-help-text'>{this.state.erroremailmsg}</div> : ''
                        }
                        <TextField required id="password" className="p-2" name="password" onChange={this.changeHandler} type ="password" variant="outlined" label="Enter Password" fullwidth onChange={this.changeHandler}/>
                        {
                            errorpass ? <div className='form-help-text'>{this.state.errorpassmsg}</div> : ''
                        }                        
                        <TextField required id="dob" className="p-2" name='DOB' onChange={this.changeHandler} type ="date" variant="outlined" label="Enter Date of Birth" fullwidth onChange={this.changeHandler}/>
                        {
                            errordob ? <div className='form-help-text'>{this.state.errorDobmsg}</div> : ''
                        }                        
                        <TextField required id="gender" className="p-2" name="gender" onChange={this.changeHandler} type ="text" variant="outlined" label="Enter Gender (Male/Female)" fullwidth onChange={this.changeHandler} />
                        {
                            errorgender ? <div className='form-help-text'>{this.state.errorgendermsg}</div> : ''
                        }                        
                        <TextField required id="address" className="p-2" name='address' onChange={this.changeHandler} type ="text" variant="outlined" label="Enter Address" fullwidth onChange={this.changeHandler} />
                        {
                            erroraddress ? <><div className='form-help-text'>{this.state.erroraddressmsg}</div><br/></> : ''
                        }                        
                        <TextField required id="income" className="p-2" type ="text" name='Annual' onChange={this.changeHandler} variant="outlined" label="Enter Annual Income" fullwidth onChange={this.changeHandler} />
                        {
                            errorannual ? <><div className='form-help-text'>{this.state.errorannualmsg}</div><br/></> : ''   
                        }
                        <button className='btn btn-success login-btn'  variant="outlined" color="primary" fullwidth onClick={this.submitHandler}>Create Account</button>
                    </div>
                    <Divider variant="middle"/>
                    <p className="text-center">
                        <Link to="login" className="text-black-50">
                            <h5>Already have an account?</h5>
                        </Link>
                    </p>
                </div>
            </div>
                </div>
            </div>
            </>
        );
    }
}
export default withRouter(Register);