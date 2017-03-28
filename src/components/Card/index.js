import { h, Component } from 'preact';
import { default as Store } from 'core/Redux';
import './style';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            candidate: this.props.store.candidate
        };

        Store.subscribe(() => this.forceUpdate());
    }

    componentWillMount() {
        console.log("bon")
    }

    render(){
        let backgroundFirstCandidate = {
            backgroundImage: 'url(images/' + this.state.candidate[0].pictureName + '.jpg)'
        };

        let backgroundSecondCandidate = {
            backgroundImage: 'url(images/' + this.state.candidate[1].pictureName + '.jpg)'
        };

        return (
            <div className="wrapper">
                <div className="card">
                    <div className="row no_gutter">
                        <div className="col-6 card_left">
                            <div className="card_picture" style={backgroundFirstCandidate}></div>
                            <span className="card_text">
                                {this.state.candidate[0].firstName} <strong>{this.state.candidate[0].lastName}</strong>
                                <span>Partie de droite</span>
                            </span>
                        </div>
                        <div className="col-6 card_right">
                            <div className="card_picture" style={backgroundSecondCandidate}></div>
                            <span className="card_text">
                                {this.state.candidate[1].firstName} <strong>{this.state.candidate[1].lastName}</strong>
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