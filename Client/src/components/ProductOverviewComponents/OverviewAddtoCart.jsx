import React from 'react';
import Select from 'react-select';

class OverviewAddtoCart extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				sku: 0,
				quantity: 0,
				selectSize: false
			}
			this.handleSizeSelect = this.handleSizeSelect.bind(this);
			this.handleQuantitySelect = this.handleQuantitySelect.bind(this);
			this.handleOpenSizeSelect = this.handleOpenSizeSelect.bind(this);
			this.handleAddToCart = this.handleAddToCart.bind(this);
			this.handleAddToOutfit = this.handleAddToOutfit.bind(this);
		}
		selectRef = React.createRef();

		handleSizeSelect(event) {
			this.setState({
				sku: event.value})
		}

		handleQuantitySelect(event) {
			this.setState({
				quantity: event.value})
		}

		handleOpenSizeSelect() {
			this.setState({
				selectSize: true
			})
			if(this.selectRef) {
				this.selectRef.current.focus();
			}
		}

		handleAddToCart() {
			if(this.state.sku===0) {
				this.handleOpenSizeSelect();
			}

		}

		handleAddToOutfit() {
			console.log('add to outfit');
		}

		render() {
			let quantity = 0;
			if (this.state.sku !== 0) {
				quantity = (this.props.skus[this.state.sku].quantity);
			}
			// console.log(quantity);
			let quantitySelect = []
			for(var i = 1; (i < quantity+1) && (i <= 15); i++) {
				quantitySelect.push({value:i, label:i});
			}

			var sizeOptions = []
			Object.keys(this.props.skus).map( (key) => {
				sizeOptions.push(
					{value: key,
					label: this.props.skus[key].size});
			});

			let AddToCartButton = <button className='addToCartButton'>ADD TO BAG</button>

			return (
				<div className='Overview-addToCartTools'>
					<div className='Overview-sizeQuantitySelect'>
						{this.state.selectSize ? <div>Please Select Size</div> : null}
						<Select
							className='Overview-sizeSelect'
							openMenuOnFocus={true}
							options={sizeOptions}
							placeholder='SELECT SIZE'
							onChange={this.handleSizeSelect}
							ref={this.selectRef}/>
						<Select
							className='Overview-quantitySelect'
							options={quantitySelect}
							onChange={this.handleQuantitySelect}/>
					</div>
					<div>
						<button
							className='Overview-addToCartButton'
							onClick={this.handleAddToCart}>Add To Cart</button>
						<button
							className='Overview-addToOutfit'
							onClick={this.handleAddToOutfit}>&#x2b50;</button>
					</div>
				</div>
			);
		}
	}


export default OverviewAddtoCart;