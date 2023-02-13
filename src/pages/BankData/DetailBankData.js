import React from 'react';
import { Grid, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import ListEdit from '../../components/BankData/ListEdit';

// components
import { LoadingModal } from 'components/Modal';
import Banner from 'components/BankData/Banner';

// custom hooks
import useAuth from 'hooks/useAuth';

// services
import BankDataService from '../../services/BankDataServices';

const DetailBankData = () => {
  useAuth();
  // const navigate = useNavigate();
  const location = useLocation();
  // const [banner, setBanner] = useState(false);
  // const { isShowing: isShowingDelete, toggle: toggleDelete } = useModal();
  // const { isGranted } = useAuth();

  const { id } = useParams();

  const { data, isLoading, isFetching } = useQuery(
    ['data', id],
    async () =>
      await BankDataService.getBankData({
        page: 1,
        id: `${id}`
      })
  );

  const dataReport = data?.data?.data;

  // const attachment = dataReport.attachment;

  // checking expiration date
  // useEffect(() => {
  //   let expDate = new Date(data?.data?.data[0].date); // convert string to date format
  //   let dateNow = new Date();
  //   if (expDate - dateNow <= 1000 * 3600 * 24 * 7 * 3) {
  //     // console.log('Expires in less than 3 weeks.');
  //     setBanner(true);
  //   } else {
  //     setBanner(false);
  //   }
  // }, [data]);

  // const d = String(new Date(dataReport?.updated_at));

  return (
    <>
      <div
        style={{
          backgroundColor: '#F5F5F5',
          width: '100%',
          height: '100%',
          overflow: 'auto', // it makes this container follow the height of its content
          position: 'relative'
        }}
      >
        <Navbar />

        {isLoading && isFetching && <LoadingModal />}

        <Grid
          container
          sx={{
            display: 'flex',
            //   alignItems: 'flex-start',
            flexDirection: 'column',
            backgroundColor: 'white',
            width: '90%',
            marginTop: '6rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '10rem',
            borderRadius: '4px'
          }}
        >
          <Grid
            item
            container
            sx={{
              padding: '1rem',
              borderBottom: 1,
              borderBottomColor: '#E0E0E0'
            }}
          >
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Grid item xs={4}>
                <h2 style={{ paddingLeft: '1rem' }}>Bank Data</h2>
              </Grid>
              {location?.state ? <Banner /> : null}
            </Grid>
          </Grid>
          {/*  */}
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Grid item>
              <h2 style={{ padding: '2rem', fontSize: '16px', fontWeight: '700' }}>
                Dokumen Bank Data
              </h2>
            </Grid>
            <Grid item sx={{ padding: '0 2rem 2rem 2rem' }}>
              <Button
                // loading={loading}
                // disabled={disabled}
                type="submit"
                variant="contained"
                sx={{ boxShadow: '0' }}
              >
                Upload File Terbaru
              </Button>
            </Grid>
            {/* list */}
            {dataReport?.map((data) => (
              <ListEdit data={data} />
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DetailBankData;
