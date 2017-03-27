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
        console.log("state", this.state)
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

                <div className="row argument_candidate_category">
                    {this.state.category[0].title}
                </div>

                <div className="row argument_candidate_compare">
                    <div className="col-6">
                        {this.state.candidate[0].program[this.state.category[0].name]}
                    </div>
                    <div className="col-6">
                        {this.state.candidate[1].program[this.state.category[0].name]}
                    </div>
                </div>
            </div>
        )
    }
}

export default Argument;