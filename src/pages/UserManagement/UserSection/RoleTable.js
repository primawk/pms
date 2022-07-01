import React from 'react';
import PropTypes from 'prop-types';

// custom hooks
import useModal from 'hooks/useModal';

// components
import { FormRole } from '.';
import CustomPagination from 'components/Pagination';
import BasicTable from 'components/Table/BasicTable/BasicTable';

export default function UserTable({ search }) {
  // const required variable inside component ( fixed value )
  const headCells = [
    {
      id: 'role',
      numeric: false,
      disablePadding: false,
      label: 'Role'
    },
    {
      id: 'dashboard',
      numeric: false,
      disablePadding: false,
      label: 'DASHBOARD'
    },
    {
      id: 'user_management',
      numeric: false,
      disablePadding: false,
      label: 'MANAJEMENT PENGGUNA'
    },
    {
      id: 'kegiatan_tambang',
      numeric: false,
      disablePadding: false,
      label: 'KEGIATAN TAMBANG'
    },
    {
      id: 'inventory',
      numeric: false,
      disablePadding: false,
      label: 'INVENTORY'
    },
    {
      id: 'lab',
      numeric: false,
      disablePadding: false,
      label: 'LAPORAN LAB'
    }
  ];

  const tableData = [
    {
      id: 0,
      role: 'Super Admin',
      dashboard: 'Edid & Delete',
      user_management: 'Edit & Delete',
      kegiatan_tambang: 'Edit & Delete',
      inventory: 'Edit & Delete',
      lab: 'Edit & Delete'
    }
  ];

  const { isShowing, toggle } = useModal();
  return (
    <>
      <BasicTable
        headCells={headCells}
        withSelect
        rows={tableData}
        edit
        onEdit={toggle}
        remove
        title="Role & Hak Akses"
      />
      <CustomPagination />
      <FormRole toggle={toggle} isShowing={isShowing} />
    </>
  );
}

UserTable.propTypes = {
  search: PropTypes.string
};
