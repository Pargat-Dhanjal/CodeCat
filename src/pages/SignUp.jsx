import { Box, Link } from '@mui/material';
import React from 'react';
import SignInCard from '../components/SignInCard';

function SignUp() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <img src="/logo.svg" alt="CodeCat" width='120px' />
      <Box
        sx={{
          width: '90%',
          maxWidth: '450px',
          margin: '0 auto',
        }}
      >
        <SignInCard />
      </Box>
      <Box
        sx={{
          width: '90%',
          maxWidth: '450px',
          margin: '0 auto',
          mt: '2rem',
          color: '#999',
          fontSize: '0.8rem',
        }}
      >
        Made with ❤️ by{' '}
        <Link href="https://github.com/Pargat-Dhanjal" underline='hover' rel="noopener" target='_blank'>Pargat-Dhanjal</Link>
      </Box>
    </Box>
  );
}

export default SignUp;
