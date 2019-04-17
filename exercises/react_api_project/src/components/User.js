import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class User extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    
    componentDidMount() {
        axios.get(`https://api.thedogapi.com/v1/breeds/:breed_id? 64827e97-eaf5-47ef-a26f-f5efb6f2ddd9/${this.props.params.username}`)
        .then(response => {
            this.setState({breeds: response.data})
        })
    }

  
    renderStat(stat) {
        return (
            <li key={stat.name} className="user-info__stat">
                <Link to={stat.url}>
                    <p className="user-info__stat-value">{stat.value}</p>
                    <p className="user-info__stat-name">{stat.name}</p>
                </Link>
            </li>
        );
    }

    render() {
        
        if (!this.state.user) {
            return (<div className="user-page">LOADING...</div>);
        }

        
        const user = this.state.user;

    
        const stats = [
            {
                name: 'Public Repos',
                value: user.public_repos,
                url: `/user/${this.props.params.username}/repos`
            },
            {
                name: 'Followers',
                value: user.followers,
                url: `/user/${this.props.params.username}/followers`
            },
            {
                name: 'Following',
                value: user.following,
                url: `/user/${this.props.params.username}/following`
            }
        ];

       
        return (
            <div className="user-page">
                <div className="user-info">
                    <Link className="user-info__text" to={`/user/${user.login}`}>
                        <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                        <h2 className="user-info__title">{user.login} ({user.name})</h2>
                        <p className="user-info__bio">{user.bio}</p>
                    </Link>

                    <ul className="user-info__stats">
                        {stats.map(this.renderStat)}
                    </ul>
                </div>
            </div>
        );
    }
};

export default User;
