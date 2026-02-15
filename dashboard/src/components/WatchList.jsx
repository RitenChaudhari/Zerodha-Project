import React,{ useState, useContext } from "react";

import {Tooltip, Grow} from "@mui/material";

// import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

// import {KeyboardArrowUp,KeyboardArrowDown} from "@mui/icons-material";

// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import {watchlist} from "../data/data"
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index) => {
          return <WatchListItem stock={stock} key={index}/>
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({stock}) =>{
  const [showWatchListActions, setshowWatchListActions] = useState(false);

  const handleMouseEnter = (event) => {
    setshowWatchListActions(true);
  }

  const handleMouseExit = (event) =>{
    setshowWatchListActions(false);
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown? "down":"up"}>{stock.name}</p>
        <div className="itemInfo">
          {stock.isDown?(<span className="percent down">{stock.percent}</span>):(<span className="percent up">{stock.percent}</span>)}
          {/* {stock.isDown?(<ArrowUpwardIcon className='up'/>):(<ArrowDownwardIcon className='down'/>)} */}
          <span className="price">&nbsp;&nbsp;&nbsp;{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  )
}

const WatchListActions = ({uid}) => {

  const { openBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = () => {
    openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={handleBuyClick}>Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="chart" style={{padding:"0"}}>chart</button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="btn" style={{padding:"0"}}>...</button>
        </Tooltip>
      </span>
    </span>
  )
}