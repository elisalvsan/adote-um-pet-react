import { TitleStyled, Subtitulo } from './Title.style'

interface TitleProps {
    title: string;
    subtitulo?: string | JSX.Element;
}

export default function Title(props : TitleProps) {
    return (
        <>
            <TitleStyled>{props.title}</TitleStyled>
            <Subtitulo>{props.subtitulo}</Subtitulo>
        </>
    );
}