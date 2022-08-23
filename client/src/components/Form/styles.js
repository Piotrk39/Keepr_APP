import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    root: {
        '& .MuiTextField-root': {
          margin: "5px",
        },
      },
      paper: {
        padding: 2,
      },
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      fileBase: {
        position: 'absolute',
        display: 'none',
        padding: 25,
      },
}));