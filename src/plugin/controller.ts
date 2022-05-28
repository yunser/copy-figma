console.log('random color start')

figma.showUI(__html__, {
    width: 320,
    height: 320,
})

figma.ui.onmessage = msg => {
    // console.log('onmessage', msg)
    if (msg.type == 'copy') {
        const select0 = figma.currentPage.selection[0]
        console.log('select0', select0)
        if (!select0) {
            figma.notify('Please select a layer.')
            return
        }
        if (select0) {
            const parent = select0.parent
            console.log('parent', parent)
        
            const offsetX = msg.data.xOffset
            const offsetY = msg.data.yOffset
            const rowNum = msg.data.yNum
            const colNum = msg.data.xNum
            for (let row = 0; row < rowNum; row++) {
                for (let col = 0; col < colNum; col++) {
                    if (row == 0 && col == 0) {
                        continue
                    }
                    const cloneNode = select0.clone()
                    // figma.currentPage
                    cloneNode.name = cloneNode.name + `-${row + 1}-${col + 1}`
                    cloneNode.x = select0.x + (select0.width + offsetX) * col
                    cloneNode.y = select0.y + (select0.height + offsetY) * row
                    parent.appendChild(cloneNode)
                }
            }
        
        }
    }
}


// figma.closePlugin()

console.log('random color end')
