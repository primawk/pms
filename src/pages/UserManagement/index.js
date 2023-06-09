import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Tabs, Tab } from '@mui/material';

// components
import Header from 'components/Header';
import { Filter, UserTable, RoleTable } from './UserSection';

export default function UserManagement() {
  const navigate = useNavigate();
  const { tabType } = useParams();

  const [search, setSearch] = useState({ search: '', role: '' });
  const [selectedSearch, setSelectedSearch] = useState({ search: '', role: '' });
  const [tab, setTab] = useState(tabType || 'user');

  const handleChangeSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const handleChangeTab = (e, _tab) => {
    setTab(_tab);
    if (_tab === 'user') {
      navigate('/user-management/user');
    } else {
      navigate('/user-management/role');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSelectedSearch(search);
  };

  return (
    <>
      <Header title="USER MANAGEMENT" background="user-management.png" />

      <div className="app-content pt-0">
        {tabType === 'user' && (
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Filter onSubmit={onSubmit} onChange={handleChangeSearch} filter={search} />
          </Grid>
        )}
        <div className="user-table bg-white" style={{ borderRadius: '5px' }}>
          <Tabs value={tab} onChange={handleChangeTab} style={{ marginBottom: '0px !important' }}>
            <Tab label="List Pengguna" value="user" />
            <Tab label="Role & Hak Akses" value="role" />
          </Tabs>
          {tabType === 'user' ? <UserTable search={selectedSearch} /> : <RoleTable />}
        </div>
      </div>
    </>
  );
}
