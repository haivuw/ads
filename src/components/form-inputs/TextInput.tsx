import { makeStyles, Input, createStyles, Theme, withStyles } from '@material-ui/core';
import pipe from 'ramda/src/pipe';
import { withPasswordProps } from './usePasswordFieldProps';

export const inputStyles = (theme: Theme) =>
  createStyles({
    root: {
      transition: 'all 0.2s',
      marginTop: '0 !important',
      borderRadius: 5,
      border: '1px solid #ced4da',
      '&:hover': {
        borderColor: '#666'
      },
      overflow: 'hidden'
    },
    input: {
      minHeight: 45,
      padding: '0 10px',
      fontSize: '1rem'
    },
    error: {
      borderColor: `${theme.palette.error.main}`,
      '&:hover': {
        borderColor: `${theme.palette.error.dark}`
      }
    },
    focused: {
      boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
      borderColor: `${theme.palette.primary.main} !important`
    },
    disabled: {
      background: theme.palette.grey[200]
    }
  });

export const useInputStyles = makeStyles(inputStyles);

export const StyledInput = withStyles(inputStyles)(Input);

StyledInput.defaultProps = {
  disableUnderline: true
};

const TextInput = pipe(withPasswordProps)(StyledInput);

export default TextInput;
