import React, {useState} from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CustomSnak from './customSnak';
import { createMockFormSubmission } from './service/mockServer';
import './header.css'
export default function Header() {
  const [open, setOpen] = useState(false);
  const [formFields , setFormFields] = useState({
      email: '',
      firstName: '',
      lastName: '',
      liked: false,
  })
  const headerButtonPress = () => {
    setModelOpen(true)
    createMockFormSubmission()
  }
  const handleClose = () => {
    console.log('new form submission');
    setOpen(false)
  }
  const onFieldChange = (key, value) => {
    setFormFields((prevState) => ({
      ...prevState,
      [key]: value
    }))
  }
  const submitForm = () => {
    
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{marginRight: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{flexGrow: 1}}>
            Toast Exercise
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={() => headerButtonPress()}
          >
            New Submission
          </Button>
          <CustomSnak handleClose={handleClose} open={open} formFields={formFields} />
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}
