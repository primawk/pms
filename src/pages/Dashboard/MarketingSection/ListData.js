import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardList from 'components/List/DashboardList';

const ListData = ({ subtitle, listData }) => {
  return (
    <>
      <Typography variant="h5" mb={2}>
        {subtitle}
      </Typography>

      {listData?.length > 0 ? (
        listData?.map((_list, index) => (
          <Link
            to={`/inventory/${_list?.inventory_type}/detail-dome/${
              _list?.hill_id || _list?.dome_id
            }`}
            style={{ textDecoration: 'none', color: 'inherit' }}
            key={_list.id}
          >
            <DashboardList listData={{ ..._list, index }} />
          </Link>
        ))
      ) : (
        <center>
          <h1>Data tidak ditemukan !</h1>
        </center>
      )}
    </>
  );
};

export default ListData;
