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
            ],
            lastId: 3
        };
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return { data: data.filter(elem => elem.id !== id) };
        });
    }
    addItem = (e, item) => {
        e.preventDefault();
        if ((item.name.trim() === "" || item.name === null) ||
            (item.salary === null || item.salary.trim() === "")) {
            return
        }
        this.setState(({ data, lastId }) => {
            item.id = lastId + 1;
            item.is_increased = false;
            return {
                data: [...data, item],
                lastId: lastId + 1
            };
        });
    }

    onToggleIncrease = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id)
                    return { ...item, is_increased: !item.is_increased };
                return item;
            })
        }));
    }

    render() {
        const { data } = this.state;
        const amountOfPrize = data.filter(el => el.is_increased).length;
        return (
            <div className="app" >
                <AppInfo
                    amountOfEmployees={data.length}
                    amountOfPrize={amountOfPrize} />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={data}
                    onDelete={id => this.deleteItem(id)}
                    onToggleIncrease={id => this.onToggleIncrease(id)} />
                <EmployeesAddForm onAdd={(e, item) => this.addItem(e, item)} />
            </div>
        );
    }
}

export default App;