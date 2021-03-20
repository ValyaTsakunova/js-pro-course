import {showNotification} from './script.js'

async function getData(){
   try{
        const resp = await fetch('./data.json');
        const data = await resp.json();
        showNotification(data)

    } catch(error){
        console.log('something went wrong');
        return;
    }

}

getData();