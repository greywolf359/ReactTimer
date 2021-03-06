import React from 'react';
import {Link, IndexLink} from 'react-router';

/*
var Nav = React.createClass({
	render: function(){
		return(
			<div>
			<h1>navbar</h1>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
			<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
			</div>
		);
	}
})

*/                                                                                                                                    
var Nav = React.createClass({
	render: function(){
		return(
		<div className = "top-bar">
				<div className = "top-bar-left">
					<ul className = "menu">
					<li className = "menu-text">React Timer App</li>
						<li><IndexLink to="/" activeClassName="active-link" >Timer</IndexLink></li>
						<li><Link to="/countdown" activeClassName="active-link">CountDown</Link></li>
					</ul>	
				</div>
				<div className = "top-bar-right">
					<ul className = "menu">
						<li className = "menu-text">Created by<a href = "#">Me</a></li>
					</ul>
				</div>
		</div>
	);
	}
	
})

module.exports = Nav;

