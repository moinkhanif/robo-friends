import React from 'react';
import Cards from './cards';

const CardList = ({robots}) => {
    return (
        <div>
        {
            robots.map((user,i)=>{
            return (
                <Cards 
                    key={i} 
                    id = {robots[i].id} 
                    name = {robots[i].name} 
                    username = {robots[i].username} 
                    email = {robots[i].email} 
                />
            );
            })
        }
        </div>
        
    );
}
export default CardList;