import React, { Component } from 'react';
import '../../css/index.scss';

class Error extends Component {
    render (){
        return (
            <React.Fragment>
                <p className = "cli__message"><strong className = "cli__message-command">{this.props.issuedCommand}:</strong> The term <strong className = "cli__message-command">{this.props.issuedCommand}</strong> is not recognized as the name of a CLI, function, script file, or operable program. Check the spelling of the name, also you can issue the term <strong className = "cli__message-command">/help</strong> to see a list of avaiable commands.</p><br></br>
                <p className = "cli__message">Check the spelling of the name, also you can issue the term <strong className = "cli__message-command">/help</strong> to see a list of avaiable commands.</p><br></br>
                <p className = "cli__message-error">At line:1 char:1</p><br></br>
                <p className = "cli__message-error">+ {this.props.issuedCommand}</p><br></br>
                <p className = "cli__message-error">+ ~~~</p><br></br>
                <p className = "cli__message-error">    + CategoryInfo          : ObjectNotFound: ({this.props.issuedCommand}:String) [], CommandNotFoundException</p><br></br>
                <p className = "cli__message-error">    + FullyQualifiedErrorId : CommandNotFoundException</p><br></br>
            </React.Fragment>
        );
    }
}

export default Error;