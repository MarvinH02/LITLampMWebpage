import {ScheduleView} from '../views/ScheduleView.jsx';

export default function SchedulePresenter(props) {

    function createScheduleACB(){
        props.model.setShowCreatingSchedule();
    }

    function hideScheduleACB(){
        props.model.setHideCreatingSchedule();
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

    function clearSchedulesACB(){
        props.model.clearSchedules()
    }

    return (
        <div>
            <ScheduleView
            creatingSchedule = { props.model.creatingSchedule }
            createSchedule = { createScheduleACB }
            hideSchedule = { hideScheduleACB }
            hours = { props.model.scheduleHours }
            minutes = { props.model.scheduleMinutes }
            onOffState = { props.model.scheduleOnOffState }
            onOffStateChanged = { onOffStateChangedACB }
            hoursChanged = { hoursChangedACB }
            minutesChanged = { minutesChangedACB }
            resetTime = { clickedCancelResetTimeACB }
            saveCurrentTime = { saveScheduleACB }
            schedules = { props.model.schedules }
            clearAllSchedules = { clearSchedulesACB }
            />
        </div>
  );
}