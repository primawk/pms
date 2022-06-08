import React from 'react';
import { Grid } from '@mui/material';

// components
import Header from 'components/Header';
import { Filter } from './UserSection';
import BasicTable from 'components/Table/BasicTable/BasicTable';

const headCells = [
  {
    id: 'created_at',
    numeric: false,
    disablePadding: false,
    label: 'DIBUAT PADA'
  },
  {
    id: 'username',
    numeric: false,
    disablePadding: false,
    label: 'USERNAME'
  },
  {
    id: 'full_name',
    numeric: false,
    disablePadding: false,
    label: 'NAMA LENGKAP'
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: 'NOMOR TELEPON'
  },
  {
    id: 'birthdate',
    numeric: false,
    disablePadding: false,
    label: 'TANGGAL LAHIR'
  },
  {
    id: 'role',
    numeric: false,
    disablePadding: false,
    label: 'ROLE'
  }
];

const tableData = [
  {
    id: 0,
    created_at: '20/11/2000',
    username: 'syarif',
    full_name: 'Syarif Hidayat',
    phone: '0895385293200',
    birthdate: '09/05/2003',
    role: 'Super Admin'
  },
  {
    id: 1,
    created_at: '20/11/2000',
    username: 'syarif',
    full_name: 'Syarif Hidayat',
    phone: '0895385293200',
    birthdate: '09/05/2003',
    role: 'Super Admin'
  },
  {
    id: 2,
    created_at: '20/11/2000',
    username: 'syarif',
    full_name: 'Syarif Hidayat',
    phone: '0895385293200',
    birthdate: '09/05/2003',
    role: 'Super Admin'
  },
  {
    id: 3,
    created_at: '20/11/2000',
    username: 'syarif',
    full_name: 'Syarif Hidayat',
    phone: '0895385293200',
    birthdate: '09/05/2003',
    role: 'Super Admin'
  },
  {
    id: 4,
    created_at: '20/11/2000',
    username: 'syarif',
    full_name: 'Syarif Hidayat',
    phone: '0895385293200',
    birthdate: '09/05/2003',
    role: 'Super Admin'
  }
];

const actions = [
  {
    title: 'Tambah User',
    label: 'tambah user',
    icon: 'person_add',
    function: () => null
  }
];

export default function UserManagement() {
  return (
    <>
      <Header title="USER MANAGEMENT" background="user-management.png" />

      <div className="app-content pt-0">
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Filter />
        </Grid>
        <div className="user-table">
          <BasicTable
            headCells={headCells}
            rows={tableData}
            actions={actions}
            edit
            remove
            title="User"
          />
        </div>
      </div>
    </>
  );
}
