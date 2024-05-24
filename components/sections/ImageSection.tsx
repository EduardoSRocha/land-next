import React from "react";
import Image from "../Image";
import Section from "../Section";
import Typography from "../Typography";

const ImageSection: React.FC = () => {
    return (
        <Section className="section-basic-elements__images">
            <div className="row u-space-between-child-elements-3">
                <div className="col-12">
                    <Typography tag="h3" className="h3 u-margin-bottom-2">Imagens</Typography>
                </div>
                <div className="col-2">
                    <Typography tag="h3" className="h6 u-margin-bottom-1">Quadrada</Typography>
                    <Image src="/img/hero-3.jpg" alt="Square Image"  minHeight="18rem" minWidth="18rem" className="img img--square"/>
                </div>
                <div className="col-2">
                    <Typography tag="h3" className="h6 u-margin-bottom-1">Redonda</Typography>
                    <Image src="/img/hero-3.jpg" alt="Circle Image"  minHeight="18rem" minWidth="18rem" className="img img--circle"/>
                </div>
                
                <div className="col-2">
                    <Typography tag="h3" className="h6 u-margin-bottom-1">Sombra</Typography>
                    <Image src="/img/hero-3.jpg" alt="Square Raised"  minHeight="18rem" minWidth="18rem" className="img img--square img--square--raised"/>
                </div>
                <div className="col-3">
                    <Typography tag="h3" className="h6 u-margin-bottom-1">Sombreada Circular</Typography>
                    <Image src="/img/hero-3.jpg" alt="Circle Raised"  minHeight="18rem" minWidth="18rem" className="img img--circle img--circle--raised"/>
                </div>
            </div>
        </Section>
    )
}

export default ImageSection;