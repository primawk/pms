import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { Icon } from '@iconify/react';
import EditIcon from '@iconify-icons/eva/edit-fill';
import DeleteIcon from '@iconify/icons-ant-design/delete-filled';
import { Toolbar, Button, Stack } from '@mui/material';

const getIcon = (name) => <Icon icon={name} height={24} width={24} color="#3f48c0" />;

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.text.secondary
        }
      : {
          color: theme.palette.text.secondary
        }
}));

export default function BasicTableToolbar(props) {
  const classes = useToolbarStyles();
  const {
    title,
    numSelected,
    actions,
    onSelectOneActions,
    onSelectActions,
    onEdit,
    onDelete,
    edit,
    remove
  } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Stack direction="row" spacing={2}>
          {numSelected === 1 && onSelectOneActions
            ? onSelectOneActions.map((action, index) => (
                <Button variant="contained" onClick={action.function} key={index}>
                  {action.label}
                </Button>
              ))
            : null}
          {numSelected === 1 && !onSelectOneActions && edit ? (
            <Button variant="outlined" startIcon={getIcon(EditIcon)} onClick={onEdit}>
              {`Edit ${title} (${numSelected})`}
            </Button>
          ) : null}
          {onSelectActions
            ? onSelectActions.map((action, index) => (
                <Button variant="contained" onClick={action.function} key={index}>
                  {action.label}
                </Button>
              ))
            : null}
          {!onSelectActions && remove ? (
            <Button variant="outlined" startIcon={getIcon(DeleteIcon)} onClick={onDelete}>
              {`Hapus ${title} (${numSelected})`}
            </Button>
          ) : null}
        </Stack>
      ) : (
        <>
          {actions
            ? actions.map((action, index) => (
                <Button variant="contained" onClick={action.function} key={index}>
                  {action.label}
                </Button>
              ))
            : null}
        </>
      )}
    </Toolbar>
  );
}

BasicTableToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.array.isRequired,
  numSelected: PropTypes.number.isRequired,
  onSelectOneActions: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSelectActions: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  edit: PropTypes.bool,
  remove: PropTypes.bool
};
