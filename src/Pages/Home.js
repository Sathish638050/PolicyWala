import { Button, Stack } from '@mui/material';
import React,{Component} from 'react'
import {Link, Redirect} from 'react-router-dom'

class Home extends Component{

    moveHandler=(e)=>{
        const name = e.target.name
        localStorage.setItem("type",name)
    }
    
    render(){
        return(
            <>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <Stack spacing={2} direction="row">
                                            <Link name="Admin" onClick={this.moveHandler} to='/dashboard'>Admin</Link>
                                            <Link name="Agent" onClick={this.moveHandler} to='/dashboard'>Agent</Link>
                                            <Link name="Customer" onClick={this.moveHandler} to='/login'>Customer</Link>
                                        </Stack>
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
export default Home