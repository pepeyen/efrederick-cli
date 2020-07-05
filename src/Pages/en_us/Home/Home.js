import React from 'react';
import '../../css/index.scss';
function Home() {
    return (
        <React.Fragment>
            <p className = "cli__info">Running: <strong className = "cli__source"> Home.sh </strong></p><br></br>
            <div className = "cli__output-text">
                <p className = "cli__message"><strong className = "cli__message-sender ">{'<SYSTEM>'}</strong> This is a<strong className = "cli__message-crucial"> command line [cli]</strong>, created to connect <strong className = "cli__message-crucial">YOU</strong> and <strong className = "cli__message-crucial">eFrederick</strong>.</p><br></br>
                <p className = "cli__message"><strong className = "cli__message-sender">{'<SYSTEM>'}</strong> This connection is private and secure.</p><br></br>
                <p className = "cli__message"><strong className = "cli__message-sender">{'<SYSTEM>'}</strong> Issue <strong className = "cli__message-command">/help</strong> at the input box to learn on how to navigate.</p><br></br>
                <p className = "cli__message --msg-1"><strong className = "cli__message-sender">{'<SYSTEM>'}</strong> Welcome <strong className = "cli__message-sender-reference">eUser</strong>.</p><br></br>
            </div>
        </React.Fragment>

    );
}

export default Home;