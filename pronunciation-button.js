"use strict";
const Widget = require('$:/core/modules/widgets/widget.js').widget;
class PronunciationButtonWidget extends Widget {
    /**
     * Lifecycle method: call this.initialise and super
     */
    constructor(parseTreeNode, options) {
        super(parseTreeNode, options);
        this.initialise(parseTreeNode, options);
    }
    /**
     * Lifecycle method: Render this widget into the DOM
     */
    render(parent, nextSibling) {
        this.parentDomNode = parent;
        this.computeAttributes();
        const transformButton = this.document.createElement('button');
        transformButton.classList.add('tc-btn-invisible');
        transformButton.innerHTML = `${$tw.wiki.getTiddlerText('$:/plugins/w0330t/pronunciation/icon')}<span class="tc-button-pronunciation-button-caption">${$tw.wiki.getTiddlerText('$:/plugins/w0330t/pronunciation/icon-caption')}</span>`;
        transformButton.onclick = this.onExecuteButtonClick.bind(this);
        transformButton.title = transformButton.ariaLabel = 'Pronunciation';
        parent.insertBefore(transformButton, nextSibling);
        this.domNodes.push(transformButton);
    }
    /**
     * Event listener of button
     */
    async onExecuteButtonClick() {
        const title = this.getAttribute('title');
        alert(title)
    }
}
exports['pronunciation-button'] = PronunciationButtonWidget;
