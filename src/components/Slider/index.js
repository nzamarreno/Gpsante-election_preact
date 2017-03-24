import { h, Component } from 'preact';
import Flickity from 'flickity';
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
        event.target.classList.add("slider_slide--active");
    }

    createSlider(props){
        let candidates = this.props.candidate;
        return  candidates.map((candidate) => {
            let divStyle = {
                backgroundImage: 'url(images/' + candidate.pictureName + '.jpg)'
            };
            return (
                <div onClick={event => this.handleClick(event)} className="slider_slide" style={divStyle}>
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