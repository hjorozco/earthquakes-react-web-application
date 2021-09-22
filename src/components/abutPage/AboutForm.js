import React, { useState } from "react";
import Tooltip from '@material-ui/core/Tooltip';

const AboutForm = () => {

    const [comments, setComments] = useState({
        name: '',
        email: '',
        comments: '',
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleInputChange = e => {
        setComments({ ...comments, [e.target.id]: e.target.value.trimLeft() })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setButtonDisabled(true);
        Email.send({
            SecureToken: "af5403e3-e0b4-47a6-a666-d8e511f5b547",
            To: 'hectorjoseorozco@gmail.com',
            From: "kiju6754@outlook.com",
            Subject: "Earthquakes 2.0 react webapp comments",
            Body: setEmailBody()
        }).then(message => {
            setButtonDisabled(false);
            if (message === "OK") {
                alert("Your comments were sent. Thank you!");
            } else {
                alert("Comments were not sent. Please try again later");
            }
        });

    }

    const handleReset = e => {
        e.preventDefault();
        setComments({
            name: '',
            email: '',
            comments: '',
        });
    }

    // SmtpJS.com - v3.0.0 used to send an email//
    let Email = {
        send: function (a) {
            return new Promise(function (n, e) {
                // eslint-disable-next-line
                a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
                var t = JSON.stringify(a);
                Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) })
            })
        },
        ajaxPost: function (e, n, t) {
            var a = Email.createCORSRequest("POST", e);
            // eslint-disable-next-line
            a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload =
                function () { var e = a.responseText; null != t && t(e) }, a.send(n)
        },
        createCORSRequest: function (e, n) {
            // eslint-disable-next-line
            var t = new XMLHttpRequest;
            return "withCredentials" in t ?
                t.open(e, n, !0) :
                // eslint-disable-next-line
                "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
        }
    };

    const setEmailBody = () => {
        return `<b>Name:</b><br>${comments.name}<br><br><b>Email:</b><br>${comments.email}<br><br>` +
            `<b>Comments:</b><br>${comments.comments}`
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
                    <button className="Button" type="submit" disabled={buttonDisabled}>Send</button>
                </Tooltip>
                <button className="LastButton ResetButton" type="reset">
                    Reset
                </button>
            </div>
        </form>
    );
}

export default AboutForm;