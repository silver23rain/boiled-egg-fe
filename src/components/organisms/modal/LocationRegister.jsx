import React, { useState } from "react";
import Axios from "axios";
import "./LocationRegister.scss";
import { AddressBlock } from "../../molecules";

const LocationRegister = props => {
	const { setVisible } = props;
	const [searchKeyword, setSearchKeyword] = useState("");
	const [searchResult, setsearchResult] = useState([]);
	const [address, setAddress] = useState("");
	const modalClose = () => {
		setVisible(false);
	};
	const handleClickSearch = () => {
		if (searchKeyword.length === 0) {
			return;
		}
		Axios.get("http://www.juso.go.kr/addrlink/addrLinkApi.do", {
			params: {
				confmKey: "devU01TX0FVVEgyMDIwMDIyMTE4MTc1MDEwOTQ4OTA=",
				resultType: "json",
				countPerPage: "3",
				currentPage: "1",
				keyword: searchKeyword
			},
			crossDomain: true,
			dataType: "json",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			}
		})
			.then(res => {
				console.log(res);
				setsearchResult(
					res.data.results.juso.map(j => (
						<AddressBlock
							setAddress={setAddress}
							roadAddr={j.roadAddr}
							jibunAddr={j.jibunAddr}
						/>
					))
				);
			})
			.catch(e => {
				console.log(e);
			});
	};
	const onkeypressEnter = e => {
		if (e.key === "Enter") {
			handleClickSearch();
		}
	};
	return (
		<>
			<div className="Modal-overlay" onClick={modalClose} />
			<div className="Modal">
				<div className="content">
					<p className="title">나와 가장 가까운 책방을 찾으려면?</p>
					<div className="Modal_div-input">
						<input
							type="text"
							placeholder="내 위치를 검색하세요"
							onChange={e => {
								setSearchKeyword(e.target.value);
							}}
							onKeyPress={onkeypressEnter}
						></input>
						<button onClick={handleClickSearch}></button>
					</div>
					{searchResult.length > 0 ? (
						<div className="serch-result">{searchResult}</div>
					) : (
						""
					)}
				</div>
				<div className="button-wrap">
					<button>내 위치 등록하기 </button>
				</div>
			</div>
		</>
	);
};

export default LocationRegister;
