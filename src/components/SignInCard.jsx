import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import { AiOutlineGithub, AiOutlineGoogle } from 'react-icons/ai';
import { RiMicrosoftFill } from 'react-icons/ri';

function SignInCard({
  signInWithGoogle,
  signInWithGithub,
  signInWithMicrosoft,
  handleTryNow
}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h3">Sign in to</Typography>
      <Typography variant="h3" fontWeight="medium">
        CodeCat
      </Typography>
      <Typography
        variant="h6"
        fontWeight="light"
        fontSize="1rem"
        mt={2}
        sx={{ opacity: '0.6' }}
      >
        Create an account and start building today.
      </Typography>
      <Button
        variant="contained"
        startIcon={<AiOutlineGithub />}
        fullWidth
        sx={{ mt: 2, py: '0.7rem', mb: '0.7rem' }}
        onClick={signInWithGithub}
      >
        Sign in with GitHub
      </Button>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          '& > button': {
            mr: { xs: '0', sm: '0.5rem' },
            mb: { xs: '0.5rem', sm: '0' },
          },
        }}
      >
        <Button
          variant="contained"
          startIcon={<AiOutlineGoogle />}
          onClick={signInWithGoogle}
          sx={{
            width: '100%',
            height: '40px',
            bgcolor: '#2B3245',
            color: '#999',
            mb: '0.5rem',
          }}
        >
          Sign in with Google
        </Button>
        <Button
          variant="contained"
          startIcon={<RiMicrosoftFill />}
          sx={{
            width: '100%',
            height: '40px',
            bgcolor: '#2B3245',
            color: '#999',
            mb: '0.5rem',
          }}
          color="primary"
          onClick={signInWithMicrosoft}
        >
          Sign in with Microsoft
        </Button>
      </Box>
      <Divider
        sx={{
          my: '1rem',
          '&::before, &::after': {
            borderColor: 'secondary.light',
          },
        }}
      >
        OR
      </Divider>
      <Button
        variant="outlined"
        fullWidth
        onClick={handleTryNow}
        sx={{
          py: '0.7rem',
          mb: '0.7rem',
          color: 'white',
          boxShadow: '0 0 1rem 0 #8F43EE',
        }}
      >
        Try it without signing in!
      </Button>
    </Box>
  );
}

export default SignInCard;
