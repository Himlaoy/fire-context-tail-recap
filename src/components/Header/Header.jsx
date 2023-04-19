import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

   const handleLogOut=()=>{
        logOut()
        .then(res=> { })
        .catch(error=>console.error(error))
   }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link to="/" className='btn btn-ghost normal-case text-xl'>Home</Link>
                <Link to="/order" className='btn btn-ghost normal-case text-xl'>Order</Link>
                <Link to="/login" className='btn btn-ghost normal-case text-xl'>Login</Link>
                <Link to="/register" className='btn btn-ghost normal-case text-xl'>Register</Link>
                {
                    user ? <>{user.email} <span onClick={handleLogOut}><Link className='ml-2'>SignOut</Link></span></> : <><Link to="/login">Login</Link></>
                }
            </div>

        </div>
    );
};

export default Header;