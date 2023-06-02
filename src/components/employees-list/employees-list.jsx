import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ data }) => {
    const elems = data.map(item => {
        return (
            <EmployeesListItem {...item} />
        )
    });
    return (
        <ul className="app-list list-group">
            {/* <EmployeesListItem name="Vlad K." salary={5000} />
            <EmployeesListItem name="Milena B." salary={800} />
            <EmployeesListItem name="Kohai" salary={7000} /> */elems}

        </ul>
    );
};

export default EmployeesList;