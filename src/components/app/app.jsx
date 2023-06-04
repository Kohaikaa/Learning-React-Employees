import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, name: "Vlad K.", salary: 5000, is_increased: false },
                { id: 2, name: "Milena B.", salary: 800, is_increased: true },
                { id: 3, name: "Kohai", salary: 7000, is_increased: false }
            ]
        };
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return { data: data.filter(elem => elem.id !== id) };
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div className="app" >
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList data={data} onDelete={id => this.deleteItem(id)} />
                <EmployeesAddForm />
            </div>
        );
    }
}

export default App;