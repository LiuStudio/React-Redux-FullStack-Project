import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderMixin],
	
	render: function(){
		return <div class="winner">
		Winner is {this.props.winner}!
		</div>;
	}
});