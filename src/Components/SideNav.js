import React,{Component} from 'react'
import './Style.css'
import {Link} from 'react-router-dom'

class SideNav extends Component{
    constructor(){
        super();
        this.state = {
            user:'',
            current:''
        }
    }

    componentDidMount=()=>{
        
        var Currentuser = localStorage.getItem("type");
        let currentpage = window.location.href.split('/');
        console.log(currentpage[3])
        this.setState({
            user : Currentuser,
            current : currentpage[3]
        })
    }

    ClickHandler=(e)=>{
        this.setState({
            current : e.target.name
        })
    }

    render(){
        const {user} = this.state;
        return(
            <>
            <div className='side-nav'>
                    <ul className='nav-container'>
                        {
                            user == "Customer"||user == "Agent"|| user == "Admin" ?
                            <li className='nav-item-box '>
                                <Link className={this.state.current == "dashboard" ? "nav-item-link active" : "nav-item-link"} to="/dashboard"><a name="dashboard" onClick={this.ClickHandler}>Dashboard</a></Link>
                            </li> : ''
                        }
                        {
                            user == "Customer"||user == "Agent" ?
                            <li className='nav-item-box'>
                                <Link className={this.state.current == "profile" ? "nav-item-link active" : "nav-item-link"} to="/profile"><a name="profile" onClick={this.ClickHandler} >Profile</a></Link>
                            </li> : ''
                        }
                        {
                            user == "Customer" ?
                            <li className='nav-item-box'>
                                <Link className={this.state.current == "policies" ? "nav-item-link active" : "nav-item-link"} to="/policies"><a name="policies" onClick={this.ClickHandler}>Policy</a></Link>
                            </li> : ''
                        }
                       {
                           user == "Customer" ? 
                            <li className='nav-item-box'>
                                <Link className={this.state.current == "my-policies" ? "nav-item-link active" : "nav-item-link"} to="/my-policies"><a name="my-policies" onClick={this.ClickHandler}>Your Policies</a></Link>
                            </li> : ''
                       }
                       {
                           user == "Agent" ? 
                           <li className='nav-item-box'>
                                <Link className={this.state.current == "commission-report" ? "nav-item-link active" : "nav-item-link"} to="/commission-report"><a name="commission-report" onClick={this.ClickHandler}>Commission Report</a></Link>
                            </li> : ''
                       }
                       {
                           user == "Admin" ? 
                           <li className='nav-item-box'>
                                <Link className={this.state.current == "policy-record" ? "nav-item-link active" : "nav-item-link"} to="/policy-record"><a name="policy-record" onClick={this.ClickHandler}>Policy Records</a></Link>
                            </li> : ''
                       }
                       {
                           user == "Admin" ? 
                            <li className='nav-item-box'>
                                <Link className={this.state.current == "agent-record" ? "nav-item-link active" : "nav-item-link"} to="/agent-record"><a name="agent-record" onClick={this.ClickHandler}>Agent Record</a></Link>
                            </li> : ''
                       }
                        
                    </ul>
            </div>
            </>
        );
    }
}
export default SideNav;