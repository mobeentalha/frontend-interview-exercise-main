import React from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

function CustomModel({open, fieldChange, close, submit}) {
  return (
    <>
      <Modal open={open} onClose={close}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
           Form 
          </Typography>
            <input 
              placeholder='Enter Email' 
              onChange={(e) => fieldChange('email', e.target.value)} 
              className='form-input'
            />
            <input 
              placeholder='Enter First Name' 
              onChange={(e) => fieldChange('firstName', e.target.value)} 
              className='form-input'
            />
            <input 
              placeholder='Enter Last Name' 
              onChange={(e) => fieldChange('lastName', e.target.value)} 
              className='form-input'
            />
            <div className='model-footer'>
              <Button onClick={close} sx={{ mt: 2 }} variant="contained">
                Close
              </Button>
              <Button onClick={submit} sx={{ mt: 2 }} variant="contained">
                Save
              </Button>
            </div>
            
        </Box>
      </Modal>
    </>
  );
}

export default CustomModel;
