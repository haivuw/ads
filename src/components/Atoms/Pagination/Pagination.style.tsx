import {createStyles, makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

export const useStylesPagination = makeStyles((theme: Theme) =>
    createStyles({
        pagination: {
            display: 'flex',
        },
        container:{
            width: '100%',
            textAlign: 'center'
        }
    })
);

export const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: theme.spacing(3)
            }
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            fontWeight: 'bold',
            padding: '5px 26px 5px 12px',
            marginLeft: 20,
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
            }
        }
    })
)(InputBase);