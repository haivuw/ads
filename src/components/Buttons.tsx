import {
  withStyles,
  Button as MButton,
  ButtonProps,
  createStyles,
  CircularProgress
} from '@material-ui/core';
import { useFormikContext } from 'formik';
import { FC } from 'react';

const StyledButton = withStyles(theme =>
  createStyles({
    // root: {
    //   fontSize: 16,
    //   height: '2.6em',
    //   boxShadow: 'none',
    //   borderRadius: 100,
    //   color: (props: ButtonProps) => (props.color === 'primary' ? 'white' : '#333'),
    //   transition: theme.transitions.create(['background-color'])
    // }
  })
)(MButton) as FC<ButtonProps>;

const withLoadingProp =
  (Comp: FC<ButtonProps>): FC<ButtonProps & { loading?: boolean }> =>
  props => {
    const { loading, ...rest } = props;

    const loadingProps = {
      children: <CircularProgress size="1.8em" />,
      disabled: true
    };

    return <Comp {...rest} {...(loading ? loadingProps : {})} />;
  };

const withFormik =
  (Comp: FC<ButtonProps & { loading?: boolean }>): FC<ButtonProps> =>
  props => {
    const { isSubmitting, errors, ...rest } = useFormikContext();
    return <Comp {...rest} type="submit" loading={isSubmitting} />;
  };

export const SubmitButton = withFormik(withLoadingProp(StyledButton));

const Button = withLoadingProp(StyledButton);

export default Button;
