import React from 'react';
import '../../css/index.scss';
function Help() {
    return (
        <React.Fragment>
            <p className = "cli__info">Running: <strong className = "cli__source"> Help.sh</strong></p><br></br>
            <div className = "cli__output-text">
                <p className = "cli__message"><strong className = "cli__message-command">/home</strong> -- go to the home page</p><br></br>
                <p className = "cli__message"><strong className = "cli__message-command">/about</strong> -- learn who is <strong className = "cli__message-sender-reference">eFrederick</strong></p><br></br>
                <p className = "cli__message"><strong className = "cli__message-command">/competencies</strong> -- learn what <strong className = "cli__message-sender-reference">eFrederick</strong> is really made of</p><br></br>
                <p className = "cli__message"><strong className = "cli__message-command">/projects</strong> -- learn what <strong className = "cli__message-sender-reference">eFrederick</strong> has been doing</p><br></br>
                <p className = "cli__message"><strong className = "cli__message-command">/contact</strong> -- get in touch with <strong className = "cli__message-sender-reference">eFrederick</strong></p><br></br>
                <p className = "cli__message"><strong className = "cli__message-command">/help</strong> -- show available commands</p><br></br>
            </div>
        </React.Fragment>
    );
}

export default Help;