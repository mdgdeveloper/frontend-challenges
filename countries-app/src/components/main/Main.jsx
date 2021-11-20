import './main.css';
import Flag from '../flag/Flag';

const Main = ({ flagList, filter, region }) => {
    return (
        <div className="m-main">
            <div className="m-wrapper">
                {flagList ? flagList.data
                .filter(country => country.region.toLowerCase().includes(region.toLowerCase()))
                .filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
                .map( country => <Flag countryInfo={country}/> ): <></>}
            </div>
            
        </div>
    )
}

export default Main
