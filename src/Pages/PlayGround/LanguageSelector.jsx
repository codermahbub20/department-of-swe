/* eslint-disable react/prop-types */
import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
  } from "@chakra-ui/react";
  import { LANGUAGE_VERSIONS } from "./constants";
  
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const ACTIVE_COLOR = "black";
  
  const LanguageSelector = ({ language, onSelect }) => {
    return (
      <Box className="z-20 sticky" ml={2} mb={10}>
        <Text mb={2} fontSize="lg">
          Language:
        </Text>
        <Menu  isLazy>
          <MenuButton className="btn" as={Button}>{language}</MenuButton>
          <MenuList bg="white">
            {languages.map(([lang, version]) => (
              <MenuItem
                key={lang}
                className={lang === language ? ACTIVE_COLOR : ""}
                bg={lang === language ? "bg-red-500" : "transparent"}
                _hover={{
                  color: ACTIVE_COLOR,
                  bg: "white.900",
                }}
                onClick={() => onSelect(lang)}
              >
                {lang}
                &nbsp;
                <Text as="span" className="" fontSize="sm">
                  ({version})
                </Text>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    );
  };
  export default LanguageSelector;