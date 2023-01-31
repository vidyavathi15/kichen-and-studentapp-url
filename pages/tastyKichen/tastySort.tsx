

import React , {useState} from 'react'
import SortIcon from '@mui/icons-material/Sort';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import { TastyHomeStyles } from './tastyHomeStyles';
const sortByOptions= [{
    id:"1", 
    displayText: "Sort by Lowest"
}, 
{
id:"2", 
displayText: "Sort by Highest"
}
]
 const TastySort = () => {
    const Styles = TastyHomeStyles()
    const [activeSortOption, setActiveSortOption] = useState("")
  return (
    <Stack className={Styles.resTitle}>
    <Stack className="heading-container">
      <Typography variant="subtitle1" >Popular Restaurants</Typography>
      <Typography variant="body2">
        Select Your favourite restaurant special dish and make your day
        happy....
      </Typography>
    </Stack>
    <Stack direction="row" alignItems={"center"} >
      <SortIcon className="sort-icon"  />
      <Typography className="sort-by-heading"  variant="subtitle1">Sort by</Typography>
      <Stack>
        <select
          name="sort-select"
          
          value={activeSortOption}
          onChange={(e: any)=> setActiveSortOption(e.target.value)}
        >
          {sortByOptions.map(eachOption => (
            <option key={eachOption.id} value={eachOption.id}>
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </Stack>
    </Stack>
  </Stack>
  )
}


export default TastySort
