import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://pbs.twimg.com/media/D4d_gPfXkAEE7-X.png"
        sx={{ width: 300, height: 300}}
      />
    </Stack>
  );
}