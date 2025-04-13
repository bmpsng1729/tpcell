//import Select from "react-dropdown-select"

///************************************************************iska controller banne ke badd design karenge */
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const  BranchWisePlaced=()=>{
  const [branch, setBranch] = React.useState('');
  // find the date to call backend
  const year = new Date().getFullYear();
  console.log(year);
  const handleSelectedBranch=()=>{
      const data={
        year:year,
        branch:branch
      };
    //   const response=await fetch("")
  }

  const handleChange = (event) => {
    setBranch(event.target.value);
    
  };
  

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">BRANCH</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={branch}
          label="branch"
          onChange={handleChange}
        >
          <MenuItem value={"CSE"}>CSE</MenuItem>
          <MenuItem value={"ECE"}>ECE</MenuItem>
          <MenuItem value={'CIVIL'}>CIVIL</MenuItem>
          <MenuItem value={'EE'}>EE</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default BranchWisePlaced;