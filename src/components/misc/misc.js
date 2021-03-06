/**
 * Created by peterk on 7/11/17.
 */

import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
    <div>
        <h1>Not Found</h1>
    </div>
);

const Navbar = () => (
    <ul>
        <li style={{display:'inline'}}><Link to="/">| Home |</Link></li>
        <li style={{display:'inline'}}><Link to="/about">| About |</Link></li>
    </ul>
);

export {
  NotFound,
  Navbar
};
