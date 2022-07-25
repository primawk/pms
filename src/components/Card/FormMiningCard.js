import { useParams } from 'react-router-dom';
import {
  Typography,
  Grid,
  TextField,
  FormControl,
  MenuItem,
  Stack,
  InputAdornment
} from '@mui/material';

const measurementType = ['Sumlot SM', 'Dump Truck', 'Timbangan'];

const hillList = ['Bukit I', 'Bukit IX'];

export default function FormMiningCard() {
  const { activityType } = useParams();

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
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mb: 3 }}
        spacing={5}
      >
        <Grid item lg={5} xs={12}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Informasi Umum Kegiatan
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={10}
          >
            <Grid item container lg={4.5} xs={4.5} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Jadwal Kegiatan
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                11 April 2022, 15:00
              </Typography>
            </Grid>
            <Grid item container lg={4.5} xs={4.5} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Jenis Produk
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Biji Nikel
              </Typography>
            </Grid>
            <Grid item container lg={3} xs={4} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Block
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Utara
              </Typography>
            </Grid>
          </Grid>
          <Stack direction="column" spacing={3}>
            <Stack>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Jenis Pengukuran
              </Typography>
              <FormControl>
                <TextField select placeholder="Pilih jenis kegiatan" fullWidth size="small">
                  {measurementType.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </Stack>
            {activityType === 'ore-hauling-to-eto' && (
              <>
                <Stack>
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nama Mitra
                  </Typography>
                  <FormControl>
                    <TextField placeholder="Nama Mitra" fullWidth size="small" />
                  </FormControl>
                </Stack>
              </>
            )}
            <Typography variant="h5" sx={{ mb: 3 }}>
              Bukit Asal
            </Typography>
            <Stack>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Bukit Asal
              </Typography>
              <FormControl>
                <TextField select placeholder="Pilih jenis kegiatan" fullWidth size="small">
                  {hillList.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </Stack>
            <Stack>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Dome Asal
              </Typography>
              <FormControl>
                <TextField select placeholder="Pilih jenis kegiatan" fullWidth size="small">
                  {hillList.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </Stack>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Bukit Tujuan
            </Typography>
            <Stack>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Bukit Tujuan
              </Typography>
              <FormControl>
                <TextField select placeholder="Pilih jenis kegiatan" fullWidth size="small">
                  {hillList.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </Stack>
            <Stack>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Dome Tujuan
              </Typography>
              <FormControl>
                <TextField select placeholder="Pilih jenis kegiatan" fullWidth size="small">
                  {hillList.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </Stack>
          </Stack>
        </Grid>
        <Grid item lg={7} xs={12}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Jumlah Produksi
          </Typography>
          {activityType !== 'ore-hauling-to-eto' ? (
            <>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Jumlah Sublot
                  </Typography>
                  <FormControl>
                    <TextField
                      placeholder="Jumlah Sublot"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          paddingRight: 0
                        }
                      }}
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{
                              padding: '19px',
                              backgroundColor: (theme) => theme.palette.divider,
                              borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                              borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                            }}
                          >
                            Lot
                          </InputAdornment>
                        )
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Jumlah Tonase
                  </Typography>
                  <FormControl>
                    <TextField
                      placeholder="Jumlah Tonase"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          paddingRight: 0
                        }
                      }}
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{
                              padding: '19px',
                              backgroundColor: (theme) => theme.palette.divider,
                              borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                              borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                            }}
                          >
                            Ton
                          </InputAdornment>
                        )
                      }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </>
          ) : (
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={3}
            >
              <Grid item container lg={6} xs={6} direction="column">
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Jumlah Retase
                </Typography>
                <FormControl>
                  <TextField
                    placeholder="Jumlah Retase"
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        paddingRight: 0
                      }
                    }}
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          sx={{
                            padding: '19px',
                            backgroundColor: (theme) => theme.palette.divider,
                            borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                            borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                          }}
                        >
                          Retase
                        </InputAdornment>
                      )
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item container lg={6} xs={6} direction="column">
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Jumlah Tonase
                </Typography>
                <FormControl>
                  <TextField
                    placeholder="Jumlah Retase"
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        paddingRight: 0
                      }
                    }}
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          sx={{
                            padding: '19px',
                            backgroundColor: (theme) => theme.palette.divider,
                            borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                            borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                          }}
                        >
                          Tonase
                        </InputAdornment>
                      )
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          )}
          <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
            Kadar Ni
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
          >
            <Grid item container lg={6} xs={6} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Nilai Kadar
              </Typography>
              <FormControl>
                <TextField
                  placeholder="Nilai Kadar"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      paddingRight: 0
                    }
                  }}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          padding: '19px',
                          backgroundColor: (theme) => theme.palette.divider,
                          borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                          borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                        }}
                      >
                        %
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item container lg={6} xs={6} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Ekuivalen Logam
              </Typography>
              <FormControl>
                <TextField
                  placeholder="Ekuivalen Logam"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      paddingRight: 0
                    }
                  }}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          padding: '19px',
                          backgroundColor: (theme) => theme.palette.divider,
                          borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                          borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                        }}
                      >
                        Ton
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
            Kadar Fe
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
          >
            <Grid item container lg={6} xs={6} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Nilai Kadar
              </Typography>
              <FormControl>
                <TextField
                  placeholder="Nilai Kadar"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      paddingRight: 0
                    }
                  }}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          padding: '19px',
                          backgroundColor: (theme) => theme.palette.divider,
                          borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                          borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                        }}
                      >
                        %
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item container lg={6} xs={6} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Ekuivalen Logam
              </Typography>
              <FormControl>
                <TextField
                  placeholder="Ekuivalen Logam"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      paddingRight: 0
                    }
                  }}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          padding: '19px',
                          backgroundColor: (theme) => theme.palette.divider,
                          borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                          borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                        }}
                      >
                        Ton
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
            Kadar CO
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
          >
            <Grid item container lg={6} xs={6} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Nilai Kadar
              </Typography>
              <FormControl>
                <TextField
                  placeholder="Nilai Kadar"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      paddingRight: 0
                    }
                  }}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          padding: '19px',
                          backgroundColor: (theme) => theme.palette.divider,
                          borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                          borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                        }}
                      >
                        %
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item container lg={6} xs={6} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Ekuivalen Logam
              </Typography>
              <FormControl>
                <TextField
                  placeholder="Ekuivalen Logam"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      paddingRight: 0
                    }
                  }}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          padding: '19px',
                          backgroundColor: (theme) => theme.palette.divider,
                          borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                          borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                        }}
                      >
                        Ton
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
            Kadar SiMgO
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
          >
            <Grid item container lg={6} xs={6} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Nilai Kadar
              </Typography>
              <FormControl>
                <TextField
                  placeholder="Nilai Kadar"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      paddingRight: 0
                    }
                  }}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          padding: '19px',
                          backgroundColor: (theme) => theme.palette.divider,
                          borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                          borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                        }}
                      >
                        %
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item container lg={6} xs={6} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Ekuivalen Logam
              </Typography>
              <FormControl>
                <TextField
                  placeholder="Ekuivalen Logam"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      paddingRight: 0
                    }
                  }}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          padding: '19px',
                          backgroundColor: (theme) => theme.palette.divider,
                          borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                          borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                        }}
                      >
                        Ton
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
