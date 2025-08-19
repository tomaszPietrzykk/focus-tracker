import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

const ActivityList = ({activities, setActivitiesList, onSelect, activeActivity, isTimerRunning}) => {

    const onDelete = (activity) => {
        console.log("Deleting activity:", activity);
        setActivitiesList((prevActivities) => prevActivities.filter((item) => item !== activity));
    }

    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <FormControl fullWidth disabled={isTimerRunning || activities.length === 0}>
                <InputLabel id="demo-simple-select-label"/>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={activeActivity}
                    onChange={onSelect}
                    renderValue={(value) => activities.length === 0 ? "No activities" : value}
                    disbled={activities.length === 0}
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
            <Button><AddIcon fontSize={"medium"}/></Button>
        </div>
    )
}

export default ActivityList