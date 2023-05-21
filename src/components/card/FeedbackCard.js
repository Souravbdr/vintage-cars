function FeedbackCard({ feedback }) {
    console.log(feedback);
    return (
        <tr key={feedback.key}>
            <td>{feedback.name}</td>
            <td>{feedback.description}</td>
            <td>{feedback.likedislike}</td>
            <td>{feedback.name}</td>
            <td>{feedback.email}</td>
            <td>{feedback.location}</td>
            <td>
                <img className='image' src={`data:image/png;base64, ${feedback.file}`} alt="Feedback" />
            </td>
        </tr>
    );
};

export default FeedbackCard;

