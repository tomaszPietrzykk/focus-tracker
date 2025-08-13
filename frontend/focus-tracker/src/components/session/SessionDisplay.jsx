import Session from "./Session.jsx";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const SessionDisplay = ({focusSessions}) => {


    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {focusSessions.map((value, index) => {
                const labelId = `checkbox-list-label-${index}`;

                return (
                    <ListItem
                        key={index}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                                <DeleteIcon />
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.includes(value)}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <Session activityName = {value.activityName} durationInSeconds={value.durationInSeconds}/>
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );

    // return (
    //     <>
    //         <ul>
    //             {focusSessions.map((session, index) => (
    //                 <li key={index}>
    //                     <Session activityName = {session.activityName} durationInSeconds={session.durationInSeconds}/>
    //                 </li>
    //             ))}
    //         </ul>
    //     </>
    // )

}

export default SessionDisplay;