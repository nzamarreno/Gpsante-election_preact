import { h, Component } from 'preact';
import { default as Store } from 'core/Redux';
import './style';

class Argument extends Component {
    constructor(props){
        super(props);
        this.state = {
            candidate: this.props.store.candidate,
            category: this.props.store.category
        };

        Store.subscribe(() => this.forceUpdate());
    }

    render(){
        return (
            <div className="wrapper argument">
                <div className="row argument_candidate">
                    <div className="col-6 argument_candidate_name">
                         {this.state.candidate[0].firstName + " " + this.state.candidate[0].lastName}
                    </div>
                    <div className="col-6 argument_candidate_name">
                        {this.state.candidate[1].firstName + " " + this.state.candidate[1].lastName}
                    </div>
                </div>

                <div className="row argument_candidate_compare">
                    <ul className="col-6"
                        dangerouslySetInnerHTML={{__html:this.state.candidate[0].program[this.state.category[0].name]}}>
                    </ul>
                    <ul className="col-6"
                        dangerouslySetInnerHTML={{__html:this.state.candidate[1].program[this.state.category[0].name]}}>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Argument;