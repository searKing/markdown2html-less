/* eslint-disable no-irregular-whitespace */

import { Markdown2HtmlLess } from "./markdown2htmlLess";
const taskList: string = `#### GFM task list
- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2
    `;
const mermaid: string = `
\`\`\`mermaid
    graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
    `;

const mixed: string = `
#### GFM task list
- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2

\`\`\`mermaid
graph LR;  
　　A-->B;    
　　A-->C;  
　　B-->D;  
　　C-->D;  
\`\`\`
`;
((markdownContent: string) => {
	const markdown2htmlPro = new Markdown2HtmlLess();
	const html = markdown2htmlPro.markdown2html(markdownContent);

	console.log("html = ", html);
	return html;
})(taskList);
((markdownContent: string) => {
	const markdown2htmlPro = new Markdown2HtmlLess();
	const html = markdown2htmlPro.markdown2html(markdownContent);

	console.log("html = ", html);
	return html;
})(mermaid);
((markdownContent: string) => {
	const markdown2htmlPro = new Markdown2HtmlLess();
	const html = markdown2htmlPro.markdown2html(markdownContent);

	console.log("html = ", html);
	return html;
})(mixed);
