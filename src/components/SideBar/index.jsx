import React, { Component } from 'react';
import SideBarElement from '../common/SideBarElement';

class SideBar extends Component {
    state = {
        elements: [
            {
                url: '/clients',
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
                        url: '/monitoring',
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
                        url: '/account',
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
            <React.Fragment>
                {elements.map((element, index) => (
                    <SideBarElement
                        key={index}
                        url={element.url}
                        text={element.text}
                        lis={element.lis}
                        iconClass={element.iconClass}
                    />
                ))}
            </React.Fragment>
        );
    }
}

export default SideBar;