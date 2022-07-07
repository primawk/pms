import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, Tabs, Tab } from '@mui/material';

// components
import Header from 'components/Header';
import { Filter, UserTable, RoleTable } from './UserSection';

export default function UserManagement() {
  const location = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = useState({ search: '', role: '' });
  const [isSearch, setIsSearch] = useState(false);
  const [tab, setTab] = useState(location?.state?.value || 0);

  const handleChangeSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const handleChangeTab = (e, _tab) => {
    setTab(_tab);
    if (_tab === 0) {
      navigate('', { state: { value: _tab } });
    } else {
      navigate('role', { state: { value: _tab } });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSearch(!isSearch);
  };

  return (
    <>
      <Header title="USER MANAGEMENT" background="user-management.png" />

      <div className="app-content pt-0">
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Filter onSubmit={onSubmit} onChange={handleChangeSearch} filter={search} />
        </Grid>
        <div className="user-table bg-white" style={{ borderRadius: '5px' }}>
          <Tabs value={tab} onChange={handleChangeTab} style={{ marginBottom: '0px !important' }}>
            <Tab label="List Pengguna" />
            <Tab label="Role & Hak Akses" />
          </Tabs>
          {tab === 0 && <UserTable search={search} isSearch={isSearch} />}
          {tab === 1 && <RoleTable />}
        </div>
      </div>
    </>
  );
}
