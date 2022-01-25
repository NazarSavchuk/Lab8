import React, {useState} from "react";
import './Events.css';
import AudioPlayer from 'react-h5-audio-player';

function Events () {
    const [count, setCount] = useState(0);

    function Stating () {
        setCount(count + 1)
    }
    function handleKeyPress (event) {
        if(event.key == 'Enter'){
            setCount(count + 1)
          }
    }
    return (
        <section className="Events container">
            <div id="event1" className="ReactElement" onClick={Stating}>{count} Click</div>
            <div id="event2" className="ReactElement" onDoubleClick={Stating}>{count} DoubleClick</div>
            <div id="event3" className="ReactElement" onContextMenu={Stating}>{count} RightClick</div>
            <div id="event4" className="ReactElement" onDrag={Stating}>{count} Drag</div>
            <div id="event5" className="ReactElement" onDragEnd={Stating}>{count} DragEnd</div>
            <div id="event6" className="ReactElement" onDragEnter={Stating}>{count} DragEnter</div>
            <div id="event7" className="ReactElement" onDragExit={Stating}>{count} DragExit</div>
            <div id="event8" className="ReactElement" onDragLeave={Stating}>{count} DragLeave</div>
            <div id="event9" className="ReactElement" onMouseEnter={Stating}>{count} MouseEnter</div>
            <div id="event10" className="ReactElement" onMouseLeave={Stating}>{count} MouseLeave</div>
            <div id="event11" className="ReactElement" onMouseMove={Stating}>{count} MouseMove</div>
            <div id="event12" className="ReactElement" onMouseOut={Stating}>{count} MouseOut</div>
            <div id="event13" className="ReactElement" onMouseUp={Stating}>{count} MouseUp</div>
            <div id="event14" className="ReactElement" onKeyDown={handleKeyPress} tabIndex="0">{count} KeyDown</div>
            <div id="event15" className="ReactElement" onKeyUp={handleKeyPress} tabIndex="0"> {count} KeyUp</div>
            <div id="event16" className="ReactElement" onCopy={Stating}>{count} Copy</div>
            <div id="event17" className="ReactElement" onCut={Stating}>{count} Cut</div>
            <div id="event18" className="ReactElement" onPaste={Stating}>{count} Paste</div>
            <div id="event19" className="ReactElement" onPointerDown={Stating}>{count} PointerDown</div>
            <div id="event20" className="ReactElement"><input type="text" placeholder="pointerMove" onPointerMove={Stating}/></div>
            <div id="event21" className="ReactElement"><input type="text" placeholder="pointerEnter" onPointerEnter={Stating}/></div>
            <div id="event22" className="ReactElement"><input type="text" placeholder="pointerLeave" onPointerLeave={Stating}/></div>
            <div id="event23" className="ReactElement"><input type="text" placeholder="pointerOver" onPointerOver={Stating}/></div>
            <div id="event24" className="ReactElement"><input type="text" placeholder="pointerOut" onPointerOut={Stating}/></div>
            <div id="event25" className="ReactElement" onWheel={Stating}>{count} MouseWhell</div>
            <div id="event26" className="ReactElement">
            </div>
            <div id="event27" className="ReactElement" onClick={Stating}>{count}</div>
            <div id="event28" className="ReactElement" onClick={Stating}>{count}</div>
            <div id="event29" className="ReactElement" onClick={Stating}>{count}</div>
            <div id="event30" className="ReactElement" onClick={Stating}>{count}</div>
            <div id="event31" className="ReactElement" onClick={Stating}>{count}</div>
            <div id="event32" className="ReactElement" onClick={Stating}>{count}</div>
            <div id="event33" className="ReactElement" onClick={Stating}>{count}</div>
            <div id="event34" className="ReactElement" onClick={Stating}>{count}</div>
            <div id="event35" className="ReactElement" onClick={Stating}>{count}</div>
            <div id="event36" className="ReactElement" onClick={Stating}>{count}</div>
            <div id="event37" className="ReactElement" onClick={Stating}>{count}</div>
            <div id="event38" className="ReactElement" onClick={Stating}>{count}</div>
            <div id="event39" className="ReactElement" onClick={Stating}>{count}</div>
            <div id="event40" className="ReactElement" onClick={Stating}>{count}</div>
        </section>
    )
}

export default Events;