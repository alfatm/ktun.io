(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1167],{18446:function(t,e,o){var n=o(90939);t.exports=function(t,e){return n(t,e)}},71167:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},r=this&&this.__spreadArrays||function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<o;e++)for(var r=arguments[e],s=0,a=r.length;s<a;s++,i++)n[i]=r[s];return n},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},a=s(o(67294)),l=s(o(73935)),d=s(o(18446)),h=s(o(76095)),u=function(t){function e(e){var o=t.call(this,e)||this;o.dirtyProps=["modules","formats","bounds","theme","children"],o.cleanProps=["id","className","style","placeholder","tabIndex","onChange","onChangeSelection","onFocus","onBlur","onKeyPress","onKeyDown","onKeyUp"],o.state={generation:0},o.selection=null,o.onEditorChange=function(t,e,n,i){var r,s,a,l;"text-change"===t?null===(s=(r=o).onEditorChangeText)||void 0===s||s.call(r,o.editor.root.innerHTML,e,i,o.unprivilegedEditor):"selection-change"===t&&(null===(l=(a=o).onEditorChangeSelection)||void 0===l||l.call(a,e,i,o.unprivilegedEditor))};var n=o.isControlled()?e.value:e.defaultValue;return o.value=null!==n&&void 0!==n?n:"",o}return n(e,t),e.prototype.validateProps=function(t){var e;if(a.default.Children.count(t.children)>1)throw new Error("The Quill editing area can only be composed of a single React element.");if(a.default.Children.count(t.children)&&"textarea"===(null===(e=a.default.Children.only(t.children))||void 0===e?void 0:e.type))throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.");if(this.lastDeltaChangeSet&&t.value===this.lastDeltaChangeSet)throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas")},e.prototype.shouldComponentUpdate=function(t,e){var o,n=this;if(this.validateProps(t),!this.editor||this.state.generation!==e.generation)return!0;if("value"in t){var i=this.getEditorContents(),s=null!==(o=t.value)&&void 0!==o?o:"";this.isEqualValue(s,i)||this.setEditorContents(this.editor,s)}return t.readOnly!==this.props.readOnly&&this.setEditorReadOnly(this.editor,t.readOnly),r(this.cleanProps,this.dirtyProps).some((function(e){return!d.default(t[e],n.props[e])}))},e.prototype.shouldComponentRegenerate=function(t){var e=this;return this.dirtyProps.some((function(o){return!d.default(t[o],e.props[o])}))},e.prototype.componentDidMount=function(){this.instantiateEditor(),this.setEditorContents(this.editor,this.getEditorContents())},e.prototype.componentWillUnmount=function(){this.destroyEditor()},e.prototype.componentDidUpdate=function(t,e){var o=this;if(this.editor&&this.shouldComponentRegenerate(t)){var n=this.editor.getContents(),i=this.editor.getSelection();this.regenerationSnapshot={delta:n,selection:i},this.setState({generation:this.state.generation+1}),this.destroyEditor()}if(this.state.generation!==e.generation){var r=this.regenerationSnapshot,s=(n=r.delta,r.selection);delete this.regenerationSnapshot,this.instantiateEditor();var a=this.editor;a.setContents(n),p((function(){return o.setEditorSelection(a,s)}))}},e.prototype.instantiateEditor=function(){this.editor||(this.editor=this.createEditor(this.getEditingArea(),this.getEditorConfig()))},e.prototype.destroyEditor=function(){this.editor&&(this.unhookEditor(this.editor),delete this.editor)},e.prototype.isControlled=function(){return"value"in this.props},e.prototype.getEditorConfig=function(){return{bounds:this.props.bounds,formats:this.props.formats,modules:this.props.modules,placeholder:this.props.placeholder,readOnly:this.props.readOnly,scrollingContainer:this.props.scrollingContainer,tabIndex:this.props.tabIndex,theme:this.props.theme}},e.prototype.getEditor=function(){if(!this.editor)throw new Error("Accessing non-instantiated editor");return this.editor},e.prototype.createEditor=function(t,e){var o=new h.default(t,e);return null!=e.tabIndex&&this.setEditorTabIndex(o,e.tabIndex),this.hookEditor(o),o},e.prototype.hookEditor=function(t){this.unprivilegedEditor=this.makeUnprivilegedEditor(t),t.on("editor-change",this.onEditorChange)},e.prototype.unhookEditor=function(t){t.off("editor-change",this.onEditorChange)},e.prototype.getEditorContents=function(){return this.value},e.prototype.getEditorSelection=function(){return this.selection},e.prototype.isDelta=function(t){return t&&t.ops},e.prototype.isEqualValue=function(t,e){return this.isDelta(t)&&this.isDelta(e)?d.default(t.ops,e.ops):d.default(t,e)},e.prototype.setEditorContents=function(t,e){var o=this;this.value=e;var n=this.getEditorSelection();"string"===typeof e?t.setContents(t.clipboard.convert(e)):t.setContents(e),p((function(){return o.setEditorSelection(t,n)}))},e.prototype.setEditorSelection=function(t,e){if(this.selection=e,e){var o=t.getLength();e.index=Math.max(0,Math.min(e.index,o-1)),e.length=Math.max(0,Math.min(e.length,o-1-e.index)),t.setSelection(e)}},e.prototype.setEditorTabIndex=function(t,e){var o,n;(null===(n=null===(o=t)||void 0===o?void 0:o.scroll)||void 0===n?void 0:n.domNode)&&(t.scroll.domNode.tabIndex=e)},e.prototype.setEditorReadOnly=function(t,e){e?t.disable():t.enable()},e.prototype.makeUnprivilegedEditor=function(t){var e=t;return{getHTML:function(){return e.root.innerHTML},getLength:e.getLength.bind(e),getText:e.getText.bind(e),getContents:e.getContents.bind(e),getSelection:e.getSelection.bind(e),getBounds:e.getBounds.bind(e)}},e.prototype.getEditingArea=function(){if(!this.editingArea)throw new Error("Instantiating on missing editing area");var t=l.default.findDOMNode(this.editingArea);if(!t)throw new Error("Cannot find element for editing area");if(3===t.nodeType)throw new Error("Editing area cannot be a text node");return t},e.prototype.renderEditingArea=function(){var t=this,e=this.props,o=e.children,n=e.preserveWhitespace,r={key:this.state.generation,ref:function(e){t.editingArea=e}};return a.default.Children.count(o)?a.default.cloneElement(a.default.Children.only(o),r):n?a.default.createElement("pre",i({},r)):a.default.createElement("div",i({},r))},e.prototype.render=function(){var t;return a.default.createElement("div",{id:this.props.id,style:this.props.style,key:this.state.generation,className:"quill "+(t=this.props.className,null!==t&&void 0!==t?t:""),onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp},this.renderEditingArea())},e.prototype.onEditorChangeText=function(t,e,o,n){var i,r;if(this.editor){var s=this.isDelta(this.value)?n.getContents():n.getHTML();s!==this.getEditorContents()&&(this.lastDeltaChangeSet=e,this.value=s,null===(r=(i=this.props).onChange)||void 0===r||r.call(i,t,e,o,n))}},e.prototype.onEditorChangeSelection=function(t,e,o){var n,i,r,s,a,l;if(this.editor){var h=this.getEditorSelection(),u=!h&&t,p=h&&!t;d.default(t,h)||(this.selection=t,null===(i=(n=this.props).onChangeSelection)||void 0===i||i.call(n,t,e,o),u?null===(s=(r=this.props).onFocus)||void 0===s||s.call(r,t,e,o):p&&(null===(l=(a=this.props).onBlur)||void 0===l||l.call(a,h,e,o)))}},e.prototype.focus=function(){this.editor&&this.editor.focus()},e.prototype.blur=function(){this.editor&&(this.selection=null,this.editor.blur())},e.displayName="React Quill",e.Quill=h.default,e.defaultProps={theme:"snow",modules:{},readOnly:!1},e}(a.default.Component);function p(t){Promise.resolve().then(t)}t.exports=u}}]);