import { h, Component } from 'preact';
import Header from 'components/Header';
import Slider from 'components/Slider';
import Card from 'components/Card';
import Navbar from 'components/Navbar';
import Argument from 'components/Argument';
import Datas from 'datas/Program';


class Application extends Component {
    constructor() {
        super();
    }

    render(props) {
        return (
            <div>
                <Header/>
                <Slider candidate={Datas}/>
                <Card />
                <Navbar />
                <Argument />
            </div>
        )
    }

}

export default Application;