import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
const Demo = styled('div')(({ theme }) => ({
    backgroundColor: (theme.vars || theme).palette.background.paper,
}));

function Todo() {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch()

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <>




            <Grid
                size={{
                    xs: 12,
                    md: 6,
                }}
            >
                <Typography sx={{ mt: 4, mb: 2, textAlign: 'center' }} variant="h6" component="div">
                    My Todo List
                </Typography>
                <Demo>
                    <List dense={dense}>

                        {todos.map((todo) => (
                            <ListItem
                                key={todo.id}

                                secondaryAction={
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => dispatch(removeTodo(todo.id))}

                                        sx={{
                                            color: 'error.main',
                                            '&:hover': {
                                                backgroundColor: 'rgba(211, 47, 47, 0.08)'
                                            }
                                        }}

                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                }

                                sx={{
                                    backgroundColor: '#091f5c',

                                    marginBottom: '6px',
                                    borderRadius: '4px',
                                    maxWidth: '70%',
                                    marginX: 'auto',       // Centers the narrowed item horizontally
                                    px: 2,
                                    '& .MuiListItemText-primary': { color: 'white' },
                                    '& .MuiListItemText-secondary': { color: 'rgba(255, 255, 255, 0.7)' }, // Optional: subtext styling
                                }}
                            >
                                <ListItemText
                                    primary={todo.text} // 4. Display your todo text here
                                    secondary={secondary ? 'Secondary text' : null}

                                />


                            </ListItem>
                        ))}
                    </List>
                </Demo>
            </Grid>


        </>
    )
}

export default Todo