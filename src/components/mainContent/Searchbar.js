import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./styles/Searchbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartView } from "../../store/cart-slice";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function Searchbar() {
  const dispatch = useDispatch();
  const cartListLength = useSelector((state) => state.cart.cartList).length;
  const [filterList, setFilterList] = useState([]);
  const [listbarOpen, setListbarOpen] = useState(false);
  const searchList = useSelector((state) => state.search.searchList);

  const cartIconClickHandler = () => {
    dispatch(toggleCartView());
  };

  const searchHandler = (event) => {
    setFilterList([]);
    setListbarOpen(true);
    const input = event.target.value;
    if (input === "") setListbarOpen(false);
    const list = searchList.filter((item) =>
      item.strCategory.toLowerCase().includes(input)
    );
    setFilterList(list);
  };

  const listbar = listbarOpen && (
    <div className="search-results">
      {filterList.map((item) => (
        <h4 key={item.idCategory}>
          <ArrowRightIcon />
          {item.strCategory}
        </h4>
      ))}
    </div>
  );

  return (
    <div className="search">
      <div className="searchbar">
        <SearchIcon className="search-icon" />
        <input type="search" placeholder="Search" onChange={searchHandler} />
        {listbar}
      </div>
      <div className="cartIcon" onClick={cartIconClickHandler}>
        <ShoppingBasketIcon />
        <div className="count">
          <p>{cartListLength}</p>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
