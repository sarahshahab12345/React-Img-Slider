import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function SliderComp() {

  const [data, setdata] = useState([]);
  const [selectedImg, setselectedImg] = useState(0);

  const fetchData = async () => {
    let response = await axios.get("https://picsum.photos/v2/list?page=1&limit=6");
    setdata(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
        <Typography variant='h4' textAlign={'center'}
          sx={{
            fontFamily: "'Lobster', cursive",
          }}>
          Img Slider
        </Typography>

        {
          data.map((e) => {
            return (
              selectedImg == e.id &&
              (
                <Box
                  key={e.id}
                  height={300}
                  sx={{ marginTop: 4 }}
                  component={'img'}
                  src={e.download_url}
                >
                </Box>

              )
            )
          })
        }

        <Box display="flex" width={450} justifyContent="space-between" sx={{ marginTop: 3 }}>
          <Button
            onClick={() => setselectedImg(selectedImg <= 0 ? data.length - 1 : selectedImg - 1)}
            sx={{ minWidth: '40px', height: '40px', bgcolor: '#fff', color: 'black', borderRadius: '50%', boxShadow: 3 }}
          >
            <FaArrowLeft />
          </Button>

          <Button
            onClick={() => setselectedImg(selectedImg >= data.length - 1 ? 0 : selectedImg + 1)}
            sx={{ minWidth: '40px', height: '40px', bgcolor: '#fff', color: 'black', borderRadius: '50%', boxShadow: 3 }}
          >
            <FaArrowRight />
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default SliderComp