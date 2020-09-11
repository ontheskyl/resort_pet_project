import React, { Component } from 'react';
import Title from '../components/Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info : 'A cocktail is an alcoholic mixed drink, which is either a combination of spirits, or one or more spirits mixed with other ingredients such as fruit juice, flavored syrup, or cream. There are various types of cocktails, based on the number and kind of ingredients added. The origins of the cocktail are debated.'
            },
            {
                icon: <FaHiking />,
                title: 'endless hiking',
                info : 'Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. "Hiking" is the preferred term in Canada and the United States; the term "walking" is used in these regions for shorter, particularly urban walks.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'free shuttle',
                info : 'Vans is an American manufacturer of skateboarding shoes and related apparel, based in Santa Ana, California and owned by VF Corporation. The company also sponsors surf, snowboarding, BMX, and motocross teams.[3] Since 1996, the company has been the primary sponsor of the annual Vans Warped Tour traveling rock festival.'
            },
            {
                icon: <FaBeer />,
                title: 'strongest beer',
                info : 'Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea.[5] Beer is brewed from cereal grains—most commonly from malted barley, though wheat, maize (corn), and rice are also used.'
            }
        ]
    }
    render() {
        return (
            <section className = "services">
                <Title title = "services" />

                <div className = "services-center">
                    {this.state.services.map((item, index) => {
                        return <article key = {index} className = "service">
                            <span>{item.icon}</span>
                            <h6> {item.title} </h6>
                            <p> {item.info} </p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
