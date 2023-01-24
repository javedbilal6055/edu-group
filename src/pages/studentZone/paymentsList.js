const RequestList = props => {
    console.log(props.paymentList)
    return (
        <div className="row my-5">
        <h3 className="fs-4 mb-3">Student Payment List</h3>
        <div className="col table-wrapper" 
        >
            <table className="table bg-white rounded shadow-sm  table-hover">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Receipt Number</th>
                        <th scope="col">Board</th>
                        <th scope="col">Class</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Teacher Name</th>
                        <th scope="col">Total Sessions</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Created On</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.paymentList.length > 0 &&
                    props.paymentList.map((i, index) => {
                        return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{i?.paymentReceiptNumber}</td>
                            <td>{i?.studentReqId?.board?.name}</td>
                            <td>{i?.studentReqId?.className?.name || "-"}</td>
                            <td>{i?.studentReqId?.subject?.name}</td>
                            <td>{`${i?.teacherName?.fname} ${i?.teacherName?.lname}`}</td>
                            <td>{i?.numberOfSessions}</td>
                            <td>{i?.totalAmount}</td>
                            <td>{props.showDate(i?.createdOn)}</td>
                            <td>{i?.status}</td>
                            <td>
                            {
                                i?.status === 'paid' ?
                                `Paid On ${props.showDate(i?.updatedOn)}`
                                :
                                <div class="custom-button"><button onClick={() => props.initPayment(i)} class="btn custom-button__login">Pay</button></div>
                            }
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default RequestList;

