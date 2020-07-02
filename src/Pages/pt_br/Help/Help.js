import React from 'react';
import '../../index.scss';

function Help() {
    return (
        <div className = "help-output">
            <p>/about <strong>-- learn about more who is eFrederick</strong></p><br></br>
            <p>/competences <strong>-- learn who eFrederick is really made of</strong></p><br></br>
            <p>/help <strong>-- show available commands</strong></p><br></br>
            <p>/projects <strong>-- learn what eFrederick has been doing</strong></p><br></br>
            <p>/contact <strong>-- get in touch with eFrederick</strong></p><br></br>
        </div>
    );
}

export default Help;