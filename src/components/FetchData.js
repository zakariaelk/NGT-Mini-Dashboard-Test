import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import App from './App'

let localStorageRef = localStorage.getItem('funds');

class FetchData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: null,
        }
    }


    firebaseConfig = {
        apiKey: "AIzaSyDLRJb6bE4kcNn7saLZ7g9Rus45POWXkI8",
        authDomain: "ngt-dashboard-abc64.firebaseapp.com",
        databaseURL: "https://ngt-dashboard-abc64.firebaseio.com",
        projectId: "ngt-dashboard-abc64",
        storageBucket: "ngt-dashboard-abc64.appspot.com",
        messagingSenderId: "250549245220",
        appId: "1:250549245220:web:6b7441f680f5e255220fb1",
        measurementId: "G-E1CZQYQE35"
    };


    // populateStorage() {
    //   localStorage.setItem('funds', JSON.stringify(this.state.data));
    // }


    // GET DATA
    gotData = (fundsRef) => {
        const funds = fundsRef.val();

        this.setState({
            data: Object.values(funds),
            loading: false
        })
        console.log('weve set the fetched values to state');
        console.log(this.state.data);

        localStorage.setItem('funds', JSON.stringify(this.state.data));
    }

    //ERR DATA
    errData = (error) => {
        console.log(error);
    }


    // FETCHING DATA

    fetchData = () => {

        if (!firebase.apps.length) {
            firebase.initializeApp(this.firebaseConfig);
        }

        const database = firebase.database();
        console.log(database);

        const fundsRef = database.ref('funds');
        fundsRef.limitToFirst(15360).on('value', this.gotData, this.errData);
    }

    componentDidMount() {

        console.log(this.state.loading);

        if (localStorageRef !== null) {
            console.log('setting state with localstorage Data');
            this.setState({
                loading: false,
                data: JSON.parse(localStorageRef)
            });
        } else {
            console.log('Fetching Data');
            this.fetchData();
        }

    }



    componentDidUpdate() {
        localStorage.setItem('funds', JSON.stringify(this.state.data));
    }


    render() {
        return (
            <App loading={this.state.loading} data={this.state.data} />
        )
    }

}

export default FetchData;
