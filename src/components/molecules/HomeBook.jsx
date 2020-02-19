import React from "react";
import bookSample from "../../resources/images/mainPage/book_sample.png";
import dotRed from "../../resources/images/mainPage/dot_red.png";
import dotYellow from "../../resources/images/mainPage/dot_yellow.png";
import dotGreen from "../../resources/images/mainPage/dot_green.png";
import circleRed from "../../resources/images/mainPage/circle_red.png";
import circleGreen from "../../resources/images/mainPage/circle_green.png";
import circleYellow from "../../resources/images/mainPage/circle_yellow.png";
const HomeBook = props => {
	const { color, blockTitle, bookTitle } = props;
	let dotUrl, circleUrl;
	switch (color) {
		case "red":
			circleUrl = circleRed;
			dotUrl = dotRed;
			break;
		case "yellow":
			circleUrl = circleYellow;
			dotUrl = dotYellow;
			break;
		case "green":
		default:
			circleUrl = circleGreen;
			dotUrl = dotGreen;
			break;
	}
	return (
		<div className="Best_div">
			<h3>
				{blockTitle.split("\n").map(line => {
					return (
						<>
							{line}
							<br />
						</>
					);
				})}
			</h3>
			<div>
				<div className="Best_div-info">
					<img className="Best_img-book" src={bookSample} />
					<span className="Best_div-info-title">{bookTitle}</span>
				</div>
				<div className={`Best_book-bg ${color}`}>
					<img src={circleUrl} className="Best_book-bg-circle" />
					<img src={dotUrl} className="Best_book-bg-dot" />
				</div>
			</div>
		</div>
	);
};

export default HomeBook;
