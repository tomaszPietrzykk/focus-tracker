import AddIcon from '@mui/icons-material/Add';
import {Button, FormControl, OutlinedInput} from "@mui/material";
import {useState} from "react";

const AddActivityButton = () => {

    const [addActivity, setAddActivity] = useState(false)

    const handleClick = () => {
        setAddActivity(true);
    }

    return (
        <>
            <Button onClick={handleClick}>
                <AddIcon fontSize={"medium"}/>
            </Button>
            {addActivity &&
                <form noValidate autoComplete="off">
                    <FormControl sx={{width: '25ch'}}>
                        <OutlinedInput placeholder="Please enter text"/>
                    </FormControl>
                </form>
            }
        </>
    )
}

export default AddActivityButton