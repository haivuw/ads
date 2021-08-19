import { IconButton, InputAdornment, InputProps } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import produce from 'immer';
import { ComponentClass, FC, useState } from 'react';

const usePasswordProps = <P extends InputProps>(props: P): P => {
  const [show, setShow] = useState(false);

  if (props?.type !== 'password') return props;

  return produce(props, props => {
    props.type = show ? 'text' : 'password';
    props.endAdornment = (
      <InputAdornment position="end" style={{ position: 'absolute', right: 0 }}>
        <IconButton
          style={{ marginRight: '0.3em', padding: 6, color: '#999' }}
          aria-label="toggle password visibility"
          onClick={() => setShow(!show)}
          edge="end"
        >
          {show ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    );
  });
};

export const withPasswordProps =
  <P extends InputProps>(Input: FC<P> | ComponentClass<P>): FC<P> =>
  props => {
    const newProps = usePasswordProps(props);

    return <Input {...newProps} />;
  };

export default usePasswordProps;
