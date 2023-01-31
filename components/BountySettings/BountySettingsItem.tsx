import React, { useState } from "react";
import { BountySettingsItemMuiStyles } from "./BountySettingsItem.styles";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import {
  Typography,
  Stack,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@mui/material";

export default function BountySettingsItem(props: any) {
  const bountyItemStyles = BountySettingsItemMuiStyles();
 
  const [checkedFields, setCheckedFields] = useState([
    { label: "Active", checked: false },
    { label: "Inactive", checked: false },
  ]);
  const onCheckboxClick = (rowIndex: number) => {
    let tempArr = checkedFields;
    tempArr = tempArr.map((data: any, index: number) => ({
      ...data,
      checked: rowIndex === index ? !data.checked : false,
    }));

    setCheckedFields([...tempArr]);
  };

  return (
    <Box className={bountyItemStyles.bountyItemContainer}>
      <Stack className={bountyItemStyles.itemName}>
        <Typography variant="caption">{props.bountyDetails}</Typography>
      </Stack>
      <Stack
        direction={"row"}
        spacing={1.6}
        className={bountyItemStyles.statusContainer}
      >
        {checkedFields.map((value: any, index: number) => (
          <FormControlLabel
            control={
              <Checkbox
                icon={<RadioButtonUncheckedIcon sx={{height:"20px", width:"20px"}} htmlColor={"#FF9551"} />}
                checkedIcon={<RadioButtonCheckedIcon  sx={{height:"20px", width:"20px"}} htmlColor={"#FF9551"} />}
                checked={value.checked}
                onClick={() => onCheckboxClick(index)}
              />
            }
            value="Active"
            label={value.label}
          />
        ))}
      </Stack>
    </Box>
  );
}
