import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

const ActivityList = ({activities, setActivitiesList, onSelect, activeActivity, isTimerRunning}) => {

    const onDelete = (activity) => {
        console.log("Deleting activity:", activity);
        setActivitiesList((prevActivities) => prevActivities.filter((item) => item !== activity));
    }

    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flex: 1}}>
            <FormControl fullWidth disabled={isTimerRunning || activities.length === 0}>
                <InputLabel id="demo-simple-select-label"/>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={activeActivity}
                    onChange={onSelect}
                    renderValue={(value) => activities.length === 0 ? "No activities" : value}
                    // todo disable select when timer is running
                    disabled={activities.length === 0}
                >
                    {activities.map((category) => (
                        <MenuItem
                            key={category}
                            value={category}
                            sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}
                        >
                            <ListItemText>{category}</ListItemText>
                            <ListItemIcon
                                size="small"
                                edge="end"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDelete(category);
                                }}
                            >
                                <DeleteIcon fontSize="small"/>
                            </ListItemIcon>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default ActivityList