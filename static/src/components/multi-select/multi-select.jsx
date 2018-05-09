import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

const OPTIONS = [
	{ label: '副教授', value: '副教授' },
	{ label: '博士', value: '博士' },
	{ label: '讲师', value: '讲师' },
	{ label: '实验师', value: '实验师' }
];


var MultiSelectField = createClass({
	displayName: 'MultiSelectField',
	propTypes: {
		label: PropTypes.string,
	},
	getInitialState () {
		return {
			value: [],
		};
	},
	handleSelectChange (value) {
		this.setState({ value });
		let selectedOptions=value.map(item=>{
			return item.value
		})
		this.props.handleSelect(selectedOptions);
	},

	render () {
		const {  value } = this.state;
		const options = OPTIONS;
		return (
			<div>
				<Select
					multi
					onChange={this.handleSelectChange}
					options={options}
					placeholder="选择职称"
					value={value}
				/>
			</div>
		);
	}
});
export default MultiSelectField;
