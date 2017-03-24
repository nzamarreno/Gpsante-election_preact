import { h, Component } from 'preact';
import './style';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper text--center">
                <ul className="navbar">
                    <li className="navbar--active" data-rubric="etudes">
                        <span className="icon-school"></span>
                        Étude de médecine
                    </li>
                    <li data-rubric="honoraires">
                        <span className="icon-coins"></span>
                        Rémunération
                    </li>
                    <li data-rubric="exercice">
                        <span className="icon-exercice"></span>
                        Mode <br/>
                        d'exercice
                    </li>
                    <li data-rubric="assurance">
                        <span className="icon-assurance"></span>
                        Rôle assurance <br/>
                        maladie
                    </li>
                    <li data-rubric="public">
                        <span className="icon-ame"></span>
                        AME <i>(Aide Médecical d'état)</i>
                    </li>
                    <li data-rubric="hospital">
                        <span className="icon-hospital"></span>
                        Hôpital
                    </li>
                    <li data-rubric="further">
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