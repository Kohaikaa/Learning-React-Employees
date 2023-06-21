import './app-filter.css';

const AppFilter = (props) => {
    const btnData = [
        { criteria: 'all', label: "Все сотрудники" },
        { criteria: 'rise', label: "Сотрудники на повышение" },
        { criteria: 'salary', label: "ЗП больше 1000" },
    ];

    const btns = btnData.map(({ criteria, label }) => {
        const isActive = props.criteria === criteria;
        const clazz = isActive ? "btn-light" : "btn-outline-light";
        return (
            <button className={`btn ${clazz}`}
                type='button'
                key={criteria}
                onClick={() => props.onFilterChanged(criteria)}>{label}</button>
        )
    });

    return (<div className="btn-group">{btns}</div>);
}

export default AppFilter;