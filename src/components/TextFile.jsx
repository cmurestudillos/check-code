import React, { useState, useCallback, Fragment } from 'react';
import {mapValues} from 'lodash';
import {Input} from 'antd';
import {diffLines, formatLines} from 'unidiff';
import {parseDiff, Diff, Hunk, getChangeKey} from 'react-diff-view';
import {useInput} from '../hooks';
import {useConversations, Conversation} from '../context';

const EMPTY_HUNKS = [];

const TextFile = () => {

    const oldText = useInput('');
    const newText = useInput('');
    const [{type, hunks}, setDiff] = useState('');

    const updateDiffText = useCallback(() => {
        const diffText = formatLines(diffLines(oldText.value, newText.value), {context: 3});
        const [diff] = parseDiff(diffText, {nearbySequences: 'zip'});
        setDiff(diff);
    }, [oldText.value, newText.value, setDiff]);

    const [conversations, {initConversation, addComment}] = useConversations();
    const codeEvents = {
        onDoubleClick({change}) {
            const key = getChangeKey(change);
            if (!conversations[key]) {
                initConversation(key);
            }
        },
    };
    const widgets = mapValues(conversations, ({comments}, changeKey) => (
        <Conversation changeKey={changeKey} comments={comments} onSubmitComment={addComment} />
    ));

    const limpiar = useCallback( () => {
        window.location.reload();
    });

    return ( 
        <Fragment>
            <main>
                <div className="py-2">
                    <div className="row align-items-md-stretch">
                        <div className="col-6">
                            <div className="w-100 mh-35 p-2 bg-light border rounded-3">
                                <h2>Original</h2>
                                <Input.TextArea className="text" rows={10} placeholder="sin cambios..." {...oldText} />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="w-100 mh-35 p-2 bg-light border rounded-3">
                                <h2>Modificado</h2>
                                <Input.TextArea className="text" rows={10} placeholder="con cambios..." {...newText} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <button type='button' className="btn btn-success m-4 float-start btn-lg buttons" onClick={updateDiffText}>
                                Mostrar Diferencias
                            </button>                            
                        </div>
                        <div className="col-6">
                            <button type='button' className="btn btn-primary m-4 float-end btn-lg buttons" onClick={limpiar}>
                                Limpiar
                            </button>                            
                        </div>
                    </div>
                    
                    {type !== undefined &&
                        <main className='shadow p-3 mb-5 bg-body rounded'>
                            <Fragment>
                                <h1>Comparativa</h1>
                                <hr></hr>
                                <Diff viewType="split" diffType={type} hunks={hunks || EMPTY_HUNKS}>
                                    {hunks =>
                                        hunks.map(hunk => (
                                            <Hunk key={hunk.content} hunk={hunk} codeEvents={codeEvents} widgets={widgets} />
                                        ))
                                    }
                                </Diff> 
                            </Fragment>
                        </main>
                    }
                   
                </div>
            </main>
        </Fragment>
     );
}
 
export default TextFile;