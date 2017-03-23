import { h, Component } from 'preact';
import './style';

class Slider extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="wrapper slider">
                <h2 className="slider_title text--center"><span>Choisissez</span> <br/>votre thematique & vos 2 candidats </h2>
                
                <div className="slider_wrapper">
                    <div className="slider_slide slider_slide--active" style="background-image: url(images/arthaud.jpg)">
                        <h1 className="slider_slide_text">Nathalie <strong>Arthaud</strong></h1>
                    </div>

                    <div className="slider_slide slider_slide--active" style="background-image: url(images/arthaud.jpg)">
                        <h1 className="slider_slide_text">Nathalie <strong>Arthaud</strong></h1>
                    </div>

                    <div className="slider_slide slider_slide--active" style="background-image: url(images/arthaud.jpg)">
                        <h1 className="slider_slide_text">Nathalie <strong>Arthaud</strong></h1>
                    </div>

                    <div className="slider_slide slider_slide--active" style="background-image: url(images/arthaud.jpg)">
                        <h1 className="slider_slide_text">Nathalie <strong>Arthaud</strong></h1>
                    </div>
                </div>
            </div>
        );
    }

}

export default Slider;