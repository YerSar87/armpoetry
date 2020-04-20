import React from "react";
import classes from './poems.module.css'
import {NavLink} from "react-router-dom";
import Author from "./Author/author";

class Poems extends React.Component{

    state = {
      display: '',
    };

    render() {
        let poem = this.props.charentc.poems;
        let showPoem = (e) => {
            let text = e.target.innerText;
            let title = poem.map(p => {
                return (
                    p.title === text
                        ? <div>
                            <span className={classes.title}>{p.title}</span>
                            <pre>{p.poem}</pre>
                        </div>
                        : ''
                )
            });
            this.setState({
                display: title
            })
        };
        let titles = this.props.charentc.poems.map(poem => {
            return <li>
                <NavLink to={'/poems/' + poem.title} className={classes.titleLink} activeClassName={classes.active}
                         onClick={showPoem}>{poem.title}</NavLink>
            </li>
        });



        return <div className={classes.poemPage}>
            <div>
                <Author/>
                <nav className={classes.navbar}>
                    <ul className={classes.menu}>
                        {titles}
                    </ul>
                </nav>
            </div>

            <div className={classes.poemBlock}>
                {!this.state.display
                    ? <div>
                        <span className={classes.title}>{poem[0].title}</span>
                        <pre>{poem[0].poem}</pre>
                    </div>
                    : this.state.display}
            </div>
        </div>;
    }
}

export default Poems;