import React from 'react';

import Pizza from '../../images/pizza1/pizza1.png';

import {
    Container,
    InfoContainer,
    TextContainer,
    TitleContainer,
    Icon,
    Title,
    Name,
    Weight,
    ButtonContainer,
    Button,
    IconButton,
    RatingContainer,
    IconRating,
    Rating,
    ImageContainer,
    ImageFood
} from './style';


export function PopularCards(){
    return ( 
        <Container>
            <InfoContainer>
                <TextContainer>
                    <TitleContainer>
                        <Icon name="crown"/>
                        <Title>top of the week</Title>
                    </TitleContainer>
                    <Name>Primavera Pizza</Name>
                    <Weight>Weight 540 gr</Weight>
                </TextContainer>
                <ButtonContainer>
                    <Button>
                        <IconButton name="plus"/>
                    </Button>
                    <RatingContainer>
                        <IconRating name="star"/>
                        <Rating>5.0</Rating>
                    </RatingContainer>
                </ButtonContainer>
            </InfoContainer>
            <ImageContainer>
                <ImageFood
                    source={Pizza}
                >

                </ImageFood>
            </ImageContainer>
        </Container>
    )
}