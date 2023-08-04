import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import CardSection from './CardSection'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { InputLabel } from '@mui/material';
import Search from './SearchBar'

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '70%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'none',
  alignItems: 'left',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    display: "none",
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const HomePage = () => {
 

  const styles = { 
    home: `flex flex-col items-center justify-center h-60 bg-slate-200`,
    input: `rounded border-1 border-solid border-slate-100 p-1 active`,
    button: `bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-1 px-2 rounded`,
    labelContainer: `flex`,
    label: `text-slate-700`
   }

  return (

    <div className={styles.home} >
      <div className="properties">
        <h2>Find your properties</h2>
        <p></p>
      </div>
      <form name="">
      
      <div className="flex gap-1">
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            </Search>

      <button type='submit' className={styles.button} >Search now</button>
      </div>
      <div className="">
      <div className={styles.labelContainer}>
      {/* <InputLabel htmlFor="Property Type" className={styles.label}>house</InputLabel> */}
      </div>
      <select name="" id="" form="">
         <option value="house">house</option>
         <option value="apartment">apartment</option>
         <option value="vacant land">vacant land</option>
         <option value="airBnb">airBnb</option>
      </select>
    <div className={styles.labelContainer}>
      {/* <label htmlFor="Property Type">apartment</label> */}
      </div>
</div>
       </form>
    </div>
  )
}

export default HomePage;
