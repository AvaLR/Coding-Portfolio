let highestZ = 100;

function openWindow(id) {
    const win = document.getElementById(id);
    if (!win) return;

    win.style.display = 'flex';
    win.classList.add('window-active');
    highestZ++;
    win.style.zIndex = highestZ;

    if (!win.dataset.dragInitialized) {
        makeDraggable(win);
        win.dataset.dragInitialized = 'true';
    }
}

function closeWindow(id) {
    const win = document.getElementById(id);
    if (!win) return;

    win.classList.remove('window-active');
    win.style.display = 'none';
}

function toggleMaximizeWindow(id) {
    const win = document.getElementById(id);
    if (!win) return;

    const isMaximized = win.dataset.maximized === 'true';

    if (!isMaximized) {
        win.dataset.previousTop = win.style.top || '15%';
        win.dataset.previousLeft = win.style.left || '25%';
        win.dataset.previousWidth = win.style.width || '650px';
        win.dataset.previousHeight = win.style.height || 'auto';

        win.classList.add('window-maximized');
        win.style.top = '0';
        win.style.left = '0';
        win.style.width = '100%';
        win.style.height = '100%';
        win.style.maxHeight = '100vh';
        win.dataset.maximized = 'true';
    } else {
        win.classList.remove('window-maximized');
        win.style.top = win.dataset.previousTop || '15%';
        win.style.left = win.dataset.previousLeft || '25%';
        win.style.width = win.dataset.previousWidth || '650px';
        win.style.height = win.dataset.previousHeight || 'auto';
        win.style.maxHeight = '75vh';
        win.dataset.maximized = 'false';
    }

    win.style.display = 'flex';
    win.classList.add('window-active');
    highestZ++;
    win.style.zIndex = highestZ;
}

function makeDraggable(windowElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = windowElement.querySelector('.window-header');

    header.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        
      
        highestZ++;
        windowElement.style.zIndex = highestZ;
        
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        
        
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
       
        windowElement.style.top = (windowElement.offsetTop - pos2) + "px";
        windowElement.style.left = (windowElement.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
