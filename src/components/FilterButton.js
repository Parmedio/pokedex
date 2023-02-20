import React from 'react';
import Tilt from 'react-parallax-tilt';

const FilterButton = ({ btnText, GenStartAt, skipToGen }) => {
  return(
    <Tilt
      perspective={200}
      glareEnable={true}
      glareMaxOpacity={1}
      glarePosition='all'
      //glareColor= 'red'
      glareBorderRadius='20px'
      transitionSpeed='800' 
      scale={1.24}
      reset='true'
      className= 'fw8 bg-light-gray ba bw2 b--moon-gray'
    >
      <button
        onClick={skipToGen}
        name={GenStartAt}
        className= 'fw8 bw0 grow shadow-5'
      >
        {btnText}
      </button>
    </Tilt>
  );
}

export default FilterButton