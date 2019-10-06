import React from "react";

/*
    props.colors={
        innerEyes:'#FFFFFF',
        Eyebrows:'#783E0C',
        Eyes:'#C37623',
        Mouth:'#FFFFFF',
    }
*/
export default function Face(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='71.173'
      height='75.976'
      viewBox='0 0 71.173 75.976'
      style={{ position: "relative", left: "0px", top: "0px" }}
    >
      <g id='Face' transform='translate(-236.873 -210.531)'>
        <g id='Eyes'>
          <ellipse
            id='Ellipse_1'
            data-name='Ellipse 1'
            cx='7.5'
            cy='12'
            rx='7.5'
            ry='12'
            transform='matrix(0.995, 0.105, -0.105, 0.995, 244.982, 220.265)'
            fill='#c37623'
          />
          <ellipse
            id='Ellipse_4'
            data-name='Ellipse 4'
            cx='7.5'
            cy='12'
            rx='7.5'
            ry='12'
            transform='matrix(0.995, 0.105, -0.105, 0.995, 284.982, 220.265)'
            fill='#c37623'
          />
        </g>
        <g id='Inner_Eyes' data-name='Inner Eyes' transform='translate(1 2)'>
          <circle
            id='Ellipse_2'
            data-name='Ellipse 2'
            cx='2.5'
            cy='2.5'
            r='2.5'
            transform='translate(247 235)'
            fill='#fff'
          />
          <circle
            id='Ellipse_3'
            data-name='Ellipse 3'
            cx='2.5'
            cy='2.5'
            r='2.5'
            transform='translate(287 235)'
            fill='#fff'
          />
        </g>
        <path
          id='Mouth'
          d='M242.473,266.3h57.994s-.226,25.2-26.322,25.2S238.524,266.3,242.473,266.3Z'
          transform='translate(-1 -5)'
          fill='#fff'
        />
        <g id='Eyebrows' transform='translate(2 2)'>
          <path
            id='Left'
            d='M235.741,214.074c-6.934,3.467,6.686-6.562,20.305-8.543v4.829S242.675,210.607,235.741,214.074Z'
            transform='translate(1 3)'
            fill='#783e0c'
          />
          <path
            id='Right'
            d='M254.179,214.074c6.934,3.467-6.686-6.562-20.305-8.543v4.829S247.245,210.607,254.179,214.074Z'
            transform='translate(50 3)'
            fill='#783e0c'
          />
        </g>
      </g>
    </svg>
  );
}
