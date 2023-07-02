import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const Sort = ({handleHL, handleLH}) => {
  return (
    <Menu>
      <MenuButton colorScheme="teal" as={Button}>
        Sort By Pages
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleHL}>Pages : High to low</MenuItem>
        <MenuItem onClick={handleLH}>Pages : Low to High</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default Sort