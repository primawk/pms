import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Tab, Tabs, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import ArrowIcon from '@iconify/icons-bi/caret-down-fill';

// components
import Header from 'components/Header';
import { AllActivity, SpecificActivity } from './MiningSection';

// custom button
const WhiteButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  '&:hover': {
    backgroundColor: '#E5E5FE'
  }
}));

const menuList = [
  { value: 'all-activity', label: 'Semua' },
  { value: 'ore-getting', label: 'Ore Getting' },
  { value: 'ore-hauling-to-eto', label: 'Ore Hauling Front to ETO' },
  { value: 'eto-to-efo', label: 'Ore Hauling ETO to EFO' }
];

export default function MiningActivity() {
  const { activityType } = useParams();
  const navigate = useNavigate();

  const [menuTab, setMenuTab] = useState(activityType || '');

  const handleChangeTab = (event, _menuTab) => {
    setMenuTab(_menuTab);
    switch (_menuTab) {
      case 'ore-getting':
        navigate('/mining-activity/ore-getting');
        break;
      case 'ore-hauling-to-eto':
        navigate('/mining-activity/ore-hauling-to-eto');
        break;
      case 'eto-to-efo':
        navigate('/mining-activity/eto-to-efo');
        break;
      default:
        navigate('/mining-activity/all-activity');
    }
  };

  return (
    <>
      <Header title="KEGIATAN TAMBANG" background="dashboard.png">
        <WhiteButton
          variant="contained"
          size="medium"
          sx={{ background: 'white', fontColor: 'black' }}
          endIcon={<Icon width={10} height={10} icon={ArrowIcon} color="#gray" />}
        >
          Periode | Hari Ini
        </WhiteButton>
      </Header>

      <div>
        <Grid sx={{ background: 'white' }}>
          <Tabs
            value={menuTab}
            onChange={handleChangeTab}
            textColor="primary"
            indicatorColor="primary"
            TabIndicatorProps={{
              sx: {
                bgcolor: '#3F48C0',
                height: '4px'
              }
            }}
          >
            {menuList?.map((item) => (
              <Tab
                key={item.value}
                value={item.value}
                label={item.label}
                sx={
                  item.value === menuTab
                    ? {
                        backgroundColor: '#E5E5FE',
                        border: '1px solid #3F48C0',
                        borderRadius: '4px',
                        transition: '0.3s'
                      }
                    : {}
                }
              />
            ))}
          </Tabs>
        </Grid>
        {menuTab === 'all-activity' ? <AllActivity /> : <SpecificActivity />}
      </div>
    </>
  );
}
