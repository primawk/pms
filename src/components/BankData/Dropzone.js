import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Grid, Box, Button } from '@mui/material';
import pdf from '../../assets/Images/pdf.png';
import { Icon } from '@iconify/react';

const Dropzone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  console.log(acceptedFiles);

  //   const files = acceptedFiles.map((item, i) => {
  //     return (
  //       <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
  //         <Grid
  //           sx={{
  //             backgroundColor: 'white',
  //             width: '7.438rem',
  //             height: '9.063rem',
  //             border: '1px solid #3F48C0',
  //             borderRadius: '4px',
  //             cursor: 'pointer'
  //           }}
  //           // onClick={onButtonPreview}
  //         >
  //           <Grid
  //             container // container to make the justify content works
  //             sx={{
  //               display: 'flex',
  //               flexDirection: 'column',
  //               justifyContent: 'center',
  //               alignContent: 'center',
  //               marginTop: '0.5rem'
  //             }}
  //           >
  //             <Grid item sx={{ marginLeft: '5rem' }}>
  //               <Icon icon="ion:close-circle-sharp" color="white" fontSize={24} />
  //             </Grid>
  //             <Grid item sx={{ margin: '1rem auto 0 auto' }} fontSize={80}>
  //               <img src={pdf} alt=""></img>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //         <Box fontSize={'0.875rem'}>{item}</Box>
  //       </Grid>
  //     );
  //   });

  return (
    <>
      <Grid item container sx={{ display: 'flex', flexDirection: 'row' }} gap={2}>
        <Grid item sx={{}}>
          <Grid
            container // container to make the justify content works
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: '#FAFAFA',
              height: '14.563rem',
              border: '1px dashed #C6C6C6 ',
              borderRadius: '8px'
            }}
          >
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <Grid item sx={{ margin: '2rem auto auto auto' }}>
                <Icon icon="bi:cloud-upload" color="#C6C6C6" fontSize={50} />
              </Grid>
              <Grid item sx={{ margin: 'auto' }} fontSize={'0.875rem'}>
                Upload file
              </Grid>
              <Grid item sx={{ margin: 'auto' }} fontSize={'0.875rem'}>
                disini. Ukuran max
              </Grid>
              <Grid item sx={{ margin: 'auto', marginBottom: '1rem' }} fontSize={'0.875rem'}>
                file 5Mb.
              </Grid>
              <Grid item sx={{ margin: 'auto' }} fontSize={'0.875rem'}></Grid>
            </div>
          </Grid>
          <Box sx={{ fontSize: '14px' }}>*Format file: .pdf, .jpg | Ukuran file max 5Mb</Box>
        </Grid>

        {/* attachment */}
        {/* map uses return to iterate */}
        {/* {files} */}
        {/* {acceptedFiles
          ? acceptedFiles.map((item, i) => {
              return (
                <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Grid
                    sx={{
                      backgroundColor: 'white',
                      width: '7.438rem',
                      height: '9.063rem',
                      border: '1px solid #3F48C0',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                    // onClick={onButtonPreview}
                  >
                    <Grid
                      container // container to make the justify content works
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: '0.5rem'
                      }}
                    >
                      <Grid item sx={{ marginLeft: '5rem' }}>
                        <Icon icon="ion:close-circle-sharp" color="white" fontSize={24} />
                      </Grid>
                      <Grid item sx={{ margin: '1rem auto 0 auto' }} fontSize={80}>
                        <img src={pdf} alt=""></img>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Box fontSize={'0.875rem'}>{item}</Box>
                </Grid>
              );
            })
          : null} */}
      </Grid>
    </>
  );
};

export default Dropzone;
