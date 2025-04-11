import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {fetchLikedFormSubmissions} from './service/mockServer'
export default function Content() {
  const [likeToast, setLikeToast] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchLikedFormSubmissions();
        if(res.status === 200){
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
        {likeToast && Object.keys(likeToast).length > 0 && (
          <>
            <span> Email : {likeToast.email} </span>
            <span> First Name : {likeToast.firstName} </span>
            <span> Last Name : {likeToast.lastName} </span>
          </>
        )}
      </Typography>
    </Box>
  );
}
