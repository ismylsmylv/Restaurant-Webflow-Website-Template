import React from "react";
import "./style.scss";
import MenuImg from "./../../assets/img/menu.png";
type Props = {};

function Menu({ menuType }: Props) {
  return (
    <div className="Menu">
      <div className="container">
        <div className="info">
          <div className="subtext">Menu</div>
          <div className="head">Try Our Special Offers</div>
          <div className="text">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making it look
            like readable English.
          </div>
          <img src={MenuImg} alt="" className="menuImg" />
          <br />
          <button className="menuBtn">See all dishes</button>
        </div>
        <div className="list">
          {menuType.includes("Starters") && (
            <div className="listItem">
              <div className="heading">Starters</div>
              <div className="menuItem">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3e4c/ec73/50df5048cd7d828c67830f1085249088?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TxEz3jaThk2eflzCL3~kX38vF0LzfgVjco8VJN1DGoqiIJHe61fAWB3fk5ID5vZOa3DlevUFZ~A-xcxTbS9FJyXf4jewZciBaeEQgeox6Fr9y-O1S-QH8WUILPcudhghx1xf9~DyVDiU1Ih1TqXqi2BNQ-Rss7xoagV32iKz580z2GX051Hm8Ijo0dZqKOARSLNWdql2gRmsuipY7YBrAxn~6jcmPcBmb1F~X0eMAHDkLxXlWdil3mvexMxoa9UZTJjX1JvXQMIiqH7mKjSF8Hl6wmgEF49JgZqH9f7SjinrxlnkAGLyb0oMXahYHb~7uUxLfF7YSzBv89AI9no4Cw__"
                  alt=""
                  className="menuImg"
                />
                <div className="mid">
                  <div className="head">Raw Scallops from Erquy</div>
                  <div className="texts">
                    <div className="sub">
                      Candied Jerusalem artichokes, truffle
                    </div>
                    <div className="dots"></div>
                  </div>
                </div>
                <div className="price">$40</div>
              </div>
              <div className="menuItem">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3e4c/ec73/50df5048cd7d828c67830f1085249088?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TxEz3jaThk2eflzCL3~kX38vF0LzfgVjco8VJN1DGoqiIJHe61fAWB3fk5ID5vZOa3DlevUFZ~A-xcxTbS9FJyXf4jewZciBaeEQgeox6Fr9y-O1S-QH8WUILPcudhghx1xf9~DyVDiU1Ih1TqXqi2BNQ-Rss7xoagV32iKz580z2GX051Hm8Ijo0dZqKOARSLNWdql2gRmsuipY7YBrAxn~6jcmPcBmb1F~X0eMAHDkLxXlWdil3mvexMxoa9UZTJjX1JvXQMIiqH7mKjSF8Hl6wmgEF49JgZqH9f7SjinrxlnkAGLyb0oMXahYHb~7uUxLfF7YSzBv89AI9no4Cw__"
                  alt=""
                  className="menuImg"
                />
                <div className="mid">
                  <div className="head">Raw Scallops from Erquy</div>
                  <div className="texts">
                    <div className="sub">
                      Candied Jerusalem artichokes, truffle
                    </div>
                    <div className="dots"></div>
                  </div>
                </div>
                <div className="price">$40</div>
              </div>
              <div className="menuItem">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3e4c/ec73/50df5048cd7d828c67830f1085249088?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TxEz3jaThk2eflzCL3~kX38vF0LzfgVjco8VJN1DGoqiIJHe61fAWB3fk5ID5vZOa3DlevUFZ~A-xcxTbS9FJyXf4jewZciBaeEQgeox6Fr9y-O1S-QH8WUILPcudhghx1xf9~DyVDiU1Ih1TqXqi2BNQ-Rss7xoagV32iKz580z2GX051Hm8Ijo0dZqKOARSLNWdql2gRmsuipY7YBrAxn~6jcmPcBmb1F~X0eMAHDkLxXlWdil3mvexMxoa9UZTJjX1JvXQMIiqH7mKjSF8Hl6wmgEF49JgZqH9f7SjinrxlnkAGLyb0oMXahYHb~7uUxLfF7YSzBv89AI9no4Cw__"
                  alt=""
                  className="menuImg"
                />
                <div className="mid">
                  <div className="head">Raw Scallops from Erquy</div>
                  <div className="texts">
                    <div className="sub">
                      Candied Jerusalem artichokes, truffle
                    </div>
                    <div className="dots"></div>
                  </div>
                </div>
                <div className="price">$40</div>
              </div>
              <div className="menuItem">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3e4c/ec73/50df5048cd7d828c67830f1085249088?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TxEz3jaThk2eflzCL3~kX38vF0LzfgVjco8VJN1DGoqiIJHe61fAWB3fk5ID5vZOa3DlevUFZ~A-xcxTbS9FJyXf4jewZciBaeEQgeox6Fr9y-O1S-QH8WUILPcudhghx1xf9~DyVDiU1Ih1TqXqi2BNQ-Rss7xoagV32iKz580z2GX051Hm8Ijo0dZqKOARSLNWdql2gRmsuipY7YBrAxn~6jcmPcBmb1F~X0eMAHDkLxXlWdil3mvexMxoa9UZTJjX1JvXQMIiqH7mKjSF8Hl6wmgEF49JgZqH9f7SjinrxlnkAGLyb0oMXahYHb~7uUxLfF7YSzBv89AI9no4Cw__"
                  alt=""
                  className="menuImg"
                />
                <div className="mid">
                  <div className="head">Raw Scallops from Erquy</div>
                  <div className="texts">
                    <div className="sub">
                      Candied Jerusalem artichokes, truffle
                    </div>
                    <div className="dots"></div>
                  </div>
                </div>
                <div className="price">$40</div>
              </div>
            </div>
          )}
          {menuType.includes("Main Dish") && (
            <div className="listItem">
              <div className="heading">Main Dish</div>
              <div className="menuItem">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3e4c/ec73/50df5048cd7d828c67830f1085249088?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TxEz3jaThk2eflzCL3~kX38vF0LzfgVjco8VJN1DGoqiIJHe61fAWB3fk5ID5vZOa3DlevUFZ~A-xcxTbS9FJyXf4jewZciBaeEQgeox6Fr9y-O1S-QH8WUILPcudhghx1xf9~DyVDiU1Ih1TqXqi2BNQ-Rss7xoagV32iKz580z2GX051Hm8Ijo0dZqKOARSLNWdql2gRmsuipY7YBrAxn~6jcmPcBmb1F~X0eMAHDkLxXlWdil3mvexMxoa9UZTJjX1JvXQMIiqH7mKjSF8Hl6wmgEF49JgZqH9f7SjinrxlnkAGLyb0oMXahYHb~7uUxLfF7YSzBv89AI9no4Cw__"
                  alt=""
                  className="menuImg"
                />
                <div className="mid">
                  <div className="head">Raw Scallops from Erquy</div>
                  <div className="texts">
                    <div className="sub">
                      Candied Jerusalem artichokes, truffle
                    </div>
                    <div className="dots"></div>
                  </div>
                </div>
                <div className="price">$40</div>
              </div>
              <div className="menuItem">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3e4c/ec73/50df5048cd7d828c67830f1085249088?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TxEz3jaThk2eflzCL3~kX38vF0LzfgVjco8VJN1DGoqiIJHe61fAWB3fk5ID5vZOa3DlevUFZ~A-xcxTbS9FJyXf4jewZciBaeEQgeox6Fr9y-O1S-QH8WUILPcudhghx1xf9~DyVDiU1Ih1TqXqi2BNQ-Rss7xoagV32iKz580z2GX051Hm8Ijo0dZqKOARSLNWdql2gRmsuipY7YBrAxn~6jcmPcBmb1F~X0eMAHDkLxXlWdil3mvexMxoa9UZTJjX1JvXQMIiqH7mKjSF8Hl6wmgEF49JgZqH9f7SjinrxlnkAGLyb0oMXahYHb~7uUxLfF7YSzBv89AI9no4Cw__"
                  alt=""
                  className="menuImg"
                />
                <div className="mid">
                  <div className="head">Raw Scallops from Erquy</div>
                  <div className="texts">
                    <div className="sub">
                      Candied Jerusalem artichokes, truffle
                    </div>
                    <div className="dots"></div>
                  </div>
                </div>
                <div className="price">$40</div>
              </div>
              <div className="menuItem">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3e4c/ec73/50df5048cd7d828c67830f1085249088?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TxEz3jaThk2eflzCL3~kX38vF0LzfgVjco8VJN1DGoqiIJHe61fAWB3fk5ID5vZOa3DlevUFZ~A-xcxTbS9FJyXf4jewZciBaeEQgeox6Fr9y-O1S-QH8WUILPcudhghx1xf9~DyVDiU1Ih1TqXqi2BNQ-Rss7xoagV32iKz580z2GX051Hm8Ijo0dZqKOARSLNWdql2gRmsuipY7YBrAxn~6jcmPcBmb1F~X0eMAHDkLxXlWdil3mvexMxoa9UZTJjX1JvXQMIiqH7mKjSF8Hl6wmgEF49JgZqH9f7SjinrxlnkAGLyb0oMXahYHb~7uUxLfF7YSzBv89AI9no4Cw__"
                  alt=""
                  className="menuImg"
                />
                <div className="mid">
                  <div className="head">Raw Scallops from Erquy</div>
                  <div className="texts">
                    <div className="sub">
                      Candied Jerusalem artichokes, truffle
                    </div>
                    <div className="dots"></div>
                  </div>
                </div>
                <div className="price">$40</div>
              </div>
              <div className="menuItem">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3e4c/ec73/50df5048cd7d828c67830f1085249088?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TxEz3jaThk2eflzCL3~kX38vF0LzfgVjco8VJN1DGoqiIJHe61fAWB3fk5ID5vZOa3DlevUFZ~A-xcxTbS9FJyXf4jewZciBaeEQgeox6Fr9y-O1S-QH8WUILPcudhghx1xf9~DyVDiU1Ih1TqXqi2BNQ-Rss7xoagV32iKz580z2GX051Hm8Ijo0dZqKOARSLNWdql2gRmsuipY7YBrAxn~6jcmPcBmb1F~X0eMAHDkLxXlWdil3mvexMxoa9UZTJjX1JvXQMIiqH7mKjSF8Hl6wmgEF49JgZqH9f7SjinrxlnkAGLyb0oMXahYHb~7uUxLfF7YSzBv89AI9no4Cw__"
                  alt=""
                  className="menuImg"
                />
                <div className="mid">
                  <div className="head">Raw Scallops from Erquy</div>
                  <div className="texts">
                    <div className="sub">
                      Candied Jerusalem artichokes, truffle
                    </div>
                    <div className="dots"></div>
                  </div>
                </div>
                <div className="price">$40</div>
              </div>
            </div>
          )}
          {menuType.includes("Dessert") && (
            <div className="listItem">
              <div className="heading">Dessert</div>
              <div className="menuItem">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3e4c/ec73/50df5048cd7d828c67830f1085249088?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TxEz3jaThk2eflzCL3~kX38vF0LzfgVjco8VJN1DGoqiIJHe61fAWB3fk5ID5vZOa3DlevUFZ~A-xcxTbS9FJyXf4jewZciBaeEQgeox6Fr9y-O1S-QH8WUILPcudhghx1xf9~DyVDiU1Ih1TqXqi2BNQ-Rss7xoagV32iKz580z2GX051Hm8Ijo0dZqKOARSLNWdql2gRmsuipY7YBrAxn~6jcmPcBmb1F~X0eMAHDkLxXlWdil3mvexMxoa9UZTJjX1JvXQMIiqH7mKjSF8Hl6wmgEF49JgZqH9f7SjinrxlnkAGLyb0oMXahYHb~7uUxLfF7YSzBv89AI9no4Cw__"
                  alt=""
                  className="menuImg"
                />
                <div className="mid">
                  <div className="head">Raw Scallops from Erquy</div>
                  <div className="texts">
                    <div className="sub">
                      Candied Jerusalem artichokes, truffle
                    </div>
                    <div className="dots"></div>
                  </div>
                </div>
                <div className="price">$40</div>
              </div>
              <div className="menuItem">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3e4c/ec73/50df5048cd7d828c67830f1085249088?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TxEz3jaThk2eflzCL3~kX38vF0LzfgVjco8VJN1DGoqiIJHe61fAWB3fk5ID5vZOa3DlevUFZ~A-xcxTbS9FJyXf4jewZciBaeEQgeox6Fr9y-O1S-QH8WUILPcudhghx1xf9~DyVDiU1Ih1TqXqi2BNQ-Rss7xoagV32iKz580z2GX051Hm8Ijo0dZqKOARSLNWdql2gRmsuipY7YBrAxn~6jcmPcBmb1F~X0eMAHDkLxXlWdil3mvexMxoa9UZTJjX1JvXQMIiqH7mKjSF8Hl6wmgEF49JgZqH9f7SjinrxlnkAGLyb0oMXahYHb~7uUxLfF7YSzBv89AI9no4Cw__"
                  alt=""
                  className="menuImg"
                />
                <div className="mid">
                  <div className="head">Raw Scallops from Erquy</div>
                  <div className="texts">
                    <div className="sub">
                      Candied Jerusalem artichokes, truffle
                    </div>
                    <div className="dots"></div>
                  </div>
                </div>
                <div className="price">$40</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
