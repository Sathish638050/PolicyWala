import axios from 'axios';
import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import image from '../images/userimg.png';
import './Style.css'

class Profile extends Component{
    constructor(){
        super();
        this.state = {
            data : {}
        }
    }

    componentDidMount = () => {
        let i = localStorage.getItem("userId");
        console.log(i);
        axios.get('http://localhost:18084/api/User/UserbyId?id='+i).then(res=>{
            this.setState({
                data : res.data
            })
        })
    }

    render(){
        const {data} = this.state;
        return(
            <>
            <div className='card'>
                <div className='card-body'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-3'>
                                    <img src={image} width="150px"/>
                                </div>
                                <div className='col-9'>
                                    <div className='row'>
                                        <h1>{data.name}</h1>
                                    </div>
                                    <div className='row'>
                                        <h3>{data.mobnum}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br/>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-6'>
                                    <h5>Email Id : {data.emailid}</h5>
                                </div>
                                <div className='col-6'>
                                    <h5>Date of Birth : {data.dob}</h5>
                                </div>
                            </div><br/>
                            <div className='row'>
                                <div className='col-6'>
                                    <h5>Address : {data.address}</h5>
                                </div>
                                <div className='col-6'>
                                    <h5>Annual Income : {data.annualincome}</h5>
                                </div>
                            </div>
                            <div className='row button-container'>
                                <div className='edit-button'>
                                    <Link to='/edit-user' className='btn btn-primary'>Edit</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default Profile;