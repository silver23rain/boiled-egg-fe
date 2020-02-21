import React from "react";
import dotRed from "../../resources/images/mainPage/dot_red.png";
import dotYellow from "../../resources/images/mainPage/dot_yellow.png";
import dotGreen from "../../resources/images/mainPage/dot_green.png";
import circleRed from "../../resources/images/mainPage/circle_red.png";
import circleGreen from "../../resources/images/mainPage/circle_green.png";
import circleYellow from "../../resources/images/mainPage/circle_yellow.png";
import bookMore from "../../resources/images/mainPage/book_more.png";
const HomeBook = props => {
	const { color, blockTitle, bookTitle, imgUrl } = props;
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
					<img className="Best_img-book" src={imgUrl} />
					<div className="Best_div-info-title">
						{bookTitle.split("\n").map(line => {
							return (
								<>
									{line}
									<br />
								</>
							);
						})}
					</div>
				</div>
				<div className="more">
					more<img src={bookMore} alt={bookMore}></img>
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
