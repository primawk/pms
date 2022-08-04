/* eslint-disable no-use-before-define */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

// custom hooks
import useModal from 'hooks/useModal';
import usePagination from 'hooks/usePagination';
import useLoading from 'hooks/useLoading';
import useAuth from 'hooks/useAuth';

// components
import { DeleteModal, LoadingModal } from 'components/Modal';
import { FormUser } from '.';
import CustomPagination from 'components/Pagination';
import BasicTable from 'components/Table/BasicTable/BasicTable';

// services
import UserManagementService from 'services/UserManagementService';

// utils
import { ceilTotalData } from 'utils/helper';

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
    id: 'name',
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
    id: 'role_name',
    numeric: false,
    disablePadding: false,
    label: 'ROLE'
  }
];

export default function UserTable({ search }) {
  const queryClient = useQueryClient();

  const [id, setId] = useState('');

  const { isShowing: isShowingForm, toggle: toggleForm } = useModal();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useModal();

  const { isGranted } = useAuth();

  const { isLoadingAction, toggleLoading } = useLoading();

  const { page, handleChangePage, resetPage } = usePagination();

  const { data, isLoading, isFetching } = useQuery(
    ['users', page, search],
    () =>
      UserManagementService.getUser({
        page,
        row: 10,
        search: search.search,
        role: search.role
      }),
    { keepPreviousData: true }
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
    UserManagementService.deleteUser({ id })
      .then(() => {
        toast.success('Data berhasil dihapus !');
        toggleLoading(false);
        toggleDelete();
        queryClient.invalidateQueries(['users', page, search]);
      })
      .catch((err) => {
        toast.error(err.response.data.detail_message);
        toggleLoading(false);
        toggleDelete();
      });
  };

  const actions = [
    {
      title: 'Tambah User',
      label: 'tambah user',
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
          rows={data?.data?.data}
          actions={isGranted ? actions : []}
          edit={isGranted}
          onEdit={handleEdit}
          remove={isGranted}
          onDelete={handleOpenDelete}
          title="User"
        />
      )}
      <CustomPagination
        count={ceilTotalData(data?.data?.pagination?.total_data || 0, 10)}
        page={page}
        handleChangePage={handleChangePage}
      />
      <FormUser
        toggle={toggleForm}
        isShowing={isShowingForm}
        id={id}
        resetPage={resetPage}
        page={page}
        search={search}
      />
      <DeleteModal
        toggle={toggleDelete}
        isShowing={isShowingDelete}
        title="User"
        loading={isLoadingAction}
        action={handleDelete}
      />
    </>
  );
}

UserTable.propTypes = {
  search: PropTypes.object
};
