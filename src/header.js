import React from 'react';

let heroSectionStyle = {
  position: 'relative',
  backgroundColor: '#e6e6e6',
  width: '100%',
  height: '200px',
}
let heroContentWrapStyle = {
  position: 'absolute',
  top: '50%',
  left: '30%',
  transform: 'translateY(-50%)',
  maxWidth: '500px',
  width: '100%',
  height: 'auto'
}

const HeroText = ({heading, subText}) => {
  return (
      <div style={heroContentWrapStyle}>
        <h1>{heading}</h1>
        <p>{subText}</p>
      </div>
  )
}
const HeroSection = ({heading, subText}) => {
  return (
    <div className="hero-container" style={heroSectionStyle}>
      <div className="hero-outer">
        <HeroText heading={heading} subText={subText} />
      </div>
    </div>
  )
}

class Header extends React.Component {

  render() {
    const { heading, subText } = this.props

    return (
      <HeroSection 
        heading={heading}
        subText={subText}
         />
    )
  }
}





export default Header
