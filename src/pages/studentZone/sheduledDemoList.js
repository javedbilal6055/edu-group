const SheduledDemoList = props => {
    return (
        <div className="row my-5">
        <h3 className="fs-4 mb-3">Recent Created Demos</h3>
        <div className="col table-wrapper" 
        >
            <table className="table bg-white rounded shadow-sm  table-hover">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Board</th>
                        <th scope="col">Class</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Teaching Mode</th>
                        <th scope="col">Hours Per Session</th>
                        <th scope="col">Sessions Per Week</th>
                        <th scope="col">Competitive Exam</th>
                        <th scope="col">Time Slot</th>
                        <th scope="col">Teacher Preference</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.demoList.length > 0 &&
                    props.demoList.map((i, index) => {
                        return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{i.board.name}</td>
                            <td>{i.className.name || "-"}</td>
                            <td>{i.subject.name}</td>
                            <td>{i.online ? 'Online' : 'Offline' }</td>
                            <td>{i.hoursPerSession}</td>
                            <td>{i.sessionsPerWeek}</td>
                            <td>{i.competitiveExam ? 'Yes' : 'No'}</td>
                            <td>{i.timeSlot}</td>
                            <td>{i.teacherPref}</td>
                            <td>{props.showDate(i.createdOn)}</td>
                            <td>{i.status}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default SheduledDemoList;

