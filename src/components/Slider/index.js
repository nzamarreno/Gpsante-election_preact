import { h, Component } from 'preact';
import Flickity from 'flickity';
import { default as Store } from 'core/Redux';
import Datas from 'datas/Program';
import './style';

class Slider extends Component {
    constructor(props){
        super(props);
        this.state = {currentCandidate: [0, 1]};
    }

    componentDidMount(){
        let flickity = new Flickity('.slider_wrapper', {
            selectedAttraction: 0.01,
            groupCells: true,
            friction: 0.15,
            draggable: false
        });

        
        this.refreshSelectedCandidate();    
    }

    refreshSelectedCandidate(){
        /**
         * Init Candidates Selected
         * @param {this.state.currentCandidate} Index of item in the slider
         */
        let listCandidate = document.querySelectorAll(".slider_slide");

        /**
         * Remove Class on all slide
         */
        for(let candidate of listCandidate){
            candidate.classList.remove("slider_slide--active");
        }

        /**
         * And Add class on candidate selected 
         */
        this.state.currentCandidate.forEach(index => {
            listCandidate[index].classList.add("slider_slide--active");
        }) 
    }

    handleClick(event){
        let currentCandidate = event.target;
        Store.dispatch({    
            type: 'ADD_CANDIDAT', 
            candidate: Datas[currentCandidate.getAttribute('numberCandidate')] 
        });

        this.ChangeChoice(currentCandidate.getAttribute('numberCandidate'));
    }

    ChangeChoice(indexCurrentCandidate){
        let newSelected = [];
        newSelected.push(this.state.currentCandidate[1], Number(indexCurrentCandidate));       
        console.log(newSelected);
        this.setState({
            currentCandidate: newSelected
        }); 

        this.refreshSelectedCandidate();            
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
                    <img src="images/select_picture.svg" alt="Selected" className="slider_select"/>
                </div>
            )
        })
    }

    /**
     * Disable rerender when state is refresh
     * @param {object} nextProps 
     * @param {object} nextState 
     */
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render(){
        return (
            <div className="wrapper slider">
                <h2 className="slider_title"><span><strong>Choisissez</strong> vos 2 candidats</span></h2>
                
                <div className="slider_wrapper">
                    {this.createSlider()}
                </div>
            </div>
        );
    }

}

export default Slider;