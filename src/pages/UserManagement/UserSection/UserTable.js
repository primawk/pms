/* eslint-disable no-use-before-define */
import { useState, useEffect } from 'react';
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

export default function UserTable({ search, isSearch }) {
  const queryClient = useQueryClient();

  const [pagination, setPagination] = useState({});
  const [id, setId] = useState('');

  const { isShowing: isShowingForm, toggle: toggleForm } = useModal();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useModal();

  const { isGranted } = useAuth();

  const { isLoadingAction, toggleLoading } = useLoading();

  const { page, totalPage, handleChangePage, resetPage } = usePagination(
    pagination || { total_data: 0 }
  );

  const { data, isLoading, isFetching } = useQuery(
    ['users', page, isSearch],
    () =>
      UserManagementService.getUser({
        page,
        row: 10,
        search: search.search,
        role: search.role
      }),
    { keepPreviousData: true }
  );

  useEffect(() => {
    setPagination(data?.data?.pagination);
  }, [data]);

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
        queryClient.invalidateQueries(['users', page, isSearch]);
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
      {!isLoading && data && (
        <>
          {isFetching ? (
            <LoadingModal />
          ) : (
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
        </>
      )}
      <CustomPagination count={totalPage} page={page} handleChangePage={handleChangePage} />
      <FormUser
        toggle={toggleForm}
        isShowing={isShowingForm}
        id={id}
        resetPage={resetPage}
        page={page}
        isSearch={isSearch}
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
  search: PropTypes.object,
  isSearch: PropTypes.bool
};
