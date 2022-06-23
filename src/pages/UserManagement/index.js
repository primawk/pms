import React, { useState } from 'react';
import { Grid, Tabs, Tab } from '@mui/material';

// components
import Header from 'components/Header';
import { Filter, UserTable, RoleTable } from './UserSection';

export default function UserManagement() {
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState(0);

  const handleChangeTab = (e, _tab) => {
    setTab(_tab);
  };

  const onSubmit = (_seacrh) => {
    setSearch(_seacrh);
  };
  return (
    <>
      <Header title="USER MANAGEMENT" background="user-management.png" />

      <div className="app-content pt-0">
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Filter onSubmit={onSubmit} />
        </Grid>
        <div className="user-table" style={{ background: 'white', borderRadius: '5px' }}>
          <Tabs value={tab} onChange={handleChangeTab} style={{ marginBottom: '0px !important' }}>
            <Tab label="List Pengguna" />
            <Tab label="Role & Hak Akses" />
          </Tabs>
          {tab === 0 && <UserTable search={search} />}
          {tab === 1 && <RoleTable />}
        </div>
      </div>
    </>
  );
}
