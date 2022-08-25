import React from 'react';
import OverviewSizeSelect from './OverviewSizeSelect.jsx';
import OverviewQuantitySelect from './OverviewQuantitySelect.jsx';

class OverviewAddtoCart extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				sku: 0,
				quantity: 0
			}
			this.handleSizeSelect = this.handleSizeSelect.bind(this);
			this.handleQuantitySelect = this.handleQuantitySelect.bind(this);
		}

		handleSizeSelect(sku) {
			this.setState({
				sku: sku})
		}

		handleQuantitySelect(quantity) {
			this.setState({
				quantity: quantity})
		}


		render() {
			let quantity = 0;
			if (this.props.skus[this.state.sku] !== undefined) {
				quantity = (this.props.skus[this.state.sku].quantity);
				console.log(quantity);
			}

			return (
				<div>
					<React.StrictMode>
						<OverviewSizeSelect
							skus={this.props.skus}
							handleSizeSelect={this.handleSizeSelect}/>
						<OverviewQuantitySelect
							quantity={quantity}
							handleQuantitySelect={this.handleQuantitySelect}/>
					</React.StrictMode>
				</div>
			);
		}
	}


export default OverviewAddtoCart;