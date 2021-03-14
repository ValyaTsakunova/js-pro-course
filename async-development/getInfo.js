import {getData} from './index.js';
import {saveHistory} from './index.js';

export const getInfo = function(firstOpt, secondOpt){
    fetch(`http://api.weatherstack.com/current?access_key=09e472f963826a15c0f422d0ca58a536&query=${firstOpt},${secondOpt}`).then(response => {
        return response.json()
    }).then(data => {
        getData(data);
        saveHistory(data); 
    })  
}