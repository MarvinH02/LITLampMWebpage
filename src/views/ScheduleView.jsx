import '../style.css';

function ScheduleView (props) {
    
    function creatingScheduleHandler(){
        props.scheduleChange()
    }

    if(!props.creatingSchedule)     //view for seeing all your schedules
    return (
        <div>
            <div className='center'>
                <h1>Schedules</h1>
            </div>
            <div className='center'>
                <v-btn onClick={creatingScheduleHandler}>
                Add schedule
                </v-btn>
            </div>
        </div>
      
    )
    else if(props.creatingSchedule){    //view for creating schedules
        return(
            <div>
                <div className='center'>
                    <h1>Creating Schedule</h1>
                </div>
                <div className='center'>
                    <v-btn onClick={creatingScheduleHandler}>
                    Cancel
                    </v-btn>
                </div>
            </div>
        )
    }


  }
  
  export {ScheduleView}