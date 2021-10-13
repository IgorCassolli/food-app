import React from 'react';

import {
    ImageProps
} from 'react-native';

import { 
    Container,
    ImageFood,
    Name,
    Button,
    Icon
} from './styles';


interface CardsProps {
    icon: ImageProps,
    name: string,
    color: string,
}

export function CategoriesCards({icon, name, color, ...rest} : CardsProps){
    return (
        <Container {...rest} color={color}>
            <ImageFood
                source={icon}
            >

            </ImageFood>
            <Name>{name}</Name>
            <Button color={color}>
                <Icon color={color} name="chevron-right"/>
            </Button>
        </Container>
    )
}