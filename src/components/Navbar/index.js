import { h, Component } from 'preact';
import { default as Store } from 'core/Redux';
import './style';

class Navbar extends Component {
    constructor(props){
        super(props);
    }

    handleClick(event){
        event.preventDefault();
        let listItems = document.querySelectorAll(".navbar li");
        for(let item of listItems){
            item.classList.remove("navbar--active");
        }

        let currentCategory = event.currentTarget;
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
                    <li onClick={event => this.handleClick(event)} data-rubric="exercice" data-name="Exercice libéral" className="navbar--active">
                        <span className="icon-coins"></span>
                        Exercice <br/>
                        libéral
                    </li>
                    <li onClick={event => this.handleClick(event)} data-rubric="hospital" data-name="Hôpital">
                        <span className="icon-hospital"></span>
                        Hôpital
                    </li>
                    <li onClick={event => this.handleClick(event)} data-rubric="assurance" data-name="Assurance maladie">
                        <span className="icon-assurance"></span>
                        Assurance <br/>
                        maladie
                    </li>
                    <li onClick={event => this.handleClick(event)} data-rubric="desert" data-name="Déserts médicaux">
                        <span className="icon-exercice"></span>
                        Déserts <br/>
                        médicaux
                    </li>
                    
                    <li onClick={event => this.handleClick(event)} data-rubric="santePublic" data-name="Santé Publique">
                        <span className="icon-ame"></span>
                        Santé<br/>
                        publique
                    </li>
                </ul>
            </div>
        );
    }

}

export default Navbar;