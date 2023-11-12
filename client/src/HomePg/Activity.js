

export const Activity = ({ activities = []}) => {
    return(
        <div>
            <h3>Recent Activity</h3>
            <ul>
               {activities.map((activity) => (
                <li key={activity.id}>
                    <p>{activity.description}</p>
                    <p>Date: {activity.date}</p>
                </li>
               ))}
            </ul>
        </div>
    )
}