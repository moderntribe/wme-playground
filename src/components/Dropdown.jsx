import React, { useState } from 'react';
import { Dropdown, MenuItem } from '@moderntribe/wme';

export const MyDropdown = () => {
  const [item, setItem] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItem(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Dropdown
      value={item}
      selectValue="Select"
      onChange={handleChange}
      error={true}
      errorMessage={'this is an error message'}
    >
      <MenuItem id="item1" key="1" value="Item 1">Item 1</MenuItem>
      <MenuItem id="item2" key="2" value="Item 2">Item 2</MenuItem>
      <MenuItem id="item3" key="3" value="Item 3">Item 3</MenuItem>
    </Dropdown>
  );
};

export default MyDropdown;