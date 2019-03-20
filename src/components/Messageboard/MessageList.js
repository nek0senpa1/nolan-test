import React from 'react';
// import Message from './Message';
import Checkbox from './Checkbox';
import { Spotlight, Text } from '../../styledComponents/GenStyling';
import { MessageRow, MessageBody, } from '../../styledComponents/MessageStyling';

class MessageList extends React.Component {
    render() {
        return (
            <Spotlight>
                    {this.props.messages.map(message => {
                        return <h1>{message.message}</h1>   
                    }
                        
                    )}
            </Spotlight>
        );
    };
};

export default MessageList;