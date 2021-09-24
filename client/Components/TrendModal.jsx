import React from 'react';

const TrendModal = (props) => {

  const ModalPrint = () => {
    if (props.state.length != 0) {
      return (
        <div className='hover-modal'>
          <h3>
            State: {props.fullState}
          </h3>
          <div>
            The most popular Google search on {props.month} {props.year} in {props.fullState} was...
          </div>
          <h2>
            "{props.trending.trend}"
          </h2>
          <div>
            Please click on {props.fullState} if you wish to be redirected to the actual search!
          </div>
        </div>
      )
    } else {
      return (
        <div className='hover-modal'>
          Hover over any of the states and watch what happens!
        </div>
      )
    }
  }

  return (
   <div>{ModalPrint()}</div>
  )
}

export default TrendModal;