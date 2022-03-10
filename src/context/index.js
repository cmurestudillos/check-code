import React, {useState, useCallback} from 'react';
import {Button, Input} from 'antd';
import {useImmer} from '../hooks';

export const useConversations = () => {
    const [conversations, dispatch] = useImmer((state, action) => {
        switch (action.type) {
            case 'INIT':
                state[action.payload.key] = {comments: []};
                break;
            case 'COMMENT': {
                const {key, content} = action.payload;
                const conversation = state[key];
                conversation.comments.push(content);
                break;
            }
            default:
                break;
        }
    }, {});
    const initConversation = useCallback(key => dispatch({type: 'INIT', payload: {key}}), [dispatch]);
    const addComment = useCallback((key, content) => dispatch({type: 'COMMENT', payload: {key, content}}), [dispatch]);
    return [conversations, {initConversation, addComment}];
};

const Comment = ({content}) => <div className="comment">{content}</div>;

const Editor = ({onSubmit}) => {
    const [value, setValue] = useState('');
    const updateValue = useCallback(e => setValue(e.target.value), []);
    const submitDraft = useCallback(() => {
        onSubmit(value);
        setValue('');
    }, [value, onSubmit]);

    return (
        <div id="editor">
            <Input.TextArea rows={4} value={value} onChange={updateValue} />
            <Button className="submit" type="primary" onClick={submitDraft}>
                Add Comment
            </Button>
        </div>
    );
};

export const Conversation = ({changeKey, comments, onSubmitComment}) => {
    const submitComment = useCallback(content => onSubmitComment(changeKey, content), [changeKey, onSubmitComment]);

    return (
        <div className="conversation">
            {comments.map((comment, i) => (
                <Comment key={i} content={comment} />
            ))}
            <Editor onSubmit={submitComment} />
        </div>
    );
};