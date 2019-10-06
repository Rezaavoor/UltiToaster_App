import React, { useContext } from "react";
import DataContext from "../../Context/DataContext";

/*
    props.colors={
        innerEyes:'#FFFFFF',
        Eyebrows:'#783E0C',
        Eyes:'#C37623',
        Mouth:'#FFFFFF',
    }
*/
export default function Face() {
  const { timer } = useContext(DataContext)[0];
  const data = {
    facePosition: -10 + timer * 0.2,
    innerEyesPosition: timer * 0.05,
    mouthAndInnerEyesColor: timer < 60 ? "#fff" : "#F9E795",
    eyesColor: timer < 30 ? "#E69D41" : timer < 60 ? "#C37623" : "#783E0C",
    eyebrowsColor: timer < 30 ? "#C37623" : "#783e0c"
  };
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='71.173'
      height='75.976'
      viewBox='0 0 71.173 75.976'
      style={{
        position: "relative",
        left: `${data.facePosition}px`,
        top: "0px",
        transition: "all 0.5s ease-out"
      }}
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
            fill={data.eyesColor}
          />
          <ellipse
            id='Ellipse_4'
            data-name='Ellipse 4'
            cx='7.5'
            cy='12'
            rx='7.5'
            ry='12'
            transform='matrix(0.995, 0.105, -0.105, 0.995, 284.982, 220.265)'
            fill={data.eyesColor}
          />
        </g>
        <g id='Inner_Eyes' data-name='Inner Eyes' transform='translate(1 2)'>
          <circle
            id='Ellipse_2'
            data-name='Ellipse 2'
            cx={data.innerEyesPosition}
            cy='2.5'
            r='2.5'
            transform='translate(247 235)'
            fill={data.mouthAndInnerEyesColor}
            style={{ transition: "all 0.5s ease-out" }}
          />
          <circle
            id='Ellipse_3'
            data-name='Ellipse 3'
            cx={data.innerEyesPosition}
            cy='2.5'
            r='2.5'
            transform='translate(287 235)'
            fill={data.mouthAndInnerEyesColor}
            style={{ transition: "all 0.5s ease-out" }}
          />
        </g>
        <path
          id='Mouth'
          d='M242.473,266.3h57.994s-.226,25.2-26.322,25.2S238.524,266.3,242.473,266.3Z'
          transform='translate(-1 -5)'
          fill={data.mouthAndInnerEyesColor}
        />
        <g id='Eyebrows' transform='translate(2 2)'>
          <path
            id='Left'
            d='M235.741,214.074c-6.934,3.467,6.686-6.562,20.305-8.543v4.829S242.675,210.607,235.741,214.074Z'
            transform='translate(1 3)'
            fill={data.eyebrowsColor}
          />
          <path
            id='Right'
            d='M254.179,214.074c6.934,3.467-6.686-6.562-20.305-8.543v4.829S247.245,210.607,254.179,214.074Z'
            transform='translate(50 3)'
            fill={data.eyebrowsColor}
          />
        </g>
      </g>
    </svg>
  );
}
