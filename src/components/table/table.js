import FeedbackCard from "../card/FeedbackCard";
import './table.scss';
function Table({ currentItems }) {
    return (
        <div>
            <div className="caption-container">
                <h2 className="caption">Feedback Responses</h2>
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Likes/Dislikes</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((feedback, index) => (
                            <FeedbackCard key={index} feedback={feedback} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;