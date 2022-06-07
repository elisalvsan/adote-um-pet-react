import { Button } from '@mui/material'
import { TextService } from '../../../data/services/TextService';
import { Pet } from './../../../data/@types/Pet';
import { ListStyled, ItemList, Photo, Info, Name, Description } from './List.style'


interface ListProps {
    pets: Pet[];
}

export default function List(props: ListProps) {

    const tamMaxText = 200;

    return (
        <ListStyled>
            {props.pets.map(pet => (
                <ItemList key={pet.id}>
                    <Photo src={pet.photo} alt={pet.name} />
                    <Info>
                        <Name>{pet.name}</Name>
                        <Description>
                            {TextService.limitarText(pet.history, tamMaxText)}
                        </Description>
                        <Button variant={'contained'} fullWidth>Adotar {pet.name}</Button>
                    </Info>
                </ItemList>
            ))}
        </ListStyled>
    )
}