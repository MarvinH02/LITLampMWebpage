import '../style.css';

function ScheduleView (props) {

    function creatingScheduleHandler(){
        props.resetTime()
        props.createSchedule()
    }

    function cancelCreatingScheduleHandler(){
        props.resetTime()
        props.hideSchedule()
    }

    function hoursHandler(action){
        props.hoursChanged(action.target.textContent)
    }

    function minutesHandler(action){
        props.minutesChanged(action.target.textContent)
    }

    function onOffStateHandler(){
        props.onOffStateChanged()
    }

    function saveScheduleHandler(){
        props.saveCurrentTime()
        props.hideSchedule()
    }

    function clearAllScheduleHandler(){
        props.clearAllSchedules()
    }

    function showSchedulesCB(schedule){
        return(
            <div className='schedule'>
                {console.log(schedule.scheduleOnOffState)}
                {schedule.hours >= 10 ? <p>{schedule.hours}</p> : <p>0{schedule.hours}</p>}:{schedule.minutes >= 10 ? <p>{schedule.minutes}</p> : <p>0{schedule.minutes}</p>} {schedule.nextDay ? <p> {schedule.scheduleDay == currentDay ? <p>_tomorrow_</p>: <p>_</p>} </p> : <p>_</p>} on time turn:  {schedule.onTimeTurn ? <p>ON</p> : <p>OFF</p>}
            </div>
        )
    }

    let currentDay = parseInt((new Date().toLocaleDateString()).slice(0, 3));
    console.log("current day:"+ currentDay)

    if(!props.creatingSchedule)     //view for seeing all your schedules
    return (
        <div>
            <div className='center'>
                <h1>Schedules</h1>
            </div>
            <div>
                {props.schedules.map(showSchedulesCB)}
            </div>
            <div className='center'>
                <v-btn onClick={creatingScheduleHandler}>
                Add schedule
                </v-btn>
                <v-btn onClick={clearAllScheduleHandler}>
                Clear All
                </v-btn>
            </div>
        </div>
      
    )
    else if(props.creatingSchedule){    //view for creating schedules
        return(
            <div>
                <div className='center'>
                    <h1>Set Timer</h1>
                </div>
                <div className='center'>
                <v-btn onClick={hoursHandler}> + </v-btn> <v-btn onClick={minutesHandler}> + </v-btn>
                </div>
                <div className='createScheduleDisplay'>
                    {props.hours >= 10 ? <p>{props.hours}</p> : <p>0{props.hours}</p>}:{props.minutes >= 10 ? <p>{props.minutes}</p> : <p>0{props.minutes}</p>}
                </div>
                <div className='center'>
                <v-btn onClick={hoursHandler}> - </v-btn> <v-btn onClick={minutesHandler}> - </v-btn> 
                </div>
                <div className='center'>
                    <v-btn onClick={cancelCreatingScheduleHandler}> Cancel </v-btn> <v-btn onClick={onOffStateHandler}> on time turn {props.onOffState ? <p>ON</p> : <p>OFF</p>}</v-btn> <v-btn disabled = {props.schedules.length >= 5} onClick={saveScheduleHandler}> Save </v-btn>
                </div>
            </div>
        )
    }


  }
  
  export {ScheduleView}