import { KeyboardArrowUp, PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import './widget.scss'
const Widget = ({type}) => {
    let data;
    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:<PersonOutlined className='icon'/>
            }
            break;
        case "order":
            data={
                title:"ORDERS",
                isMoney:false,
                link:"View all orders",
                icon:<ShoppingCartOutlined className='icon'/>
            }
            break;
        case "user":
            data={
                title:"EARNING",
                isMoney:true,
                link:"See all users",
                icon:<PersonOutlined className='icon'/>
            }
            break;
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:<PersonOutlined className='icon'/>
            }
            break;
        default:
                break;
    }
  return (
    <div className='widget'>
      <div className="left">
        <spaan className="title">
            USERS
        </spaan>
        <span className="counter">21312</span>
        <span className="link">See all user</span>
      </div>
      <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUp/>
            20%
        </div>
        <PersonOutlined className='icon'/> 
      </div>
    </div>
  )
}

export default Widget
