import { Typography, Grid, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs';

// components
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';

export default function ShipmentDetailCard() {
  const { id } = useParams();

  const { data, isFetching } = useQuery(
    ['mining-activity', 'detail-activity', id],
    () => MiningActivityService.getActivityById({ id }),
    { keepPreviousData: true, enabled: !!id }
  );

  const detailActivity = data?.data?.data;

  const ShowFile = ({ value }) => {
    const openFiles = async (item) => {
      try {
        const response = await MiningActivityService.getFiles(item);
        const file = new Blob([response.data], { type: response?.data.type });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL, '_blank', 'noopener,noreferrer').focus();
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <Grid container direction="row" alignItems="stretch" spacing={3}>
        {value?.length > 0 ? (
          value?.map((item) => (
            <Grid
              item
              md={2}
              direction="column"
              key={item}
              sx={{ cursor: 'pointer' }}
              onClick={() => openFiles(item)}
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
                  {item?.split('.').pop() === 'pdf' ? (
                    <Icon icon="bi:file-earmark-pdf" color="red" fontSize={50} />
                  ) : (
                    <Icon icon="bi:file-earmark-image" color="red" fontSize={50} />
                  )}
                </Box>
              </center>
              <p>{item}</p>
            </Grid>
          ))
        ) : (
          <Grid item md={2} direction="column">
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
                <Icon icon="fluent:document-dismiss-20-regular" color="red" fontSize={50} />
              </Box>
            </center>
            <p>Belum Ada File</p>
          </Grid>
        )}
      </Grid>
    );
  };

  return (
    <div
      style={{
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        padding: '20px'
      }}
      className="bg-white"
    >
      {isFetching && <LoadingModal />}
      {data && (
        <>
          <Typography variant="h4" sx={{ mb: 3 }}>
            {detailActivity?.hill_name}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item lg={6} xs={12}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Informasi Umum Kegiatan
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                columnSpacing={10}
                rowSpacing={4}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Jadwal Kegiatan
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity && dayjs(detailActivity?.date).format('DD MMMM YYYY')}, ${
                      detailActivity && detailActivity?.time
                    }`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Jenis Produk
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {detailActivity?.product_type || '-'}
                  </Typography>
                </Grid>
                <Grid item container lg={12} xs={12} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nomor Urut Pengapalan
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {detailActivity?.shipment_number || '-'}
                  </Typography>
                </Grid>
                <Grid item container lg={12} xs={12} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Jenis Pemasaran
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {detailActivity?.shipment_type || '-'}
                  </Typography>
                </Grid>
                <Grid item container lg={12} xs={12} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Jenis Penjualan
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {detailActivity?.sales_type || '-'}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Informasi Pengiriman
              </Typography>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Nama PBM
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                {detailActivity?.pbm_name || '-'}
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nama Pembeli
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {detailActivity?.buyer_name || '-'}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Lokasi Tujuan
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {detailActivity?.dest_loc || '-'}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Lokasi Titik Serah ( Provinsi )
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {detailActivity?.dest_loc_prov || '-'}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Lokasi Titik Serah ( Kabupaten / Kota )
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {detailActivity?.dest_loc_city || '-'}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nama Jenis Pengiriman
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {detailActivity?.shipping_type || '-'}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nama Alat Pengiriman
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {detailActivity?.shipping_name || '-'}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Jumlah Pemasaran
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Total Volume Pengiriman
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${
                      detailActivity?.tonnage_total
                        ?.map((item) => parseInt(item, 10))
                        ?.reduce((a, b) => a + b, 0) || '0'
                    } Ton`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Asal Tumpukan EFO
                  </Typography>
                  {detailActivity?.dome_origin_id?.length > 0 &&
                    detailActivity?.dome_origin_id?.map((item, i) => (
                      <Typography key={i} variant="body1">
                        {`${detailActivity?.dome_origin_name?.[i] || '-'} ( ${
                          detailActivity?.tonnage_total?.[i] || 0
                        } Ton ) `}
                      </Typography>
                    ))}
                </Grid>
              </Grid>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Kadar Ni
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.ni_level || '0'} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Ekuivalen Logam
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.ni_metal_equivalent || '0'} Ton`}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Kadar Fe
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.fe_level || '0'} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Ekuivalen Logam
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.fe_metal_equivalent || '0'} Ton`}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Kadar CO
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.co_level || '0'} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Ekuivalen Logam
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.co_metal_equivalent || '0'} Ton`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={12} md={12}>
              <hr />
              <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                Upload Dokumen
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={10}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    SKAB
                  </Typography>
                  <ShowFile value={detailActivity?.skab} />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    Bukti Bayar
                  </Typography>
                  <ShowFile value={detailActivity?.bukti_bayar} />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    Bill Of Loading
                  </Typography>
                  <ShowFile value={detailActivity?.bill_loading} />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    Draught Survey
                  </Typography>
                  <ShowFile value={detailActivity?.draught_survey} />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    Cargo Manifest
                  </Typography>
                  <ShowFile value={detailActivity?.cargo_manifest} />
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    SPB
                  </Typography>
                  <ShowFile value={detailActivity?.spb} />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    Shipping Instruction
                  </Typography>
                  <ShowFile value={detailActivity?.shipping_instruction} />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    Packing List
                  </Typography>
                  <ShowFile value={detailActivity?.packing_list} />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    LHV
                  </Typography>
                  <ShowFile value={detailActivity?.lhv} />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    Invoice Kontrak SPAL
                  </Typography>
                  <ShowFile value={detailActivity?.royalty} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={12} md={12}>
              <hr />
              <Typography variant="h5" sx={{ mt: 3 }}>
                Informasi Bongkat Muat
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
                sx={{ mb: 3 }}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    COA MUAT
                  </Typography>
                  <ShowFile value={detailActivity?.coa_muat} />
                  <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                    Jumlah Tonase
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Realisasi Tonase
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.muat_tonnage_total || '0'} Ton`}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 3 }}>
                    Kadar Ni
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.muat_ni_level || '0'} %`}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 3 }}>
                    Kadar Fe
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.muat_fe_level || '0'} %`}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 3 }}>
                    Kadar CO
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.muat_co_level || '0'} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    COA BONGKAR
                  </Typography>
                  <ShowFile value={detailActivity?.coa_bongkar} />
                  <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                    Jumlah Tonase
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Realisasi Tonase
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.bongkar_tonnage_total || '0'} %`}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 3 }}>
                    Kadar Ni
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.bongkar_ni_level || '0'} %`}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 3 }}>
                    Kadar Fe
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.bongkar_fe_level || '0'} %`}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 3 }}>
                    Kadar CO
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.bongkar_co_level || '0'} %`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}
