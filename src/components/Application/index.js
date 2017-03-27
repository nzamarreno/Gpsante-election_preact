import { h, Component } from 'preact';

import Header from 'components/Header';
import Slider from 'components/Slider';
import Card from 'components/Card';
import Navbar from 'components/Navbar';
import Argument from 'components/Argument';

import Datas from 'datas/Program';
import { default as Store } from 'core/Redux';



class Application extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        Store.dispatch({ type: 'ADD_CANDIDAT', candidate: Datas[0] });
        Store.dispatch({ type: 'ADD_CANDIDAT', candidate: Datas[1] });
    }

    render(props) {
        return (
            <div className="main">
                <Header/>
                <Slider candidate={Datas}/>
                <Card store={Store.getState()}/>
                <Navbar />
                <Argument store={Store.getState()}/>
            </div>
        )
    }

}


export default Application;