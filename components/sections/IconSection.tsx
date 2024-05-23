import React from "react";
import Typography from "../Typography";
import IconButton from "../IconButton"

const IconSection: React.FC = () => {
    return (
        <div className="section-basic-elements__icons">
        <div className="row">
            <div className="col-12 u-margin-bottom-3">
                <Typography tag="p" className="h3 u-margin-bottom-2">Ícones</Typography>
                <Typography tag="p" className="paragraph">Nosso projeto apresenta uma extensa coleção de ícones potencializada pelo FontAwesome. Com o FontAwesome, temos acesso a uma vasta biblioteca de ícones meticulosamente elaborados, abrangendo diversas categorias, desde ícones de interface do usuário até ícones de redes sociais, dispositivos, setas e muito mais.</Typography>
            </div>
            <div className="col-12 u-margin-bottom-3  u-space-between-child-elements-1">
                <IconButton className="icon-button icon-button--large icon-button--secondary" icon="google"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--secondary" icon="aws"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--secondary" icon="github"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--secondary" icon="spotify"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--secondary" icon="bitcoin"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--secondary" icon="apple"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--secondary" icon="android"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--secondary" icon="bootstrap"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--secondary" icon="behance"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--secondary" icon="bitbucket"></IconButton>
            </div>
            <div className="col-12 u-margin-bottom-3  u-space-between-child-elements-1">
                <IconButton className="icon-button icon-button--large icon-button--gray" icon="hand"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--gray" icon="regular-image"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--gray" icon="car"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--gray" icon="check"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--gray" icon="clock"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--gray" icon="eye"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--gray" icon="flag"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--gray" icon="grip"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--gray" icon="heart"></IconButton>
                <IconButton className="icon-button icon-button--large icon-button--gray" icon="info"></IconButton>
            </div>
            <div className="col-12 u-margin-bottom-3">
                <Typography tag="p" className="paragraph">Adicione seus próprios ícones é fácil! Basta adicionar seus arquivos SVG na pasta icons e, em seguida, executar o comando npm run generate:sprites-svg a partir da raiz do projeto.</Typography>
                <Typography tag="p" className="paragraph paragraph--warning">Ao adicionar seus ícones personalizados, certifique-se de que os arquivos SVG contenham apenas o conteúdo do caminho "path" e os atributos xmlns e viewBox. Não inclua outras configurações no arquivo SVG, pois isso pode afetar o resultado final.</Typography>
            </div>
            </div>
        </div>
    )
}

export default IconSection;