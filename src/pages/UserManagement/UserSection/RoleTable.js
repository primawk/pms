import { useState } from 'react';

// custom hooks
import useModal from 'hooks/useModal';

// components
import { DeleteModal } from 'components/Modal';
import { FormRole } from '.';
import CustomPagination from 'components/Pagination';
import BasicTable from 'components/Table/BasicTable/BasicTable';

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

export default function RoleTable() {
  const [id, setId] = useState([]);

  const { isShowing: isShowingForm, toggle: toggleForm } = useModal();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useModal();

  const handleEdit = (e, _id) => {
    setId(_id);
    toggleForm();
  };

  const handleAdd = () => {
    setId([]);
    toggleForm();
  };

  const actions = [
    {
      title: 'Tambah Role & Hak Akses',
      label: 'Tambah Role & Hak Akses',
      function: handleAdd
    }
  ];

  return (
    <>
      <BasicTable
        headCells={headCells}
        withSelect
        rows={tableData}
        actions={actions}
        edit
        onEdit={handleEdit}
        remove
        onDelete={toggleDelete}
        title="Role & Hak Akses"
      />
      <CustomPagination />
      <FormRole toggle={toggleForm} isShowing={isShowingForm} id={id} />
      <DeleteModal toggle={toggleDelete} isShowing={isShowingDelete} title="Role & Hak Akses" />
    </>
  );
}
