import React from 'react';
import '../../index.scss';
function Help() {
    return (
        <React.Fragment>
            <p className = "cli__message"><strong className = "cli__message-command">/about</strong> -- learn who is eFrederick</p><br></br>
            <p className = "cli__message"><strong className = "cli__message-command">/competences</strong> -- learn what eFrederick is really made of</p><br></br>
            <p className = "cli__message"><strong className = "cli__message-command">/help</strong> -- show available commands</p><br></br>
            <p className = "cli__message"><strong className = "cli__message-command">/projects</strong> -- learn what eFrederick has been doing</p><br></br>
            <p className = "cli__message"><strong className = "cli__message-command">/contact</strong> -- get in touch with eFrederick</p><br></br>
        </React.Fragment>
    );
}

export default Help;