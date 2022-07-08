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
  const [isSearch, setIsSearch] = useState(false);
  const [tab, setTab] = useState(tabType || '');

  const handleChangeSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const handleChangeTab = (e, _tab) => {
    setTab(_tab);
    if (_tab === 0) {
      navigate('/user-management/user');
    } else {
      navigate('/user-management/role');
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
            <Tab label="List Pengguna" value="user" />
            <Tab label="Role & Hak Akses" value="role" />
          </Tabs>
          {tab === 'user' ? <UserTable search={search} isSearch={isSearch} /> : <RoleTable />}
        </div>
      </div>
    </>
  );
}
