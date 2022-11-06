import React from 'react';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InputBankDataModal from '../../components/Modal/BankData/InputBankData';

// components
import Header from 'components/Header';
import KatalogBox from 'components/BankData/KatalogBox';
import InformasiBox from 'components/BankData/InformasiBox';
import { LoadingModal } from 'components/Modal';

// custom hooks
import useModal from '../../hooks/useModal';

const Katalog = ({ dataSummary, isLoading, isFetching }) => {
  const { isShowing, toggle } = useModal();
  const navigate = useNavigate();
  return (
    <>
      <InputBankDataModal toggle={toggle} isShowing={isShowing} />
      {isFetching && <LoadingModal />}
      <Header title="BANK DATA" background="dashboard.png" />
      <div className="app-content">
        <Grid container sx={{ background: 'white', display: 'flex', flexDirection: 'column' }}>
          <Grid item sx={{ fontWeight: '700', fontSize: '24px', padding: '24px 24px 0 24px' }}>
            Informasi Jenis Bank Data
          </Grid>
          <Grid item container spacing={2} sx={{ padding: '24px 24px 24px 24px' }}>
            <InformasiBox
              title="Total Dokumen"
              quantity={dataSummary?.all}
              image="/img/SemuaDokumen.png"
            />
            <InformasiBox
              title="Dokumen Legal"
              quantity={dataSummary?.legal}
              image="/img/dokumen_legal.png"
            />
            <InformasiBox
              title="Dokumen Kontrak"
              quantity={dataSummary?.kontrak}
              image="/img/dokumen_kontrak.png"
            />
            <InformasiBox
              title="Dokumen Surat Menyurat"
              quantity={dataSummary?.surat_menyurat}
              image="/img/surat.png"
            />
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
          <KatalogBox title="Legal" />
          <KatalogBox title="Kontrak" />
          <KatalogBox title="Surat Menyurat" />
        </Grid>
      </div>
    </>
  );
};

export default Katalog;
