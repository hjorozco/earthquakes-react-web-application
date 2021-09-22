import React, { useState } from "react";
import Tooltip from '@material-ui/core/Tooltip';

const AboutForm = () => {

    const [comments, setComments] = useState({
        name: '',
        email: '',
        comments: '',
    });

    const handleInputChange = e => {
        setComments({ ...comments, [e.target.id]: e.target.value.trimLeft() })
    }

    const handleSubmit = e => {
        e.preventDefault();

    }

    const handleReset = e => {
        e.preventDefault();
        setComments({
            name: '',
            email: '',
            comments: '',
        });
    }

    return (
        <form className="CommentsForm"
            onSubmit={handleSubmit}
            onReset={handleReset}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                className="Input CommentsInput CommentsTextInput"
                onChange={handleInputChange}
                value={comments.name}
                type="text"
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                className="Input CommentsInput CommentsTextInput"
                onChange={handleInputChange}
                value={comments.email}
                type="email"
            />
            <label htmlFor="minMagnitude">Comments (required)</label>
            <textarea
                id="comments"
                className="Input CommentsInput CommentsTextAreaInput"
                onChange={handleInputChange}
                value={comments.comments}
                required
            />
            <div className="CommentsFormButtonsContainer">
                <Tooltip title="Wait for a confirmation message after sending" arrow>
                    <button className="Button" type="submit">Send</button>
                </Tooltip>
                <button className="LastButton ResetButton" type="reset">Reset</button>
            </div>
        </form>
    );
}

export default AboutForm;