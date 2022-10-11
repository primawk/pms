import React from 'react';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InputBankDataModal from '../../components/Modal/BankData/InputBankData';
import useAuth from 'hooks/useAuth';

// components
import Header from 'components/Header';
// import DataReport from './components/DataReport';
// import InputBankData from './InputBankData';

// custom hooks
import useModal from '../../hooks/useModal';

const BankData = () => {
  useAuth();
  const { isShowing, toggle } = useModal();
  // const [inputBankData, setBankData] = useState(false);
  // const [dataReport, setDataReport] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {/* {dataReport ? (
        <DataReport />
      ) : (
        <> */}
      <InputBankDataModal toggle={toggle} isShowing={isShowing} />
      <Header title="BANK DATA" background="dashboard.png" />
      <div className="app-content">
        <Grid container sx={{ background: 'white', display: 'flex', flexDirection: 'column' }}>
          <Grid item sx={{ fontWeight: '700', fontSize: '24px', padding: '24px 24px 0 24px' }}>
            Informasi Jenis Bank Data
          </Grid>
          {/* <Grid item sx={{ margin: '0 16px 0 16px', backgroundColor: 'green' }}> */}
          {/* use grid item container instead container inside item, case where we using padding instead margin */}
          <Grid item container spacing={2} sx={{ padding: '24px 24px 24px 24px' }}>
            <Grid item xs={3}>
              <Grid sx={{ border: 1, borderColor: 'lightGray', borderRadius: '4px' }}>
                <Grid container sx={{ justifyContent: 'space-between' }}>
                  <Grid item>
                    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Grid item sx={{ margin: '16px 0 16px 16px', fontWeight: '400' }}>
                        Total Dokumen
                      </Grid>
                      <Grid
                        item
                        sx={{ margin: '0 0 16px 16px', fontWeight: '700', fontSize: '28px' }}
                      >
                        82
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ padding: '16px 16px 0 0' }}>
                    <img src="/img/SemuaDokumen.png" alt=""></img>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid sx={{ border: 1, borderColor: 'lightGray', borderRadius: '4px' }}>
                <Grid container sx={{ justifyContent: 'space-between' }}>
                  <Grid item>
                    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Grid item sx={{ margin: '16px 0 16px 16px', fontWeight: '400' }}>
                        Dokumen Legal
                      </Grid>
                      <Grid
                        item
                        sx={{ margin: '0 0 16px 16px', fontWeight: '700', fontSize: '28px' }}
                      >
                        82
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ padding: '16px 16px 0 0' }}>
                    <img src="/img/dokumen_legal.png" alt=""></img>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid sx={{ border: 1, borderColor: 'lightGray', borderRadius: '4px' }}>
                <Grid container sx={{ justifyContent: 'space-between' }}>
                  <Grid item>
                    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Grid item sx={{ margin: '16px 0 16px 16px', fontWeight: '400' }}>
                        Dokumen Kontrak
                      </Grid>
                      <Grid
                        item
                        sx={{ margin: '0 0 16px 16px', fontWeight: '700', fontSize: '28px' }}
                      >
                        82
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ padding: '16px 16px 0 0' }}>
                    <img src="/img/dokumen_kontrak.png" alt=""></img>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid sx={{ border: 1, borderColor: 'lightGray', borderRadius: '4px' }}>
                <Grid container sx={{ justifyContent: 'space-between' }}>
                  <Grid item xs={10}>
                    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Grid item sx={{ margin: '16px 0 16px 16px', fontWeight: '400' }}>
                        Dokumen Surat Menyurat
                      </Grid>
                      <Grid
                        item
                        sx={{ margin: '0 0 16px 16px', fontWeight: '700', fontSize: '28px' }}
                      >
                        82
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ padding: '16px 16px 0 0' }} xs={2}>
                    <img src="/img/surat.png" alt=""></img>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* </Grid> */}
        </Grid>
        <Grid
          container
          sx={{
            background: 'white',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '24px',
            justifyContent: 'space-between'
          }}
        >
          <Grid item sx={{ fontWeight: '700', fontSize: '24px', padding: '30px 24px 30px 24px' }}>
            Katalog Bank Data
          </Grid>
          <Grid item sx={{ fontWeight: '700', fontSize: '24px', padding: '30px 24px 30px 24px' }}>
            <Button variant="contained" sx={{ boxShadow: 0 }} onClick={toggle}>
              Input Bank Data
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '24px',
            justifyContent: 'space-between'
          }}
          gap={0.5}
        >
          <Grid item xs={3.8} sx={{ background: 'white' }}>
            <Grid item container sx={{ display: 'flex', flexDirection: 'column' }}>
              <Grid item sx={{ fontWeight: 600, padding: '16px' }}>
                Jenis Dokumen
              </Grid>
              <Grid item sx={{ fontWeight: 400, padding: '0 16px 16px 16px' }}>
                Legal
              </Grid>
              <Grid
                item
                sx={{ color: '#3F48C0', cursor: 'pointer', padding: '0 16px 16px 16px' }}
                onClick={() => navigate('/bank-data/list')}
              >
                Lihat Selengkapnya {'>'}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3.8} sx={{ background: 'white' }}>
            <Grid item container sx={{ display: 'flex', flexDirection: 'column' }}>
              <Grid item sx={{ fontWeight: 600, padding: '16px' }}>
                Jenis Dokumen
              </Grid>
              <Grid item sx={{ fontWeight: 400, padding: '0 16px 16px 16px' }}>
                Kontrak
              </Grid>
              <Grid
                item
                sx={{ color: '#3F48C0', cursor: 'pointer', padding: '0 16px 16px 16px' }}
                onClick={() => navigate('/bank-data/list')}
              >
                Lihat Selengkapnya {'>'}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3.8} sx={{ background: 'white' }}>
            <Grid item container sx={{ display: 'flex', flexDirection: 'column' }}>
              <Grid item sx={{ fontWeight: 600, padding: '16px' }}>
                Jenis Dokumen
              </Grid>
              <Grid item sx={{ fontWeight: 400, padding: '0 16px 16px 16px' }}>
                Surat Menyurat
              </Grid>
              <Grid
                item
                sx={{ color: '#3F48C0', cursor: 'pointer', padding: '0 16px 16px 16px' }}
                onClick={() => navigate('/bank-data/list')}
              >
                Lihat Selengkapnya {'>'}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      {/* </>
      )} */}
    </>
  );
};

export default BankData;
