import React from "react";
import Typography from "../Typography";
import Button from "../Button";
import IconButton from "../IconButton";

const ButtonSection: React.FC = () => {
    return (
        <div className="section-basic-elements__buttons">
            <div className="row">
              <div className="col-12">
                <Typography tag="h3" className="h3 u-margin-bottom-3 u-text-align-right">
                  Botões
                </Typography>
              </div>
              <div className="row">
                <div className="col-12 u-margin-bottom-2 u-space-between-child-elements-1">
                  <div className="row">
                    <div className="col-12 u-text-align-left">
                      <Typography tag="h6" className="h6 u-margin-bottom-2">
                        Explore diversos tamanhos:
                      </Typography>
                    </div>
                    <Button href="#" className="btn btn--semi-rounded btn--small btn--primary">
                      Pequeno
                    </Button>
                    <Button href="#" className="btn btn--semi-rounded btn--medium btn--primary">
                      Médio
                    </Button>
                    <Button href="#" className="btn btn--semi-rounded btn--large btn--primary">
                      Grande
                    </Button>
                    <IconButton className="icon-button icon-button--small" icon="ubuntu" />
                    <IconButton className="icon-button icon-button--medium" icon="ubuntu" />
                    <IconButton className="icon-button icon-button--large" icon="ubuntu" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 u-margin-bottom-2 u-space-between-child-elements-1">
                  <div className="row">
                    <div className="col-12 u-text-align-left">
                      <Typography tag="h3" className="h6 u-margin-bottom-2">
                        Explore Diversos Estilos:
                      </Typography>
                    </div>
                    <Button href="#" className="btn btn--small btn--secondary">
                      Padrão 
                    </Button>
                    <Button href="#" className="btn btn--rounded btn--small btn--secondary">
                      Arredondado
                    </Button>
                    <Button href="#" className="btn btn--semi-rounded btn--small btn--secondary">
                      Semi-arredondado
                    </Button>
                    <Button href="#" className="btn btn--semi-rounded btn--small btn--outline--secondary">
                      Outline
                    </Button>

                    </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 u-margin-bottom-2 u-space-between-child-elements-1">
                  <div className="row">
                    <div className="col-12 u-text-align-left">
                      <Typography tag="h3" className="h6 u-margin-bottom-2">
                        Explore Diversas Cores:
                      </Typography>
                    </div>
                    <div className="col-12 u-text-align left u-margin-bottom-2">
                      <Button href="#" className="btn btn--semi-rounded btn--medium">
                        Default 
                      </Button>
                      <Button href="#" className="btn btn--semi-rounded btn--medium btn--primary">
                        Primário
                      </Button>
                      <Button href="#" className="btn btn--semi-rounded btn--medium btn--secondary">
                        Secundário
                      </Button>
                      <Button href="#" className="btn btn--semi-rounded btn--medium btn--danger">
                        Perigo
                      </Button>
                      <Button href="#" className="btn btn--semi-rounded btn--medium btn--warning">
                        Aviso
                      </Button>
                      <Button href="#" className="btn btn--semi-rounded btn--medium btn--success">
                        Sucesso
                      </Button>
                      <Button href="#" className="btn btn--semi-rounded btn--medium btn--white">
                        Branco
                      </Button>
                    </div>
                    <div className="col-12 u-text-align left u-margin-bottom-2">
                      <Button href="#" className="btn btn--semi-rounded btn--medium btn--outline">
                        Default 
                      </Button>
                      <Button href="#" className="btn btn--semi-rounded btn--medium btn--outline--primary">
                        Primário
                      </Button>
                      <Button href="#" className="btn btn--semi-rounded btn--medium btn--outline--secondary">
                        Secundário
                      </Button>
                      <Button href="#" className="btn btn--semi-rounded btn--medium btn--outline--danger">
                        Perigo
                      </Button>
                      <Button href="#" className="btn btn--semi-rounded btn--medium btn--outline--warning">
                        Aviso
                      </Button>
                      <Button href="#" className="btn btn--semi-rounded btn--medium btn--outline--success">
                        Sucesso
                      </Button>
                    </div>
                    <div className="col-12 u-margin-bottom-2 u-space-between-child-elements-1">
                      <IconButton className="icon-button icon-button--large" icon="ubuntu" />
                      <IconButton className="icon-button icon-button--large icon-button--primary" icon="ubuntu" />
                      <IconButton className="icon-button icon-button--large icon-button--secondary" icon="ubuntu" />
                      <IconButton className="icon-button icon-button--large icon-button--danger" icon="ubuntu" />
                      <IconButton className="icon-button icon-button--large icon-button--warning" icon="ubuntu" />
                      <IconButton className="icon-button icon-button--large icon-button--success" icon="ubuntu" />
                      <IconButton className="icon-button icon-button--large icon-button--white" icon="ubuntu" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default ButtonSection