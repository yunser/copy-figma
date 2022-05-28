import * as React from 'react';
import '../styles/ui.css';
// import classes from './app.module.less'
// import './app.less'
import './app.css'

// console.log('classes', classes)
declare function require(path: string): any;

const App = ({}) => {

    const [form, setForm] = React.useState({
        xNum: 2,
        xOffset: 16,
        yNum: 1,
        yOffset: 16,
    })

    React.useEffect(() => {
        window.onmessage = (event) => {
            console.log('window.onmessage', event.data)
            if (event.data && event.data.pluginMessage) {
                const { type, message } = event.data.pluginMessage
                if (type === 'create-rectangles') {
                }
                else if (type == 'create-json-callback') {
                }
            }
        }
    }, [])

    return (
        <div className="app">

            <div className="form">
                <div className="item border-b">
                    {/* <div className="groupName">横向</div> */}
                    <div className="groupName">Horizontal</div>
                    <div className="space">
                        <div className="itemInline">
                            {/* <div className="label">数量</div> */}
                            <div className="label">Number</div>
                            <input
                                className="input"
                                type="number"
                                value={form.xNum}
                                onChange={e => {
                                    setForm({
                                        ...form,
                                        xNum: parseInt(e.target.value)
                                    })
                                }}
                            />
                        </div>
                        <div className="itemInline">
                            {/* <div className="label">间距</div> */}
                            <div className="label">Distance</div>
                            <input
                                className="input"
                                type="number"
                                value={form.xOffset}
                                onChange={e => {
                                    setForm({
                                        ...form,
                                        xOffset: parseInt(e.target.value)
                                    })
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="item">
                    {/* <div className="groupName">纵向</div> */}
                    <div className="groupName">Vertical</div>
                    <div className="space">
                        <div className="itemInline">
                            <div className="label">Number</div>
                            <input
                                className="input"
                                type="number"
                                value={form.yNum}
                                onChange={e => {
                                    setForm({
                                        ...form,
                                        yNum: parseInt(e.target.value),
                                    })
                                }}
                            />
                        </div>
                        <div className="itemInline">
                            <div className="label">Distance</div>
                            <input
                                className="input"
                                type="number"
                                value={form.yOffset}
                                onChange={e => {
                                    setForm({
                                        ...form,
                                        yOffset: parseInt(e.target.value)
                                    })
                                }}
                            />
                        </div>
                    </div>
                </div>
                <button className="button"
                    onClick={() => {
                        parent.postMessage({
                            pluginMessage: {
                                type: 'copy',
                                data: form,
                            }
                        }, '*')
                    }}
                >Copy</button>
                {/* <img src={require('../assets/logo.svg')} /> */}
                {/* <h2>xxx2</h2> */}
            </div>
        </div>
    );
};

export default App;
