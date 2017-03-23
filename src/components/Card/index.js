import { h, Component } from 'preact';
import './style';

class Card extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="wrapper">
                <div className="card">
                    <div className="row no_gutter">
                        <div className="col-6 card_left no_gutter">

                        </div>
                        <div className="col-6 card_right no_gutter">

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;