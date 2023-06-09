import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

// custom hooks
import useModal from 'hooks/useModal';
import usePagination from 'hooks/usePagination';
import useLoading from 'hooks/useLoading';
import useAuth from 'hooks/useAuth';

// components
import { DeleteModal, LoadingModal } from 'components/Modal';
import { FormRole } from '.';
import CustomPagination from 'components/Pagination';
import BasicTable from 'components/Table/BasicTable/BasicTable';

// services
import RoleService from 'services/RoleService';

// utils
import { ceilTotalData } from 'utils/helper';

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Role'
  },
  {
    id: 'action.dashboard',
    numeric: false,
    disablePadding: false,
    label: 'DASHBOARD'
  },
  {
    id: 'action.user-management',
    numeric: false,
    disablePadding: false,
    label: 'MANAJEMENT PENGGUNA'
  },
  {
    id: 'action.mining-activity',
    numeric: false,
    disablePadding: false,
    label: 'KEGIATAN TAMBANG'
  },
  {
    id: 'action.shipment',
    numeric: false,
    disablePadding: false,
    label: 'PEMASARAN'
  },
  {
    id: 'action.inventory',
    numeric: false,
    disablePadding: false,
    label: 'INVENTORY'
  },
  {
    id: 'action.lab-report',
    numeric: false,
    disablePadding: false,
    label: 'LAPORAN LAB'
  },
  {
    id: 'action.mining-tool',
    numeric: false,
    disablePadding: false,
    label: 'ALAT TAMBANG'
  },
  {
    id: 'action.bank-data',
    numeric: false,
    disablePadding: false,
    label: 'BANK DATA'
  },
  {
    id: 'action.modul-lossing',
    numeric: false,
    disablePadding: false,
    label: 'MODUL LOSSING'
  }
];

export default function RoleTable() {
  const queryClient = useQueryClient();

  const [id, setId] = useState('');

  const { isShowing: isShowingForm, toggle: toggleForm } = useModal();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useModal();

  const { isGranted } = useAuth();

  const { isLoadingAction, toggleLoading } = useLoading();

  const { page, handleChangePage, resetPage } = usePagination();

  const { data, isLoading, isFetching } = useQuery(['roles-list', page], () =>
    RoleService.getRole({
      page,
      row: 10
    })
  );

  const handleAdd = () => {
    setId('');
    toggleForm();
  };

  const handleEdit = (e, _id) => {
    setId(_id.toString());
    toggleForm();
  };

  const handleOpenDelete = (e, _id) => {
    if (_id !== undefined) {
      setId(_id.toString());
    } else {
      setId('');
    }
    toggleDelete();
  };

  const handleDelete = () => {
    toggleLoading(true);
    RoleService.deleteRole({ id })
      .then(() => {
        toast.success('Data berhasil dihapus !');
        toggleLoading(false);
        toggleDelete();
        queryClient.invalidateQueries(['roles-list', page]);
      })
      .catch((err) => {
        toast.error(err.response.data.detail_message);
        toggleLoading(false);
        toggleDelete();
      });
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
      {isFetching && <LoadingModal />}
      {!isLoading && data && (
        <BasicTable
          headCells={headCells}
          withSelect={isGranted}
          withToolbar={isGranted}
          rows={data?.data?.data || []}
          actions={isGranted ? actions : []}
          edit={isGranted}
          onEdit={handleEdit}
          remove={isGranted}
          onDelete={handleOpenDelete}
          title="Role & Hak Akses"
        />
      )}
      <CustomPagination
        count={ceilTotalData(data?.data?.pagination?.total_data || 0, 10)}
        page={page}
        handleChangePage={handleChangePage}
      />
      <FormRole
        toggle={toggleForm}
        isShowing={isShowingForm}
        id={id}
        page={page}
        resetPage={resetPage}
      />
      <DeleteModal
        toggle={toggleDelete}
        isShowing={isShowingDelete}
        title="Role & Hak Akses"
        loading={isLoadingAction}
        action={handleDelete}
      />
    </>
  );
}
