import {Editor} from 'novel';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import {common, createLowlight} from 'lowlight';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
const Body=()=>{
  const lowlight = createLowlight(common);
lowlight.register('html',html)
lowlight.register('css', css)
lowlight.register('js', js)
lowlight.register('ts', ts)
const defaultEditorContent = {
    type: "doc",
    content: [
      {
        type: "paragraph",
        attrs: { level: 2 },
        content: [{ type: "text", text: "Use ```and press Enter " }],
      },],};
      
  return(
    <div>
      <Editor className="border my-3 border-[#2a2a2a] min-h-full bg-white rounded-md"
       defaultValue={defaultEditorContent}
       extensions={[CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: {
    class: 'bg-[#1a1a1a] text-white code-element ',
  },
  languageClassPrefix: 'language-',
      })]}
       storageKey={{novel_content:''}}/>

       
    </div>
  )
}


export default Body;