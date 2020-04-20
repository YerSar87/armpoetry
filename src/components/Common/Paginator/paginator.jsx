import React, {useState} from "react";
import classes from "./paginator.module.css";
import newClasses from "classnames";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={classes.pagesBlock}>
        {portionNumber > 1 &&
        <button className={classes.btn} onClick={() => {setPortionNumber(portionNumber - 1)}}>Նախորդը</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span key={p.id} className={newClasses({[classes.selectedPage]: currentPage === p }, classes.pageNumber)}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button className={classes.btn} onClick={() => {setPortionNumber(portionNumber + 1)}}>Հաջորդը</button>}
        </div>
};

export default Paginator;