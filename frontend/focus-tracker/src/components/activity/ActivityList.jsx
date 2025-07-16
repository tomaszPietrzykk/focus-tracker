import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const ActivityList = ({activities, onSelect, activeActivity, isTimerRunning}) => {

    return (
        <>
            <FormControl fullWidth disabled={isTimerRunning}>
                <InputLabel id="demo-simple-select-label"/>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={activeActivity}
                    onChange={onSelect}
                >
                    {activities.map((category) => (
                        <MenuItem
                            value={category}
                        >
                            {category}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

        </>
    )
}

export default ActivityList