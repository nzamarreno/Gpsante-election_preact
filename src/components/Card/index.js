import { h, Component } from 'preact';
import './style';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <div className="card">
                    <div className="row no_gutter">
                        <div className="col-6 card_left">
                            <div className="card_picture" style="background-image: url(images/fillon.jpg)"></div>
                            <span className="card_text">
                                Francois <strong>Fillon</strong>
                                <span>Partie de droite</span>
                            </span>
                        </div>
                        <div className="col-6 card_right">
                            <div className="card_picture" style="background-image: url(images/arthaud.jpg)"></div>
                            <span className="card_text">
                                Nathalie <strong>Arthaud</strong>
                                <span>Partie de droite</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;