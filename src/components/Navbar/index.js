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
                    <li onClick={event => this.handleClick(event)} data-rubric="exercice" data-name="Rémunération">
                        <span className="icon-coins"></span>
                        Exercice Liberale
                    </li>
                    <li onClick={event => this.handleClick(event)} data-rubric="hospital" data-name="Hôpital">
                        <span className="icon-hospital"></span>
                        Hôpital
                    </li>
                    <li onClick={event => this.handleClick(event)} data-rubric="assurance" data-name="Rôle assurance maladie">
                        <span className="icon-assurance"></span>
                        Assurance <br/>
                        maladie
                    </li>
                    <li onClick={event => this.handleClick(event)} data-rubric="desert" data-name="Mode d'exercice">
                        <span className="icon-exercice"></span>
                        Déserts médicaux
                    </li>
                    
                    <li onClick={event => this.handleClick(event)} data-rubric="santePublic" data-name="AME (Aide Médecical d'état)">
                        <span className="icon-ame"></span>
                        Santé<br/>publique
                    </li>
                </ul>
            </div>
        );
    }

}

export default Navbar;