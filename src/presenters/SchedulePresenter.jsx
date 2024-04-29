import {ScheduleView} from '../views/ScheduleView.jsx';

export default function SchedulePresenter(props) {

    function scheduleChangeACB(){
        props.model.setCreatingSchedule()
    }

    function hoursChangedACB(action){
        props.model.setScheduleHours(action)
    }

    function minutesChangedACB(action){
        props.model.setScheduleMinutes(action)
    }

    function clickedCancelResetTimeACB(){
        props.model.resetTime()
    }

    function saveScheduleACB(){
        props.model.saveCurrentTimeToSchedules()
    }

    function onOffStateChangedACB(){
        props.model.setOnOffState()
    }

    return (
        <div>
            <ScheduleView
            creatingSchedule = {props.model.creatingSchedule}
            scheduleChange = {scheduleChangeACB}
            hours = {props.model.scheduleHours}
            minutes = {props.model.scheduleMinutes}
            onOffState = {props.model.scheduleOnOffState}
            onOffStateChanged = {onOffStateChangedACB}
            hoursChanged = {hoursChangedACB}
            minutesChanged = {minutesChangedACB}
            resetTime = {clickedCancelResetTimeACB}
            saveCurrentTime = {saveScheduleACB}
            schedules = {props.model.schedules}
            />
        </div>
  );
}