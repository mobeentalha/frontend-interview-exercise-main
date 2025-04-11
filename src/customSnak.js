import {Snackbar, Alert, IconButton, Button} from '@mui/material';
import { saveLikedFormSubmission } from './service/mockServer';
import CloseIcon from '@mui/icons-material/Close';
const CustomSnak = ({handleClose, open, formFields}) => {
    return(
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            // message="This is a toast message!"
          > 
            <Alert
              sx={{
                width: '100%',
                backgroundColor: '#000',
                color: '#fff',
                '& .MuiAlert-icon': {
                  color: '#fff',
                },
                '& .MuiButton-text': {
                  color: '#fff',
                },
              }}
              icon={false}
              action={
                <>
                  <Button
                    color="inherit"
                    size="small"
                    onClick={() => {
                      saveLikedFormSubmission(formFields)
                    }}
                  >
                    Like
                  </Button>
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={handleClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </>
              }
          >
            <div className='toast-msg-div'>
                <span> First Lastname</span>
                <span> emai.address@domain.com</span>
            </div>
             
          </Alert>
          </Snackbar>
    )
}
export default CustomSnak