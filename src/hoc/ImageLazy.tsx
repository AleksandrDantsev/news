import React, { Fragment, useState, useEffect } from "react";
import st from "./ImageLazy.module.scss";
import { Effect, LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface IImageLazy {
    src: string;
    alt: string;
    effect: Effect;
    height?: string;
    width?: string;
}

const ImageLazy: React.FC<IImageLazy> = ({effect, src, alt, height, width}) => {
    const [isImgLoaded, setIsImgLoaded] = useState<boolean | string>(false);

    useEffect(() => {
        let img: HTMLImageElement | null = new Image();
        img.src = src;
        img.onload = () => setIsImgLoaded(true);
        img.onerror = () => setIsImgLoaded('error');
        img = null;
    }, [])
    
    
    return (
        <Fragment>
            {
                isImgLoaded ? <LazyLoadImage  effect={effect} 
                                src={isImgLoaded === "error" ? "https://msch9fmba.ru/images/img/plug.jpg": src} 
                                alt={alt} 
                                height={height} 
                                width={width}
                                object-fit="cover"
                                /> :
                                <div className={st.load_image_screen}></div>
            }
        </Fragment>
    )
}

export { ImageLazy };