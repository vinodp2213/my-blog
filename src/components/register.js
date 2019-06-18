import React from 'react';
import {Card, CssBaseline, CardContent, Button, Avatar, 
    Typography, Paper, Checkbox, Grid, FormControl, InputLabel, Input, FormControlLabel} from '@material-ui/core';
import PropTypes from 'prop-types';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 50,
    },
    pos: {
      marginBottom: 12,
    },
    grid: {
        marginTop: 0,
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
        alignContent: 'center',
    },
    main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    },
    paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
    },
    form: {
    width: '100%', 
    marginTop: theme.spacing.unit,
    },
    submit: {
    marginTop: theme.spacing.unit * 3,
    },
  });
  
class UserRegister extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            email : '',
            password : '',
            isChecked:false
        }
    }

    handleChange = (e) =>{
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }

    handleCheck =(e) =>{
        const isChecked = e.target.checked
        this.setState(() => ({isChecked}))
    }

    handleSubmit =(e) => {
        e.preventDefault()
        const formData = {
            username : this.state.username,
            email: this.state.email,
            password : this.state.password
        }
        console.log(formData)
        this.setState(() => ({
            username: '', email: '', password: ''
        }))
        setTimeout(() => {
            this.props.history.push('/login')
        }, 2000)
    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4} className = {classes.grid} >
                        <main className={classes.main}>
                            <CssBaseline />
                            <Paper className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                Register
                                </Typography>
                                <form onSubmit={this.handleSubmit} className={classes.form}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel>Name</InputLabel>
                                    <Input name="username" 
                                        value={this.state.username}
                                        onChange = {this.handleChange} 
                                        autoFocus  />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel >Email Address</InputLabel>
                                    <Input name="email" 
                                        value={this.state.email} 
                                        onChange = {this.handleChange} 
                                        autoFocus />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel>Password</InputLabel>
                                    <Input name="password" 
                                        type={this.state.isChecked ? 'text' : 'password'} 
                                        value={this.state.password}
                                        onChange = {this.handleChange}  />
                                </FormControl>
                                <FormControlLabel
                                    control={<Checkbox value="remember" value = {this.state.isChecked}  onChange = {this.handleCheck} color="primary" />}
                                    label="show password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Submit
                                </Button>
                                </form>
                            </Paper>
                        </main>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

UserRegister.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(UserRegister);