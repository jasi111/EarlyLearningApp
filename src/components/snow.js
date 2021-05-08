import React from 'react';
import Snowf from 'react-snowf';


class testSnow extends React.Component{

    render () {
        return (
            <div>
<Snowf
  amount={5000}
  size={50}
  speed={5}
  wind={3}
  color="#fff"
  opacity={0.5}
  swing={1}
  image={null}
  zIndex={null}
  resize={true}
/>
                
            
            </div>
        );
    }
}
    
export default testSnow;