import React from "react";
import Header from "../Common/header.jsx";

/*userinfo test*/
// const userInfo = JSON.parse(localStorage.getItem("userInfo"));
// const username = userInfo.username;
// const useremail = userInfo.useremail;
import tv from "../../resources/images/mainPage/tv.png";
import tvLight from "../../resources/images/mainPage/tv_light.png";
import logoSymbol from "../../resources/images/mainPage/logo_symbol.png";
import bookSample from "../../resources/images/mainPage/book_sample.png";
import dot from "../../resources/images/mainPage/dot_red.png";
import circle from "../../resources/images/mainPage/circle.svg";
import "./Home.scss";
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
const Home = () => {
    const preventDefaultForScrollKeys = e => {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    };

    const preventDefault = e => {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
    };

    const disableScroll = e => {
        const newLocal = document.querySelector(".Home");
        e.stopPropagation();
        newLocal.onwheel = preventDefault; // modern standard
        newLocal.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        newLocal.ontouchmove = preventDefault; // mobile
        document.onkeydown = preventDefaultForScrollKeys;
    };

    const handleScroll = e => {
        disableScroll(e);
        // -1:up 1:down
        const direction = e.deltaY > 0 ? 1 : -1;
        window.scrollBy(20 * direction, 0);
    };
    return (
        <main className="Home" onWheel={handleScroll}>
            <Header />
            <div className="Home_div-title">
                <h1>
                    나와 가장 <br />
                    가까운 <b>책방</b>
                </h1>
                <img className="" src={logoSymbol}></img>
                <div className="Home_div-search">"지금당장 읽고싶은 책"</div>
            </div>
            <div className="Tv">
                <img className="Tv_img-tv" src={tv}></img>
                <img className="Tv_img-tv-light" src={tvLight}></img>
            </div>
            <div className="Best">
                <div className="Best_div">
                    <h3>
                        가장 <br />
                        인기있는
                        <br />
                        도서
                    </h3>
                    <div>
                        <div className="Best_div-info">
                            <img className="Best_img-book" src={bookSample} />
                            <span className="Best_div-info-title">
                                sksmkmkdsfskfsjksjkfdj
                            </span>
                        </div>
                        <div className="Best_book-bg">
                            <img src={circle} />
                            <img src={dot} className="Best_book-bg-dot" />
                        </div>
                    </div>
                </div>
                <div className="Best_div">
                    <h3>
                        가장 <br />
                        인기있는
                        <br />
                        도서
                    </h3>
                    <div>
                        <div className="Best_div-info">
                            <img className="Best_img-book" src={bookSample} />
                            <span className="Best_div-info-title">
                                sksmkmkdsfskfsjksjkfdj
                            </span>
                        </div>
                        <div className="Best_book-bg">
                            <img src={circle} />
                            <img src={dot} className="Best_book-bg-dot" />
                        </div>
                    </div>
                </div>
                <div className="Best_div">
                    <h3>
                        가장 <br />
                        인기있는
                        <br />
                        도서
                    </h3>
                    <div>
                        <div className="Best_div-info">
                            <img className="Best_img-book" src={bookSample} />
                            <span className="Best_div-info-title">
                                sksmkmkdsfskfsjksjkfdj
                            </span>
                        </div>
                        <div className="Best_book-bg">
                            <img src={circle} />
                            <img src={dot} className="Best_book-bg-dot" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
