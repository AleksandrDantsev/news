import React, { Fragment, memo } from "react";

interface ICross {
    height: string;
    width: string;
}

const Cross:React.FC<ICross> = memo(({height, width}) => {
    return(
        <Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" height={height} width={width}  fill="#7d7d7d" stroke="#7d7d7d" viewBox="0 0 490 490"><path d="M456.85 0 245 212.56 33.15 0 .71 32.34 212.67 245 .71 457.68 33.15 490 245 277.44 456.85 490l32.44-32.32L277.33 245 489.29 32.34z"/></svg>
        </Fragment>
    );
})


export { Cross};