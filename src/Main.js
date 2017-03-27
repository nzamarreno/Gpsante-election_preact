import { h, render, Component } from 'preact';
import Application from 'components/Application';

class Main extends Component {
    constructor() {
        super();
    }

    render(props, state) {
        return(
                <Application/>
               )
    }
}

render(<Main />, document.body);