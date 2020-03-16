import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name:'Home',
        to:'/',
        exact: true
    },
    {
        name:'Quan Ly San Pham',
        to:'/product-list',
        exact: true
    },
]

const MenuLink = ({label, to , activeOnlyWhenExact}) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
          var active = match ? 'active xxx' : ''
          return (
            <li className={`my-li ${active}`}>
              <Link to={to} className="" >{label} </Link>
            </li>
          )
        }} />
      )
}
class Menu extends Component {
    showMenu = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
               return(
                    <MenuLink key={index} to = {menu.to} label = {menu.name} activeOnlyWhenExact = {menu.exact} />
               ) 
            })
        }
        return result;
    }
    render() {
        return (
            <div>
                 <div className="navbar navbar-default">
                    <a className="navbar-brand" >Call API</a>
                    <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                    </ul>
                </div>
                
            </div>
          );
    }
 
}

export default Menu;
