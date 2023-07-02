import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const Filter = ({ handleAsia, handleEurope, handleAmerica,handleRemove }) => {
  return (
    <Menu>
      <MenuButton colorScheme="teal" as={Button}>
      Filter by Region
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleRemove}>Remove Filter</MenuItem>
        <MenuItem onClick={handleAsia}>Asia</MenuItem>
        <MenuItem onClick={handleEurope}>Europe</MenuItem>
        <MenuItem onClick={handleAmerica}>America</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Filter;