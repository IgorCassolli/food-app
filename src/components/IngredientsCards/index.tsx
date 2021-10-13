import React from 'react';

import {
    ImageProps
} from 'react-native';

import {
    Container,
    ImageFood
} from './styles'


interface CardsProps {
    icon: ImageProps
}


export function IngredientsCards({icon, ...rest}: CardsProps){
    return (
        <Container {...rest}>
            <ImageFood source={icon}/>
        </Container>
    )
}
