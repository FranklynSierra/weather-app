import React from 'react';
import './forecast.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const Forecast = ({ data }) => {

    const dayInWeek = new Date().getDay()
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek))

    return (
        <>
            <label className='title'>Daitly</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((i, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img alt='weather' className='icon_small' src={`icons/${i.weather[0].icon}.png`} />

                                    <label className='day'>{forecastDays[index]}</label>

                                    <label className='description'>{i.weather[0].description}</label>
                                    <label className='min-max'>{Math.round(i.main.temp_min)}°C / {Math.round(i.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details'>
                                <div className='daily-details-item'>
                                    <label className='parameter-label'>Pressure</label>
                                    <label className='parameter-value'>{i.main.pressure}</label>
                                </div>
                                <div className="daily-details-item">
                                    <span className="parameter-label">Humidity</span>
                                    <span className="parameter-value">{i.main.humidity}</span>
                                </div>
                                <div className="daily-details-item">
                                    <span className="parameter-label">Pressure</span>
                                    <span className="parameter-value">{i.main.pressure}</span>
                                </div>
                                <div className="daily-details-item">
                                    <span className="parameter-label">Cloud</span>
                                    <span className="parameter-value">{i.clouds.all}</span>
                                </div>
                                <div className="daily-details-item">
                                    <span className="parameter-label">Wind Speed:</span>
                                    <span className="parameter-value">{i.wind.speed} m/s</span>
                                </div>  
                                <div className="daily-details-item">
                                    <span className="parameter-label">Sea Level:</span>
                                    <span className="parameter-value">{i.main.sea_level} m</span>
                                </div> 
                                <div className="daily-details-item">
                                    <span className="parameter-label">Feels Like:</span>
                                    <span className="parameter-value">{Math.round(i.main.feels_like)}°C </span>
                                </div>   
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                ))}

            </Accordion>
        </>
    );
}

export default Forecast;
