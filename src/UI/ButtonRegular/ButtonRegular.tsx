import React, { memo } from "react";
import st from "./ButtonRegular.module.scss";


interface IButtonRegular {
    text: string;
    classname: string;
    actFunc: (arg: any) => void;
}

const ButtonRegular:React.FC<IButtonRegular> = memo(({text, classname, actFunc}) => {
    console.log('re')
    return(
        <button onClick={actFunc} className={st.bt_regular + ' ' + st[classname]}>
            {text}
        </button>
    );
})


export { ButtonRegular };