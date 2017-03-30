import { h, Component } from 'preact';
import { default as Store } from 'core/Redux';
import TweenMax from "gsap";
import './style';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            candidate: this.props.store.candidate
        };

        Store.subscribe(() => this.forceUpdate());
    }

    componentWillUpdate() {
        let $leftCard = document.querySelector(".card_left_transition");
        TweenMax.to($leftCard, .5, {x: "100%", 
            onComplete: () => TweenMax.to($leftCard, 1, {x: "0%"})
        });

        let $rightCard = document.querySelector(".card_right_transition");
        TweenMax.to($rightCard, .5, {x: "100%", 
            onComplete: () => TweenMax.to($rightCard, 1, {x: "0%"})
        });

        let $text = document.querySelectorAll(".mask_animation");
        TweenMax.to($text, .5, {y: 35, 
            onComplete: () => TweenMax.to($text, 1, {y: 0})
        });

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
                            <div className="card_picture" style={backgroundFirstCandidate}>
                                <div className="card_left_transition"></div>
                            </div>
                            <span className="card_text">
                                <div className="mask">
                                    <div className="mask_animation">
                                        {this.state.candidate[0].firstName} <strong>{this.state.candidate[0].lastName}</strong>
                                    </div>
                                </div>
                                <div className="mask">
                                    <div className="mask_animation">
                                        <span>{this.state.candidate[0].partie}</span>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className="col-6 card_right">
                            <div className="card_picture" style={backgroundSecondCandidate}>
                                <div className="card_right_transition"></div>
                            </div>
                            <span className="card_text">
                                <div className="mask">
                                    <div className="mask_animation">
                                        {this.state.candidate[1].firstName} <strong>{this.state.candidate[1].lastName}</strong>
                                    </div>
                                </div>
                                <div className="mask">
                                    <div className="mask_animation">
                                        <span>{this.state.candidate[1].partie}</span>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;