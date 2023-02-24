/* eslint-disable react-hooks/exhaustive-deps */
import { Typography, Grid } from '@mui/material';
import dayjs from 'dayjs';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';

// custom hooks with context
import { useShipmentContext } from 'context/ShipmentContext';

// components
import Footer from 'components/Footer';
import CustomDropzone from './CustomDropzone';

export default function SecondStep() {
  const { handleBack, handleContinue, value } = useShipmentContext();

  // shipment schema
  const ShipmentSchema = Yup.object().shape({});

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: value,
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
    if (typeof _value[index] === 'string') {
      const _oldFileChange = values?.file_change;
      if (values?.file_change[name]?.length > 0) {
        _oldFileChange[name].push(values[name][index]);
      } else {
        _oldFileChange[name] = [values[name][index]];
        setFieldValue('file_change', _oldFileChange);
      }
    }
    _value.splice(index, 1);
    setFieldValue(name, [..._value]);
  };

  const handleOnDrop = (value, name) => {
    setFieldValue(name, [...values[name], ...value]);
  };

  console.log(values);

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
                      {values?.pbm_name || '-'}
                    </Typography>
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Nama Pembeli
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {values?.buyer_name || '-'}
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
                      SKAB
                    </Typography>
                    <CustomDropzone
                      name="skab"
                      value={values?.skab}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'skab')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Bukti Bayar
                    </Typography>
                    <CustomDropzone
                      name="bukti_bayar"
                      value={values?.bukti_bayar}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'bukti_bayar')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Bill Of Loading
                    </Typography>
                    <CustomDropzone
                      name="bill_loading"
                      value={values?.bill_loading}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'bill_loading')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Draught Survey
                    </Typography>
                    <CustomDropzone
                      name="draught_survey"
                      value={values?.draught_survey}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'draught_survey')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Cargo Manifest
                    </Typography>
                    <CustomDropzone
                      name="cargo_manifest"
                      value={values?.cargo_manifest}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'cargo_manifest')}
                      onRemove={handleRemoveImage}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      SPB
                    </Typography>
                    <CustomDropzone
                      name="spb"
                      value={values?.spb}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'spb')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Shipping Instruction
                    </Typography>
                    <CustomDropzone
                      name="shipping_intruction"
                      value={values?.shipping_intruction}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'shipping_intruction')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Packing List
                    </Typography>
                    <CustomDropzone
                      name="packing_list"
                      value={values?.packing_list}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'packing_list')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      LHV
                    </Typography>
                    <CustomDropzone
                      name="lhv"
                      value={values?.lhv}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'lhv')}
                      onRemove={handleRemoveImage}
                    />
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Invoice Kontrak SPAL
                    </Typography>
                    <CustomDropzone
                      name="packing_list"
                      value={values?.packing_list}
                      handleOnDrop={handleOnDrop}
                      onChange={(e) => handleChangeImage(e, 'packing_list')}
                      onRemove={handleRemoveImage}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Footer handleBack={() => handleBack(values)} step={2} />
          </Form>
        </FormikProvider>
      </>
    </div>
  );
}
