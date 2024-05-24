import React from "react";
import Typography from '../Typography';

const TypographySection: React.FC = () => {
    return (
        <div className="section-basic-elements__typographies">
            <div className="row">
                <div className="col-12">
                    <Typography tag="h3" className="h3 u-text-align-left u-margin-bottom-3">
                        Tipografia
                    </Typography>
                </div>
                <Typography tag="h3" className="h1 col-12 u-margin-bottom-3">
                    <Typography tag="span" className="paragraph">h1</Typography> Header 1 O melhor sistema operacional sans
                </Typography>
                <Typography tag="h3" className="h2 col-12 u-margin-bottom-3">
                    <Typography tag="span" className="paragraph">h2</Typography> Header 2 O melhor sistema operacional sans
                </Typography>
                <Typography tag="h3" className="h3 col-12 u-margin-bottom-3">
                    <Typography tag="span" className="paragraph">h3</Typography> Header 3 O melhor sistema operacional sans
                </Typography>
                <Typography tag="h3" className="h4 col-12 u-margin-bottom-3">
                    <Typography tag="span" className="paragraph">h4</Typography> Header 4 O melhor sistema operacional sans
                </Typography>
                <Typography tag="h3" className="h5 col-12 u-margin-bottom-3">
                    <Typography tag="span" className="paragraph">h5</Typography> Header 4 O melhor sistema operacional sans
                </Typography>
                <Typography tag="h3" className="h6 col-12 u-margin-bottom-3">
                    <Typography tag="span" className="paragraph">h6</Typography> Header 4 O melhor sistema operacional sans
                </Typography>
                <Typography tag="h3" className="paragraph col-12 u-margin-bottom-3">
                    Parágrafo O melhor sistema operacional sans Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum mollitia ea sint iusto. Adipisci maxime distinctio beatae ea animi laborum totam corrupti at rem repellendus reiciendis quae earum, corporis eum.
                </Typography>
                <Typography tag="h3" className="paragraph paragraph--primary col-12 u-margin-bottom-3">
                    Parágrafo O melhor sistema operacional sans Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum mollitia ea sint iusto. Adipisci maxime distinctio beatae ea animi laborum totam corrupti at rem repellendus reiciendis quae earum, corporis eum.
                </Typography>
                <Typography tag="h3" className="paragraph paragraph--secondary col-12 u-margin-bottom-3">
                    Parágrafo O melhor sistema operacional sans Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum mollitia ea sint iusto. Adipisci maxime distinctio beatae ea animi laborum totam corrupti at rem repellendus reiciendis quae earum, corporis eum.
                </Typography>
                <Typography tag="h3" className="paragraph paragraph--danger col-12 u-margin-bottom-3">
                    Parágrafo O melhor sistema operacional sans Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum mollitia ea sint iusto. Adipisci maxime distinctio beatae ea animi laborum totam corrupti at rem repellendus reiciendis quae earum, corporis eum.
                </Typography>
                <Typography tag="h3" className="paragraph paragraph--warning u-margin-bottom-3">
                    Parágrafo O melhor sistema operacional sans Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum mollitia ea sint iusto. Adipisci maxime distinctio beatae ea animi laborum totam corrupti at rem repellendus reiciendis quae earum, corporis eum.
                </Typography>
                <Typography tag="h3" className="paragraph paragraph--success col-12 u-margin-bottom-3">
                    Parágrafo O melhor sistema operacional sans Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum mollitia ea sint iusto. Adipisci maxime distinctio beatae ea animi laborum totam corrupti at rem repellendus reiciendis quae earum, corporis eum.
                </Typography>
                <div className="col-12 u-margin-bottom-3">
                    <Typography tag="p" className="quote">
                        Citação O melhor sistema operacional sans Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum mollitia ea sint iusto. Adipisci maxime distinctio beatae ea animi laborum totam corrupti at rem repellendus reiciendis quae earum, corporis eum.
                        <Typography tag="span" className="quote__author">
                            Autor da citação
                        </Typography>
                    </Typography>
                </div>

                <div className="col-12 u-margin-bottom-3">
                    <Typography tag="p" className="note">Nota O melhor sistema operacional sans Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum mollitia ea sint iusto. Adipisci maxime distinctio beatae ea animi laborum totam corrupti at rem repellendus reiciendis quae earum, corporis eum.</Typography>
                </div>
            </div>
        </div>
    )
}

export default TypographySection