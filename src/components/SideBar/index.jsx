import React, { Component } from 'react';
import SideBarElement from '../common/SideBarElement';
import classes from './sidebar.module.scss';

class SideBar extends Component {
    state = {
        elements: [
            {
                url: '/dashborad',
                text: 'Dashboard',
                iconClass: 'fa fa-home',
                lis: []
            },
            {
                url: '/content',
                text: 'Content Managment',
                iconClass: 'fa fa-indent',
                lis: []
            },
            {
                url: '/monitoring',
                text: 'Monitoring',
                iconClass: 'fa fa-clock-o',
                lis: [
                    {
                        text: 'Content',
                        iconClass: 'fa fa-lightbulb-o'
                    }
                ]
            },
            {
                url: '/account',
                text: 'Acount',
                iconClass: 'fa fa-cog',
                lis: [
                    {
                        text: 'Users',
                        iconClass: 'fa fa-users'
                    }
                ]
            }
        ]
    };
    render() {
        const { elements } = this.state;
        return (
            <nav>
                <ul className={classes.nav__links}>
                    {
                        elements.map((element, index) => (
                            <li key={index} className={classes.nav__link}>
                                <SideBarElement
                                    url={element.url}
                                    text={element.text}
                                    lis={element.lis}
                                    iconClass={element.iconClass}
                                />
                            </li>
                        ))
                    }
                </ul>
            </nav>
        );
    }
}

export default SideBar;