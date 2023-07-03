import React, {Component} from "react";

import "./item-status-filter.css";


export default class ItemStatusFilter extends Component {

    state = {
        filter: "all"
    };

    buttons = [
        {name: 'all', label: "All"},
        {name: 'active', label: "Active"},
        {name: 'done', label: "Done"},
    ];

    render() {

        const {filter} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;

            const buttonClass = isActive ? "btn-info" : "btn-outline-secondary";

            return (
                <button type="button"
                        className={`btn ${buttonClass}`}
                        key={name}
                        onClick={() => this.props.onFilterChange(name)}>
                    {label}
                </button>
            );
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    };
};