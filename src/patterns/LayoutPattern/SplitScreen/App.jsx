import React from 'react';
// import { SplitScreen } from './SplitScreen copy';
import { SplitScreen } from './SplitScreen';

const LeftComponent = () => {
  return <h1 style={{ backgroundColor: 'green', margin: 0 }}>Left!</h1>;
};

const RightComponent = () => {
  return <p style={{ backgroundColor: 'red', margin: 0 }}>Right!</p>;
};

// optimized
// const LeftComponent = ({ name }) => {
//   return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
// };

// const RightComponent = ({ message }) => {
//   return <p style={{ backgroundColor: 'red' }}>{message}!</p>;
// };

const App = () => {
  return (
    <SplitScreen
      left={LeftComponent}
      right={RightComponent}
      leftWeight={1}
      rightWeight={3}
    />
    // <SplitScreen leftWeight={1} rightWeight={3}>
    //   <LeftComponent name='Shaun' />
    //   <RightComponent message='Hello' />
    // </SplitScreen>
  );
};

export default App;
