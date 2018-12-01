import React, { Component  } from 'react';

class Nav extends Component {
    render() {
        return (
                  <header>
                    {/* <h1 id="headerLogo"><Link to="">Ashmita Sarma</Link></h1> */}
                    <ul id="headerButtons">
                      <a href=""><li className="navButton">About</li></a>
                      <a href=""><li className="navButton">Experience</li></a>
                      <a href=""><li className="navButton">Projects</li></a>
                      <a href=""><li className="navButton" id="blog">Blog</li></a>
                    </ul>
                  </header>

        )

    }

}
export default Nav;

