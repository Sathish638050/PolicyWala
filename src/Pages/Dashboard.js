import React,{Component} from 'react'
import NavHeader from '../Components/NavHeader';
import SideNav from '../Components/SideNav';
import './Style.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Profile from './Profile';
import Register from './Register';
import EditUser from './EditUser';


class Dashboard extends Component{

    render(){   
        return(
            <>
                
                    <NavHeader/>
                    <SideNav/>
                    <div className='content-box'>
                        <Switch>
                            <Route exact path='/profile'><Profile/></Route>
                            <Route exact path='/edit-user'><EditUser/></Route>
                        </Switch>
                    </div>
                
            </>
        );
    }
}
export default Dashboard;