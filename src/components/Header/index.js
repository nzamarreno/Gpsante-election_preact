import { h, Component } from 'preact';
import './style';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="header_baseline">
                                <span> Comparatif</span> <br/> des programmes
                            </h1>

                            <div className="header_election">
                                <img src="images/pictogramme_election.png" alt=""/>
                                <h3 className="header_election_text">
                                    <span>special</span>
                                    election <br/>
                                    presidentielle
                                </h3>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;