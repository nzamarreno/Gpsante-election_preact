import { h, Component } from 'preact';
import Header from 'components/Header';
import Slider from 'components/Slider';
import Card from 'components/Card';


class Application extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <Slider/>
                <Card/>
            </div>
        )
    }

}

export default Application;