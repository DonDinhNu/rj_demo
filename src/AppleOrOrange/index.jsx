import React from 'react';

const AppleOrOrange = ({isApple}) => (
  <div>
    { isApple ? <div>Apple</div> : <div>Orange</div>}
  </div>
);

export default AppleOrOrange;
