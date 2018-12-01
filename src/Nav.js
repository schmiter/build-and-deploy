import React, { Component  } from 'react';
import { Link  } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
                  <header>
                    {/* <h1 id="headerLogo"><Link to="">Ashmita Sarma</Link></h1> */}
                    <ul id="headerButtons">
                      <Link to=""><li className="navButton">About</li></Link>
                      <Link to=""><li className="navButton">Experience</li></Link>
                      <Link to=""><li className="navButton">Projects</li></Link>
                      <Link to=""><li className="navButton" id="blog">Blog</li></Link>
                    </ul>
                  </header>

        )

    }

}
export default Nav;

