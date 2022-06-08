import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Checkbox
} from '@mui/material';
import PropTypes from 'prop-types';

// components
import BasicTableToolbar from './BasicTableToolbar';
import BasicTableHead from './BasicTableHead';
import CustomPagination from 'components/Pagination';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
    marginBottom: theme.spacing(2),
    boxShadow: 'none'
  },
  table: {
    minWidth: 750
  },
  input: {
    fontSize: '20px',
    padding: '20px 50px 20px 50px',
    '@media (max-width:780px)': {
      padding: '5px 10px 5px 10px',
      fontSize: '1.5 vw'
    }
  },
  icon: {
    width: '100%',
    height: 'auto',
    maxWidth: '40px',
    maxHeight: '40px',
    '@media (max-width:780px)': {
      maxWidth: '20px',
      maxHeight: '20px'
    }
  },
  shadow: {
    boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.6)',
    WebkitBoxShadow: '0px 4px 8px 0px rgba(0,0,0,0.6)',
    MozBoxShadow: '0px 4px 8px 0px rgba(0,0,0,0.6)'
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  }
}));

export default function BasicTable({
  title,
  headCells,
  rows,
  actions,
  onEdit,
  onDelete,
  onSelectActions,
  onSelectOneActions,
  edit,
  remove
}) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    console.log(selected);
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <BasicTableToolbar
          numSelected={selected.length}
          actions={actions}
          title={title}
          onSelectActions={onSelectActions}
          onSelectOneActions={onSelectOneActions}
          edit={edit}
          remove={remove}
          onEdit={onEdit}
          onDelete={() => onDelete(selected)}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <BasicTableHead
              classes={classes}
              headCells={headCells}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell color="secondary" padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      {headCells.map((header) => {
                        const arrHeader = header.id.split('.');
                        if (arrHeader.length === 2) {
                          return (
                            <TableCell color="secondary" key={index}>
                              {row[arrHeader[0]][arrHeader[1]]}
                            </TableCell>
                          );
                        } else {
                          return (
                            <TableCell color="secondary" key={header}>
                              {row[header.id]}
                            </TableCell>
                          );
                        }
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
          <CustomPagination />
        </TableContainer>
      </Paper>
    </div>
  );
}

BasicTable.propTypes = {
  title: PropTypes.string.isRequired,
  headCells: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired,
  onSelectOneActions: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSelectActions: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  edit: PropTypes.bool,
  remove: PropTypes.bool
};

BasicTable.defaultProps = {
  onSelectOneActions: false,
  onSelectActions: false,
  onEdit: () => null,
  onDelete: () => null,
  edit: false,
  remove: false
};
