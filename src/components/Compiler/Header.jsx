import { Box, Button, IconButton, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { languageOptions } from '../../constants/languageOptions';

function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    languageOptions[0].name
  );
  const [theme, setTheme] = useState(true);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <Box
      sx={{
        width: '100vw',
        height: '70px',
        padding: '0.5rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <img src="/logo.svg" alt="" style={{ height: '100%' }} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.7rem',
        }}
      >
        <IconButton
          sx={{
            bgcolor: '#2B3245',
            color: 'white',
            aspectRatio: '1',
            height: '100%',
            borderRadius: 2,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              bgcolor: '#2B3245',
              color: '#8F43EE',
            },
          }}
          onClick={() => setTheme(!theme)}
        >
          {theme ? <BsFillSunFill /> : <BsFillMoonFill />}
        </IconButton>
        <Select
          sx={{
            width: '250px',
            height: '100%',
            color: 'white',
            borderRadius: 2,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#8F43EE',
            },
            '& .MuiSvgIcon-root': {
              color: '#8F43EE',
            },
          }}
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          {languageOptions.map((option) => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
}

export default Header;
