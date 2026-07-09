import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
function Addtodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <>
            <div>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>

                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, textAlign: 'center' }}>
                            Create a New Todo
                        </Typography>


                        <form onSubmit={handleSubmit}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mt: 1,
                                    width: '100%',
                                    maxWidth: '590px',
                                    mx: 'auto'
                                }}
                            >
                                <TextField
                                    id="outlined-basic"
                                    label="Outlined"
                                    variant="outlined"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    sx={{
                                        flexGrow: 1,
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '28px',
                                            paddingRight: '4px',
                                        }
                                    }}

                                    slotProps={{
                                        input: {
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        type="submit"
                                                        // color="primary"
                                                        edge="end"
                                                        sx={{
                                                            height: '48px',
                                                            width: '48px',
                                                            mr: 0.6,
                                                            color: "#7293C5"
                                                        }}
                                                    >
                                                        <AddCircleIcon sx={{ fontSize: '2.6rem' }} />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                />


                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Addtodo