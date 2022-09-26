/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';

// custom hooks

// components
import Footer from 'components/Footer';
import CustomDropzone from './CustomDropzone';
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';

export default function SecondStep({ handleBack, handleContinue }) {
  const { activityType, id } = useParams();
  const navigate = useNavigate();
  const prevState = useLocation().state;

  const { data, isFetching } = useQuery(
    ['mining-activity', 'detail-activity', id],
    () => MiningActivityService.getActivityById({ id }),
    { keepPreviousData: true, enabled: !!id }
  );

  const detailActivity = data?.data?.data;

  // shipment schema
  const ShipmentSchema = Yup.object().shape({});

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      activity_type: id ? detailActivity?.activity_type : prevState?.activity_type,
      activity_code: id ? detailActivity?.activity_code : null,
      date: id ? detailActivity?.date : prevState?.date,
      time: id ? detailActivity?.time : prevState?.time,
      product_type: id ? detailActivity?.product_type : prevState?.product_type,
      shipment_instruction: []
    },
    validationSchema: ShipmentSchema,
    onSubmit: (values) => {
      handleContinue(values);
    }
  });

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue, values } = formik;

  const handleChangeImage = (e, name) => {
    setFieldValue(name, [...values[name], ...e.target?.files]);
  };

  const handleRemoveImage = (e, index, name) => {
    e.preventDefault();
    const _value = [...values[name]];
    _value.splice(index, 1);
    setFieldValue(name, [..._value]);
  };

  const handleOnDrop = (value, name) => {
    setFieldValue(name, [...values[name], ...value]);
  };

  useEffect(() => {
    if (id === undefined && !values?.activity_type && !values?.date) {
      navigate(-1);
      navigate(0);
    }
  }, []);

  return (
    <div
      style={{
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        padding: '20px',
        borderBottom: '1px solid #E0E0E0',
        paddingBottom: '60px'
      }}
      className="bg-white"
    >
      {isFetching && <LoadingModal />}
      <>
        <FormikProvider value={formik}>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ mb: 3 }}
              spacing={5}
            >
              <Grid item lg={6} xs={12}>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Informasi Umum Kegiatan
                </Typography>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={10}
                >
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Jadwal Kegiatan
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {`${values && dayjs(values?.date).format('DD MMMM YYYY')}, ${
                        values && values?.time
                      }`}
                    </Typography>
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Jenis Produk
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {values?.product_type}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Informasi Pengiriman
                </Typography>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={10}
                >
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Nama PBM
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      PT. Nama PBM
                    </Typography>
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Nama Pembeli
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      PT. Nama Pembeli
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12}>
                <hr />
                <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                  Upload Dokumen
                </Typography>
                <Grid
                  container
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="space-between"
                  spacing={3}
                >
                  <Grid item md={6} sm={12} xs={12}>
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Shipping Instruction
                    </Typography>
                    <CustomDropzone
                      name="shipment_instruction"
                      value={values?.shipment_instruction}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'shipment_instruction')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Siping Instruksi
                    </Typography>
                    <CustomDropzone
                      name="shipment_instruction"
                      value={values?.shipment_instruction}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'shipment_instruction')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Draught Survei
                    </Typography>
                    <CustomDropzone
                      name="shipment_instruction"
                      value={values?.shipment_instruction}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'shipment_instruction')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Bukti Bayar Royalti
                    </Typography>
                    <CustomDropzone
                      name="shipment_instruction"
                      value={values?.shipment_instruction}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'shipment_instruction')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Bill of Loading
                    </Typography>
                    <CustomDropzone
                      name="shipment_instruction"
                      value={values?.shipment_instruction}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'shipment_instruction')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Cargo Manifest
                    </Typography>
                    <CustomDropzone
                      name="shipment_instruction"
                      value={values?.shipment_instruction}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'shipment_instruction')}
                      onRemove={handleRemoveImage}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Packing List
                    </Typography>
                    <CustomDropzone
                      name="shipment_instruction"
                      value={values?.shipment_instruction}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'shipment_instruction')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Siping Instruksi
                    </Typography>
                    <CustomDropzone
                      name="shipment_instruction"
                      value={values?.shipment_instruction}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'shipment_instruction')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      SKAB
                    </Typography>
                    <CustomDropzone
                      name="shipment_instruction"
                      value={values?.shipment_instruction}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'shipment_instruction')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      LHV
                    </Typography>
                    <CustomDropzone
                      name="shipment_instruction"
                      value={values?.shipment_instruction}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'shipment_instruction')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      SPB
                    </Typography>
                    <CustomDropzone
                      name="shipment_instruction"
                      value={values?.shipment_instruction}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'shipment_instruction')}
                      onRemove={handleRemoveImage}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Footer handleBack={handleBack} step={2} />
          </Form>
        </FormikProvider>
      </>
    </div>
  );
}
