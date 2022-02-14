import React,{Component} from 'react'
import {TextField,Button,Divider,FormControlLabel,FormHelperText} from '@mui/material'
import {Person,CheckBoxOutlineBlank} from '@mui/icons-material'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import './Style.css'
import axios from 'axios'


class EditUser extends Component{
    constructor(){
        super();
        this.state = {
            name : '',
            email : '',
            phone : '',
            DOB : '',
            annual : '',
            address : '',
            data : {}
        }
    }

    componentDidMount = () => {
        let userid = localStorage.getItem('userId')
        axios.get('http://localhost:18084/api/User/UserbyId?id='+userid).then(res=>{
            this.setState({
                name : res.data.name,
                email : res.data.emailid,
                phone : res.data.mobnum,
                DOB : res.data.dob,
                annual : res.data.annualincome,
                data : res.data,
                address : res.data.address
            })
        })
    }

    changeHandler = (e) => {
        let {name,value} = e.target
        this.setState({
            [name] : value
        })
    }

    submitHandler = () =>{

        let c = window.confirm("Do You Save Changes");
        if(c){
            const {name,email,phone,DOB,annual,address,data} = this.state;
        let editData = {
            userid : data.userid,
            name : name,
            mobnum : phone,
            emailid : email,
            password: data.password,
            dob : DOB,
            gender : data.gender,
            address : address,
            annualincome : annual
        }

        axios.put('http://localhost:18084/api/User/UpdateCustomer',editData).then(res => {
            if(res){
                this.props.history.push('/profile')
            }
        })
        }
    }
    
    render(){
        const {name,phone,email,annual,DOB,address} = this.state;
        return(
            <>
            <div className="icon">
                <div className="text">Update Datails</div>
                <div className="row m-2 edit-container">
                    <TextField id="name" name="name" className="p-2" type ="text" variant="outlined" label="Enter Name" fullwidth onChange={this.changeHandler} value={name}/>
                    
                    <TextField id="phone" name="Phone" className="p-2"  type="text" variant="outlined" label="Enter Mobile Number" fullwidth onChange={this.changeHandler} value={phone}/><br/><br/>

                    <TextField id="email" name="email" className="p-2"  type="text" variant="outlined" label="Enter Email" fullwidth onChange={this.changeHandler} value={email}/><br/><br/>

                    <TextField id="annual" name="annual" className="p-2"  type="text" variant="outlined" label="Enter Annual Income" fullwidth onChange={this.changeHandler} value={annual}/><br/><br/>

                    <TextField id="address" name="address" className="p-2"  type="text" variant="outlined" label="Enter Address" fullwidth onChange={this.changeHandler} value={address}/><br/><br/>
                    
                    <button className='btn btn-success login-btn' variant="outlined" color="primary" fullwidth onClick={this.submitHandler}>Save Changes</button>
                </div>
            </div>
            </>
        );
    }
}
export default withRouter(EditUser);