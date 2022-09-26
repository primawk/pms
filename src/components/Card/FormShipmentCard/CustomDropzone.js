import { useMemo } from 'react';
import { Icon } from '@iconify/react';
import Dropzone from 'react-dropzone';
import { Button, Grid, Box, IconButton } from '@mui/material';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  border: '2px dashed #C6C6C6',
  verticalAlign: 'middle !important',
  backgroundColor: '#FAFAFA',
  color: '#bdbdbd',
  minHeight: '100px',
  outline: 'none',
  cursor: 'pointer',
  transition: 'border .24s ease-in-out'
};
export default function CustomDropzone({ value, onChange, name, onRemove, handleOnDrop }) {
  const style = useMemo(
    () => ({
      ...baseStyle
    }),
    []
  );

  const showFile = (
    <Grid container direction="row" alignItems="stretch" spacing={3}>
      {value.length > 0 &&
        value?.map((item, i) => (
          <Grid item md={4} direction="column">
            <a
              href={URL.createObjectURL(item)}
              style={{ textDecoration: 'none', color: 'inherit' }}
              target="_blank"
              rel="noreferrer"
            >
              <center>
                <Box
                  sx={{
                    minHeight: '50px',
                    border: '1px solid #3F48C0',
                    p: 2,
                    borderRadius: '8px',
                    position: 'relative'
                  }}
                >
                  <IconButton
                    sx={{ position: 'absolute', top: 5, right: 5, background: '#E0E0E0', p: 0.2 }}
                    onClick={(e) => onRemove(e, i, name)}
                  >
                    <Icon icon="clarity:close-line" color="red" fontSize={15} />
                  </IconButton>
                  {item?.type === 'application/pdf' ? (
                    <Icon icon="bi:file-earmark-pdf" color="red" fontSize={50} />
                  ) : (
                    <Icon icon="bi:file-earmark-image" color="red" fontSize={50} />
                  )}
                </Box>
              </center>
              <p>
                {`${item.name.slice(0, 10)}${item.name.length > 10 && '...'} .${
                  item.type.split('/')[1]
                }`}
              </p>
            </a>
          </Grid>
        ))}
    </Grid>
  );
  return (
    <Dropzone
      accept="application/pdf, image/*"
      maxSize="1000000"
      multiple
      onDrop={(acceptedFiles) => handleOnDrop([...acceptedFiles], name)}
    >
      {({ getRootProps, getInputProps }) => (
        <div>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justifyContent="center"
            spacing={3}
          >
            <Grid item md={value?.length > 0 ? 6 : 12} xs={12}>
              <div>
                <div {...getRootProps({ style })}>
                  <input {...getInputProps()} onChange={onChange} name={name} />
                  <Icon icon="bi:cloud-upload" color="#C6C6C6" fontSize={70} />
                  <p style={{ textAlign: 'center', verticalAlign: 'middle !important' }}>
                    Drag files here OR
                  </p>
                  <Button variant="contained" sx={{ mt: 1 }}>
                    Upload File
                  </Button>
                </div>
                <p>*Format file: .pdf, .jpg | Ukuran file max 2Mb</p>
              </div>
            </Grid>
            {value?.length > 0 && (
              <Grid item md={6} xs={12}>
                {showFile}
              </Grid>
            )}
          </Grid>
        </div>
      )}
    </Dropzone>
  );
}
