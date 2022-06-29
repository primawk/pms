import React from 'react';
import PropTypes from 'prop-types';

// custom hooks
import useModal from 'hooks/useModal';

// components
import { FormUser } from '.';
import CustomPagination from 'components/Pagination';
import BasicTable from 'components/Table/BasicTable/BasicTable';

export default function UserTable({ search, isSearch }) {
  // const required variable inside component ( fixed value )
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
    },
    {
      id: 'action',
      numeric: false,
      disablePadding: false,
      label: 'Action',
      cell: (row) => <p>{row.id}</p>
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

  const { isShowing, toggle } = useModal();

  const actions = [
    {
      title: 'Tambah User',
      label: 'tambah user',
      icon: 'person_add',
      function: toggle
    }
  ];

  console.log(search, isSearch);
  return (
    <>
      <BasicTable
        headCells={headCells}
        withSelect
        rows={tableData}
        actions={actions}
        edit
        onEdit={toggle}
        remove
        title="User"
      />
      <CustomPagination />
      <FormUser toggle={toggle} isShowing={isShowing} />
    </>
  );
}

UserTable.propTypes = {
  search: PropTypes.object,
  isSearch: PropTypes.bool
};
