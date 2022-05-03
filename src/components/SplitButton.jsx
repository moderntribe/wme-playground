import React, { useState } from 'react';
import { SplitButton } from '@moderntribe/wme';

const MySplitButton = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const options = [
    'option 1',
    'option 2',
    'option 3',
  ];

  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };

  const handleButtonClick = () => {
    // you can handle the actual click however you need to
    console.log(`${options[selectedIndex]} was clicked`);
  }

  return (
    <>
      <SplitButton
        selectedIndex={selectedIndex}
        handleIndexChange={handleIndexChange}
        handleClick={handleButtonClick}
        color="primary"
        options={options}
        ariaLabelGroup="Split Button Group"
      />
    </>
  );
};

export default MySplitButton;