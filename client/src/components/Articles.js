import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { getNews } from '../services/api';

const Articles = () => {

    useEffect(()=>{
       
    },[]);

const dailyNews = async() =>{
    let response = await getNews();
}

  return (
    <Box>
        Articles
    </Box>
  )
}

export default Articles