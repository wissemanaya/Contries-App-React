
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <Box className='navigation'
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
     
    >
      <Link to="/">Home</Link>
      <Link to="about" >about</Link>
    </Box>
  );
}

export default Navigation