import React from "react";

const AddressBlock = props => {
	const { roadAddr, jibunAddr, setAddress } = props;
	const handleClick = e => {
		setAddress('')
	};
	return (
		<div className="AddressBlock">
			<div className="row">
				<p className="sub-title">도로명 주소</p>
				<p className="result bold">{roadAddr}</p>
			</div>
			<div className="row">
				<p className="sub-title">지번</p>
				<p className="result">{jibunAddr}</p>
			</div>
		</div>
	);
};

export default AddressBlock;
