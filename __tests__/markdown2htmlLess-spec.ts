import { Markdown2HtmlLess } from '../src/markdown2htmlLess';
const taskList: string = `#### GFM task list
- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2`;
const taskListExpect: string = `<h4 id=\"gfm-task-list\">GFM task list</h4>
<ul class=\"contains-task-list\">
<li class=\"task-list-item enabled\"><label><input class=\"task-list-item-checkbox\" checked=\"\"type=\"checkbox\"> GFM task list 1</label></li>
<li class=\"task-list-item enabled\"><label><input class=\"task-list-item-checkbox\" checked=\"\"type=\"checkbox\"> GFM task list 2</label></li>
<li class=\"task-list-item enabled\"><label><input class=\"task-list-item-checkbox\"type=\"checkbox\"> GFM task list 3</label>
<ul class=\"contains-task-list\">
<li class=\"task-list-item enabled\"><label><input class=\"task-list-item-checkbox\"type=\"checkbox\"> GFM task list 3-1</label></li>
<li class=\"task-list-item enabled\"><label><input class=\"task-list-item-checkbox\"type=\"checkbox\"> GFM task list 3-2</label></li>
<li class=\"task-list-item enabled\"><label><input class=\"task-list-item-checkbox\"type=\"checkbox\"> GFM task list 3-3</label></li>
</ul>
</li>
<li class=\"task-list-item enabled\"><label><input class=\"task-list-item-checkbox\"type=\"checkbox\"> GFM task list 4</label>
<ul class=\"contains-task-list\">
<li class=\"task-list-item enabled\"><label><input class=\"task-list-item-checkbox\"type=\"checkbox\"> GFM task list 4-1</label></li>
<li class=\"task-list-item enabled\"><label><input class=\"task-list-item-checkbox\"type=\"checkbox\"> GFM task list 4-2</label></li>
</ul>
</li>
</ul>
`;
(() => {
  const markdown2HtmlLess = new Markdown2HtmlLess();
  const taskListActual = markdown2HtmlLess.markdown2html(taskList);

  test('Should greet with message', () => {
    expect(taskListActual.body).toBe(taskListExpect);
  });
})();

test('Should have Markdown2HtmlLess available', () => {
  expect(!!Markdown2HtmlLess).toBeTruthy();
});
