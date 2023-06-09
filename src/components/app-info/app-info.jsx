import './app-info.css';

const AppInfo = ({ amountOfEmployees, amountOfPrize }) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании KohaiFamily</h1>
            <h2>Общее количество сотрудников: {amountOfEmployees}</h2>
            <h2>Премию получат: {amountOfPrize}</h2>
        </div>
    );
};

export default AppInfo;