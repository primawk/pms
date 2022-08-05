import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// components
import CustomModal from 'components/Modal/CustomModal/CustomModal';
import { FormInventorySm, FormInventoryEfo } from 'components/Form';

const EditInventory = ({ isShowing, toggle }) => {
  const { dataType } = useParams();
  return (
    <CustomModal isShowing={isShowing} toggle={toggle} width="40vw">
      <div style={{ padding: '30px' }}>
        <h2 style={{ paddingBottom: '40px', textAlign: 'center' }}>Edit Inventory</h2>
        {dataType === 'inventory-sm' && <FormInventorySm toggle={toggle} />}
        {dataType === 'inventory-eto' && null}
        {dataType === 'inventory-efo' && <FormInventoryEfo toggle={toggle} />}
      </div>
      {/* <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
            <Box
              sx={{
                height: '28.875rem',
                width: '28.563rem',
                fontSize: '0.875rem',
                border: '1px solid #E0E0E0',
                borderRadius: '4px 4px 0px 0px'
              }}
            >
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  border: '1px solid #E0E0E0',
                  borderBottom: '1',
                  justifyContent: 'flex-end'
                }}
              >
                <Grid item sx={{ margin: '0.7rem auto 0.5rem 1rem' }}>
                  Bukit I
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: '#3F48C0',
                    paddingTop: '0.5rem',
                    color: 'white',
                    fontSize: '0.875rem',
                    padding: '12px',
                    cursor: 'pointer'
                  }}
                >
                  + Tambah Bukit
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: '#E5E5FE',
                    paddingTop: '0.5rem',
                    color: '#3F48C0',
                    fontSize: '0.875rem',
                    padding: '12px',
                    border: '1px solid #3F48C0',
                    borderRadius: '0px 4px 0px 0px',
                    cursor: 'pointer'
                  }}
                >
                  <Grid container>
                    <Grid item>
                      <Icon icon="ant-design:delete-filled" color="#3f48c0" />
                    </Grid>
                    <Grid item sx={{ marginLeft: '0.5rem' }}>
                      Hapus Bukit
                    </Grid>
                  </Grid>
                </Grid>
              </Grid> */}

      {/* Dome
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '1.5rem'
                }}
              >
                <Dome />
                <Dome />
                <Dome />
              </Grid>
              <Grid item sx={{ margin: '1rem 1rem 1rem 14.4rem' }}>
                <Button
                  variant="outlined"
                  sx={{ fontWeight: '400', width: '10.813rem', backgroundColor: '#E5E5FE' }}
                  // onClick={toggle}
                >
                  + Tambah Dome
                </Button>
              </Grid>
            </Box>
          </Grid> */}

      {/* Button
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              margin: 'auto 0 1.5rem 0'
            }}
          >
            <Grid item sx={{ marginRight: '1rem' }}>
              <Button
                variant="outlined"
                sx={{ fontWeight: '400', width: '10.813rem' }}
                onClick={toggle}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  boxShadow: '0',
                  fontWeight: '400',
                  marginRight: '1.5rem',
                  width: '10.813rem'
                }}
                // onClick={() => navigate(`/${jenisLaporan}`)}
              >
                Save
              </Button>
            </Grid>
          </Grid> */}
    </CustomModal>
  );
};

EditInventory.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  width: PropTypes.string
};

export default EditInventory;
