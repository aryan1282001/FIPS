import React from 'react'
import {AiOutlineShopping} from 'react-icons/ai'


import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="box1">FIPS</div>
        <div className="box2">
            <ul>
                <li><Link to="/" style={{ textDecoration: 'none', color:'black' }}>Home</Link></li>
                <li><Link to="/store" style={{ textDecoration: 'none' , color:'black'}}>Store</Link></li>
                <li><Link to="/customer-care" style={{ textDecoration: 'none', color:'black' }}>Customer care</Link></li>
                <li><Link to="/contacts" style={{ textDecoration: 'none' , color:'black' , color:'black'}}>Contacts</Link></li>
                {/* <li><Link to="/contacts" style={{ textDecoration: 'none' }}><FiShoppingCart /> Shopping bag</Link></li> */}

                <li><Link to="/ShoppingBag" style={{ textDecoration: 'none', color:'black' }} className="shopping"><AiOutlineShopping size={24} />Shopping bag</Link></li>
            </ul>



        </div>

    </div>
  )
}

export default Navbar
