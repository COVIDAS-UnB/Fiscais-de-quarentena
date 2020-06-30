import React from "react";
import './CardConnection.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const useStyles = makeStyles((theme) => ({
    large: {
        width: '100%',
        height: '100%',
    },
}));

const StyledRating = withStyles({
    iconFilled: {
        color: '#02397A',
    },
    iconHover: {
        color: '#02397A',
    },
})(Rating);


const CardConnection = (props) =>{
    let {image, name, age, rating} = props;
    const classes = useStyles();
    const customIcons = {
        1: {
            icon: <SentimentVeryDissatisfiedIcon />,
            label: 'Very Dissatisfied',
        },
        2: {
            icon: <SentimentDissatisfiedIcon />,
            label: 'Dissatisfied',
        },
        3: {
            icon: <SentimentSatisfiedIcon />,
            label: 'Neutral',
        },
        4: {
            icon: <SentimentSatisfiedAltIcon />,
            label: 'Satisfied',
        },
        5: {
            icon: <SentimentVerySatisfiedIcon />,
            label: 'Very Satisfied',
        },
    };
    function IconContainer(props) {
        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>;
    }

    return(
        <div className="cardConnection">
            <div className="divImageCard" style={{backgroundImage: `url(${image})`}}/>
            <div className="divInfo">
                <div className="divRatingTitle">
                    <h2 className="titleCardName">{name}</h2>
                    <StyledRating
                        name="customized-icons"
                        className="ratingUser"
                        color="#ffffff"
                        defaultValue={rating}
                        getLabelText={(value) => customIcons[value].label}
                        IconContainerComponent={IconContainer}
                    />
                </div>

                <h2 className="subTitleCard">{age} anos</h2>
                <Button size="medium" variant="contained" className="buttonCard">
                    Conversar com {name}
                </Button>
            </div>
        </div>
    )
}

export default CardConnection;

