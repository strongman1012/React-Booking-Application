import React from 'react';
import Scheduler, { Resource, SchedulerTypes } from 'devextreme-react/scheduler';
import ArrayStore from "devextreme/data/array_store"
import { assignees, data, priorities } from 'src/components/Dashboard/area-4/data';

const currentDate = new Date(2021, 4, 11);
const views: SchedulerTypes.ViewType[] = ['agenda'];
const store = new ArrayStore({
    key: 'id',
    data
})

const Area4 = () => (
    <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={store}
        views={views}
        currentView="agenda"
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={9}>
        <Resource
            dataSource={assignees}
            allowMultiple={true}
            fieldExpr="assigneeId"
            label="Assignee"
            useColorAsDefault={true}
        />
        <Resource
            dataSource={priorities}
            fieldExpr="priorityId"
            label="Priority"
        />
    </Scheduler>
);

export default Area4;
