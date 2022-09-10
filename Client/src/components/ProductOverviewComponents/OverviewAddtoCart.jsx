import React from 'react';
import Select from 'react-select';
import axios from 'axios';

class OverviewAddtoCart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sku: 0,
			quantity: 0,
			selectSize: false,
			displayAddToCart: true
		}
		this.handleSizeSelect = this.handleSizeSelect.bind(this);
		this.handleQuantitySelect = this.handleQuantitySelect.bind(this);
		this.handleOpenSizeSelect = this.handleOpenSizeSelect.bind(this);
		this.handleAddToCart = this.handleAddToCart.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}
	selectSizeRef = React.createRef();

	handleSizeSelect(event) {
		this.setState({
			sku: event.value,
			quantity: 0,
			displayAddToCart: false
		})
	}

	handleQuantitySelect(event) {
		this.setState({
			quantity: event.value,
			displayAddToCart: true
		})
	}

	handleOpenSizeSelect() {
		this.setState({
			selectSize: true,
			displayAddToCart: false
		})
		if (this.selectRef) {
			this.selectRef.current.focus();
		}
	}

	handleAddToCart() {
		if (this.state.sku === 0) {
			this.handleOpenSizeSelect();
			return;
		}

		let options = {
			method: 'POST',
			url: '/overview/cart',
			data: {
				'sku_id': this.state.sku,
				'quantity': this.state.quantity
			}
		};

		axios(options)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			})


	}


	handleAdd() {

		let img_url = this.props.product.styles[0].photos;
		if (this.props.product.styles.find((style) => style['default?'] === true)) {
			img_url = (this.props.product.styles.find((style) => style['default?'] === true).photos[0].thumbnail_url);
		}

		let options = {
			method: 'post',
			url: '/outfit',
			data: {
				id: this.props.product.id,
				category: this.props.product.category,
				name: this.props.product.name,
				original_price: this.props.product.default_price,
				sale_price: null,
				img_url: img_url,
				overallRating: this.props.product.starRating,
				reviewCount: this.props.product.reviewCount
			}
		};
		axios(options)
			.then(() => {
				this.props.setRenderOutfit(true);
			})
			.catch(err => {
				console.log(err);
			});
	}


	render() {
		let quantity = 0;
		if (this.state.sku !== 0) {
			quantity = (this.props.skus[this.state.sku].quantity);
		}
		let quantitySelect = []
		for (var i = 1; (i < quantity + 1) && (i <= 15); i++) {
			quantitySelect.push({ value: i, label: i });
		}

		var sizeOptions = []
		Object.keys(this.props.skus).map((key) => {
			sizeOptions.push(
				{
					value: key,
					label: this.props.skus[key].size
				});
		});


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
						ref={this.selectSizeRef} />
					<Select
						className='Overview-quantitySelect'
						options={quantitySelect}
						onChange={this.handleQuantitySelect} />
				</div>
				<div>
					{this.state.displayAddToCart
						? <button
							className='Overview-addToCartButton'
							onClick={this.handleAddToCart}>Add To Cart</button>
						: null
					}

					<button
						className='Overview-addToOutfit'
						onClick={this.handleAdd}>&#x2b50;</button>
				</div>
			</div>
		);
	}
}


export default OverviewAddtoCart;