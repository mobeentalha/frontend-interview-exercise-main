import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {fetchLikedFormSubmissions} from './service/mockServer'
export default function Content() {
  const [likeToast, setLikeToast] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchLikedFormSubmissions();
        if(res.status === 200){
          console.log('res ', res);
          
          setLikeToast(res.formSubmissions)
        }
        else {
          setLikeToast({})
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])
  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>

      <Typography variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
        {likeToast?.length >0  && likeToast.map((val, ind) => (
          <div key={ind} className='like-form-div'>
            <span> Email: {val.email}</span> 
            <span> First Name : {val.firstName} </span>
            <span> Last Name : {val.lastName} </span>
          </div>
        ))}
      </Typography>
    </Box>
  );
}
