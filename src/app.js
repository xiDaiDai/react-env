import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.less';
export default class Root extends React.Component {
	render() {
		return (
	 		<div id="root" onClick={()=>{window.location.href="./home.html"}}>Hello React</div>
		);
	};
}

ReactDOM.render(<Root/>, document.getElementById('app'));
