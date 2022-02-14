import React,{Component} from 'react'
import {Logout} from '@mui/icons-material'
import {withRouter} from 'react-router-dom'


class NavHeader extends Component{

    logoutHandler = () => {
        localStorage.setItem("type","");
        localStorage.setItem("userId","");
        this.props.history.push('/');
    }

    render(){
        return(
            <>
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container'>
                    <a className='navbar-brand'>
                        <p>PolicyWala.com</p>
                    </a>
                    <div className='d-flex'>
                            <Logout className='logout-icon' onClick={this.logoutHandler}/>
                    </div>
                </div>
            </nav>
            </>
        );
    }
}
export default withRouter(NavHeader) ;