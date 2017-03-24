import { h, Component } from 'preact';
import Flickity from 'flickity';
import { default as Store } from 'core/Redux';
import Datas from 'datas/Program';
import './style';

class Slider extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let flickity = new Flickity('.slider_wrapper', {
            selectedAttraction: 0.01,
            groupCells: true,
            friction: 0.15,
            draggable: false
        })
    }

    handleClick(event) {
        if(document.querySelectorAll(".slider_slide--active").length > 1){
        }
        else{
            let currentCandidate = event.target;
            currentCandidate.classList.toggle("slider_slide--active");
            Store.dispatch({ type: 'ADD_CANDIDAT', candidate: Datas[currentCandidate.getAttribute('numberCandidate')] })
        }
    }

    createSlider(props){
        let candidates = this.props.candidate;
        return  candidates.map((candidate, index) => {
            let background = {
                backgroundImage: 'url(images/' + candidate.pictureName + '.jpg)'
            };
            return (
                <div onClick={event => this.handleClick(event)} className="slider_slide" style={background} numberCandidate={index}>
                    <span className="slider_slide_text">{candidate.firstName} <strong>{candidate.lastName}</strong></span>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="wrapper slider">
                <h2 className="slider_title text--center"><span>Choisissez</span> <br/>votre thematique & vos 2 candidats </h2>
                
                <div className="slider_wrapper">
                    {this.createSlider()}
                </div>
            </div>
        );
    }

}

export default Slider;