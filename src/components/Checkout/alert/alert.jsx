import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function FilledAlerts() {
  return (
    <div className='alert'>
    <Stack sx={{ width: 'auto' }} spacing={2}  >
      <Alert  variant="filled" severity="success">
        Muchas gracias por su compra! Su pedido esta en proceso!
      </Alert>
    </Stack>
    </div>  
  );
}