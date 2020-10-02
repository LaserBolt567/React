import React from 'react';
import { Link, useRouteMatch, useParams, Switch, Route } from 'react-router-dom';
import AppRoutes from './app/routes';
import styles from './App.module.css';

function App() {
    return (
        <div>
            <nav className={styles.header}>
                <Link to='/'>Home</Link>

                <Link to='/about'>About</Link>

                <Link to='/users'>Users</Link>

                <Link to='/topics'>Topics</Link>
            </nav>

            <AppRoutes />
        </div>
    );
}

export function Home() {
    return (
        <h1>Home</h1>
    );
}

export function About() {
    return (
        <div>
            <h1>About</h1>
            <p>This is the description about the app</p>
        </div>
    );
}

export function Users() {
    return (
        <div>
            <h1>Users</h1>
            <ul>
                <li>UserX</li>
                <li>UserY</li>
                <li>UserZ</li>
            </ul>
        </div>
    );
}

export function Topics() {
    let routeMatch = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>
            <div className={styles.header}>
                <Link to={`${routeMatch.url}/topicX`}>TopicX</Link>
                <Link to={`${routeMatch.url}/topicY`}>TopicY</Link>
                <Link to={`${routeMatch.url}/topicZ`}>TopicZ</Link>
            </div>

            <Switch>
                <Route path={`${routeMatch.path}/:topicId`}>
                    <Topic />
                </Route>

                <Route path={routeMatch.path}>
                    <h3>Please select a topic</h3>
                </Route>
            </Switch>
        </div>
    );
}

export function Topic() {
    let { topicId } = useParams();
    return (
        <h2>Loaded {topicId}</h2>
    );
}

export default App;
