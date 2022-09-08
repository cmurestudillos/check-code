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

    const limpiar = () => {
        window.location.reload();
    };

    return ( 
        <Fragment>
            <section id="main" className="container">
                <section className="box special">
                    <header className="major">
                        <h2>Compara y encuentra la diferencia entre dos textos y/o codigo de una manera simple y ordenada.</h2>
                        <p> Diff Check "<strong>Text</strong>" comparará el texto para encontrar la diferencia entre los dos textos (<i>El original y el modificado</i>).
                        Simplemente pegue el contenido de sus archivos y haga clic en <strong>"Mostrar diferencias"</strong>.   </p>
                    </header>
                </section>     

                <section className="box special features">
                    <div className="features-row">
                        <section>
                            <h3>Original</h3>
                            <p><Input.TextArea className="text" rows={10} placeholder="sin cambios..." {...oldText} /></p>
                            <ul className="actions special">
                                <li><span className="button alt primary" onClick={updateDiffText}>Mostrar Diferencias</span></li>
                            </ul>
                        </section>
                        <section>
                            <h3>Modificado</h3>
                            <p><Input.TextArea className="text" rows={10} placeholder="con cambios..." {...newText} /></p>
                            <ul className="actions special">
                                <li><span className="button alt" onClick={limpiar}>Limpiar</span></li>
                            </ul>
                        </section>
                    </div>
                </section>

                {type !== undefined && 
                    <Fragment>
                        <h3>Comparativa</h3>
                        <hr></hr>
                        <div className="row">
                            <div className="col-12 col-12-narrower">
                                <section className="box special">
                                    <Diff viewType="split" diffType={type} hunks={hunks || EMPTY_HUNKS}>
                                        {hunks =>
                                            hunks.map(hunk => (
                                                <Hunk key={hunk.content} hunk={hunk} codeEvents={codeEvents} widgets={widgets} />
                                            ))
                                        }
                                    </Diff> 
                                </section>
                            </div>
                        </div>                    
                    </Fragment>
                }
            </section>    
        </Fragment>
     );
}
 
export default TextFile;