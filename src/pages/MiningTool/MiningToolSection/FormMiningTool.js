import { Grid, Stack, Typography } from '@mui/material';

// components
import FormMiningToolCard from 'components/Card/FormMiningToolCard';

export default function FormMiningTool() {
  return (
    <>
      <div className="app-content">
        <div
          style={{
            borderTopRightRadius: '5px',
            borderTopLeftRadius: '5px',
            padding: '20px'
          }}
          className="bg-white"
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={5}
          >
            <Grid item>
              <Stack direction="row" spacing={2}>
                <Typography variant="h4">Penggunaan Alat Tambang</Typography>
              </Stack>
            </Grid>
          </Grid>
        </div>
        <hr />
        <FormMiningToolCard />
      </div>
    </>
  );
}
