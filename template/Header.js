
import { Menu, Dropdown, } from 'antd';
import Link from 'next/link';


const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link href="http://www.alipay.com/"> Profile</Link>
        </Menu.Item>
        <Menu.Item key="1">
            <Link href="http://www.taobao.com/">2nd menu item</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);


const Header = () => {
    let user_login = null
    if (process.browser) {
        user_login = JSON.parse(localStorage.getItem('user_login'))
    }
    console.log("user_login", user_login);
    return (
        // <div style={{ background: 'rgb(0, 21, 41)', marginLeft: '-24px', marginRight: '-24px', height: '72px' }}>
        //     <div>
        //         <UserOutlined style={{ fontSize: 22, color: '#fff' }} />
        //     </div>
        // </div>
        //     <div classNameName="app-header navbar">
        //     <div classNameName="app-header-sub" >
        //       <ul classNameName="ml-auto navbar-nav" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingRight: '50px' }}>
        //         <div >
        //           <li classNameName="nav-item dropdown">
        //             <a classNameName="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">
        //               {user_login !== null ? user_login.user_name + '  ' + user_login.user_lastname : null}
        //               <i classNameName="fa fa-user"></i>
        //             </a>
        //             <div classNameName="dropdown-menu">
        //               <button type="button" classNameName="dropdown-item" onClick={e => this.onLogout(e)}><i classNameName="fa fa-lock"></i>  Logout</button>
        //             </div>
        //           </li>
        //         </div>
        //       </ul>
        //     </div>
        //   </div>

        // <div className="container">
        //     <div className="row">
        //         <div className="col-md pl-4 user-dropdown text-center">
        //             <div className="dropdown btn-group">
        //                 <a className="navbar-brand dropdown-toggle" href="#" id="bd-versions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user"></i></a>
        //                 <ul className="dropdown-menu">
        //                     <li>
        //                         <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('frm-logout').submit();">
        //                             Logout
        //                           </a>


        //                     </li>
        //                     <li><a href="{{ route('user.profile') }}">My Profile</a></li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div className="col-md">
        //             <span><a className="navbar-brand" href="#"><i className="fas fa-shopping-cart"></i></a></span>
        //         </div>
        //         <div className="col-md">
        //             <span><a className="navbar-brand" href="#"><i className="fas fa-heart"></i></a></span>
        //         </div>
        //     </div>
        // </div>

        // <div class="container">
        //     <div class="row">
        //         <div class="col-md pl-4 user-dropdown text-center">
        //             <div class="dropdown btn-group">
        //                 <a class="navbar-brand dropdown-toggle" href="#" id="bd-versions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user"></i></a>
        //                 <ul class="dropdown-menu">
        //                     <li>
        //                         <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('frm-logout').submit();">
        //                             Logout
        //                     </a>

        //                     </li>
        //                     <li><a href="{{ route('user.profile') }}">My Profile</a></li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div class="col-md">
        //             <span><a class="navbar-brand" href="#"><i class="fas fa-shopping-cart"></i></a></span>
        //         </div>
        //         <div class="col-md">
        //             <span><a class="navbar-brand" href="#"><i class="fas fa-heart"></i></a></span>
        //         </div>
        //     </div>
        // </div>

        <div class="btn-group">
            <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Action
  </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
            </div>
        </div>

        // <div style={{ background: 'rgb(0, 21, 41)', marginLeft: '-24px', marginRight: '-24px', height: '72px' }}>
        //     <Dropdown overlay={menu} trigger={['click']} >
        //         <div classNameName="ant-dropdown-link" style={{ color: '#fff', height: '72px' }} onClick={e => e.preventDefault()}>
        //             {user_login.username}
        //         </div>
        //     </Dropdown>
        // </div>
    )
}

export default Header

