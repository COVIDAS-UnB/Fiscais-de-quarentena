import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Item from './Item/Item';
import material from "../../assets/img/material.svg";
import adopt from "../../assets/img/adopt.svg";
import classes from "../../assets/img/classes.svg";
import covid from "../../assets/img/covid.svg";
import './Items.css';

const Items = (props) => {
    let {menuSelected, setMenuSelected, setStep, open} = props;

    const setAdopt = () =>{
        setMenuSelected('adopt');
        setStep(0);
    }

    return(
        <div className="divItems">
            <ListItem button className="listItem" onClick={() => setMenuSelected('material')}>
                <Item icon={material} title={"Material Didático"} text={<h2 className="text"> Confira os materiais</h2>}
                      selected={menuSelected === 'material'} open={open}/>
            </ListItem>
            <ListItem button className="listItem" onClick={() => setAdopt() }>
                <Item icon={adopt} title={"Adotar um Aluno"} text={<h2 className="text"> Ajude quem precisa</h2>}
                      selected={menuSelected === 'adopt'} open={open}
                />
            </ListItem>
            <ListItem button className="listItem" onClick={() => setMenuSelected('classes')}>
                <Item icon={classes} title={"Aulas Gravadas"} text={<h2 className="text"> Assista as aulas</h2>}
                      selected={menuSelected === 'classes'} open={open}
                />
            </ListItem>

            <ListItem button className="lastItem" onClick={() => setMenuSelected('covid')}>
                <Item icon={covid} title={"Não se sente bem?"}
                      text={
                          <h2 className="text"> Clique aqui e saiba como agir <br/>
                              ao sentir sintomas de Covid-19. </h2>
                      }
                      selected={menuSelected === 'covid'} open={open}
                />
            </ListItem>

        </div>
    );

};

export default Items;