import React from 'react';
//props -> src, title,subtitle, isDark(bool), isCircle(bool)
const Poster = (props) => {
  return (
    <>
      <div
        className={`flex flex-col  gap-2 px-2  ${
          props.isCircle ? 'item-center max-w-max ' : 'items-start'
        } `}
      >
        <div className={`${props.isCircle ? 'h-40' : 'h-80'} `}>
          <img
            key={props.alt}
            src={props.src}
            alt={props.title}
            className={`${
              props.isCircle
                ? 'rounded-full h-40 w-40 flex items-center justify-center'
                : 'w-full h-full rounded-xl'
            } `}
          />
        </div>
        <div
          className={`${props.isCircle ? 'flex flex-col items-center ' : ''} `}
        >
          <h3
            className={`text-lg font-bold ${
              props.isDark ? 'text-white' : 'text-gray-700'
            }`}
          >
            {props.title}
          </h3>
          <p
            className={`text-sm font-bold ${
              props.isDark ? 'text-white' : 'text-gray-700'
            }`}
          >
            {props.subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default Poster;
