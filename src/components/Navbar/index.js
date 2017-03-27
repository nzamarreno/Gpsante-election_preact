import { h, Component } from 'preact';
import { default as Store } from 'core/Redux';
import './style';

class Navbar extends Component {
    constructor(props){
        super(props);
    }

    handleClick(event){
        event.stopPropagation();
        let listItems = document.querySelectorAll(".navbar li");
        for(let item of listItems){
            console.log(item)
            item.classList.remove("navbar--active");
        }

        let currentCategory = event.target;
        currentCategory.classList.toggle("navbar--active");

        Store.dispatch({ 
            type: 'SELECT_CATEGORY', 
            category: {
                name: currentCategory.getAttribute('data-rubric'),
                title: currentCategory.getAttribute('data-name')
            } 
        });
    }

    render(){
        return (
            <div className="wrapper text--center">
                <ul className="navbar">
                    <li onClick={event => this.handleClick(event)} className="navbar--active" data-rubric="etudes" data-name="Étude de médecine">
                        <span className="icon-school"></span>
                        Étude de médecine
                    </li>
                    <li onClick={event => this.handleClick(event)} data-rubric="remuneration" data-name="Rémunération">
                        <span className="icon-coins"></span>
                        Rémunération
                    </li>
                    <li onClick={event => this.handleClick(event)} data-rubric="exercice" data-name="Mode d'exercice">
                        <span className="icon-exercice"></span>
                        Mode <br/>
                        d'exercice
                    </li>
                    <li onClick={event => this.handleClick(event)} data-rubric="assurance" data-name="Rôle assurance maladie">
                        <span className="icon-assurance"></span>
                        Rôle assurance <br/>
                        maladie
                    </li>
                    <li onClick={event => this.handleClick(event)} data-rubric="ame" data-name="AME (Aide Médecical d'état)">
                        <span className="icon-ame"></span>
                        AME <i>(Aide Médecical d'état)</i>
                    </li>
                    <li onClick={event => this.handleClick(event)} data-rubric="hospital" data-name="Hôpital">
                        <span className="icon-hospital"></span>
                        Hôpital
                    </li>
                    <li onClick={event => this.handleClick(event)} data-rubric="complementary" data-name="Rôle des complémentaires">
                        <span className="icon-further"></span>
                        Rôle des <br/>
                        complémentaires
                    </li>
                </ul>
            </div>
        );
    }

}

export default Navbar;