import { h, Component } from 'preact';
import './style';

class Argument extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper argument">
                <div className="row argument_candidate">
                    <div className="col-6 argument_candidate_name">
                        Francois Fillon
                    </div>
                    <div className="col-6 argument_candidate_name">
                        Nathalie Arthaud
                    </div>
                </div>

                <div className="row argument_candidate_category">
                    Role d'assurance maladie
                </div>

                <div className="row argument_candidate_compare">
                    <div className="col-6">
                        En contrepartie de droits nouveaux, réaliser un contrôle accru de la recherche d’emploi, pour lequel les moyens de Pôle Emploi seront renforcés et les sanctions rendues justes et crédibles. À l'arrivée à Pôle Emploi, un bilan de compétence sera réalisé dans les 15 jours. Si plus de deux emplois décents, selon des critères de salaire et de qualification sont refusées, ou que l'intensité de la recherche d'emploi est insuffisante, alors les allocations seront suspendues
                    </div>
                    <div className="col-6">
                        En contrepartie de droits nouveaux, réaliser un contrôle accru de la recherche d’emploi, pour lequel les moyens de Pôle Emploi seront renforcés et les sanctions rendues justes et crédibles. À l'arrivée à Pôle Emploi, un bilan de compétence sera réalisé dans les 15 jours. Si plus de deux emplois décents, selon des critères de salaire et de qualification sont refusées, ou que l'intensité de la recherche d'emploi est insuffisante, alors les allocations seront suspendues
                    </div>
                </div>
            </div>
        )
    }
}

export default Argument;