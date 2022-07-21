import { Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import DashboardList from 'components/List/DashboardList';

const ListData = ({ subtitle, listData }) => {
  const { inventoryType } = useParams();
  return (
    <>
      <Typography variant="h5" mb={2}>
        {subtitle}
      </Typography>

      {listData?.length > 0 ? (
        listData?.map((_list, index) => (
          <Link
            to={`/inventory/${inventoryType}/detail-dome/${_list.dome_id}`}
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
