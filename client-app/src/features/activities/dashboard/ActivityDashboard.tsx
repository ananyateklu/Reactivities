import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';


interface Props {
    activities: Activity[];
}

export default function ActivityDashboard(props: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
             <ActivityList activities={props.activities}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {props.activities[0] && 
                <ActivityDetails activity={props.activities[0]}/>}
                <ActivityForm/>
            </Grid.Column>
        </Grid>
    )
}