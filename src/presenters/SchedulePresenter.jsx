import {ScheduleView} from '../views/ScheduleView.jsx';

export default function SchedulePresenter(props) {

    function scheduleChangeACB(){
        props.model.setCreatingSchedule()
    }

    return (
        <div>
            <ScheduleView
            creatingSchedule={props.model.creatingSchedule}
            scheduleChange={scheduleChangeACB}
            />
        </div>
  );
}