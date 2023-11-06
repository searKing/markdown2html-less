"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Markdown2HtmlLess = void 0;
const lodash_1 = require("lodash");
const render_1 = require("./render/render");
const log_1 = require("./utils/log");
class Markdown2HtmlLess {
    constructor(options = {}) {
        this.defaultOptions = {
            abbr: true,
            anchor: true,
            attrs: true,
            debug: false,
            deflist: true,
            emoji: true,
            expandTabs: true,
            footnote: true,
            highlightjs: true,
            ins: true,
            lazyHeaders: true,
            mark: true,
            mermaid: true,
            sub: true,
            sup: true,
            taskLists: true,
        };
        if (typeof options !== "object") {
            throw Error("second argument must be an object");
        }
        options = options || {};
        (0, lodash_1.defaults)(options, this.defaultOptions);
        this.options = options;
        return this;
    }
    markdown2html(markdown) {
        this.log(this.banner());
        const markdownRenderOptions = {
            abbr: this.options.abbr,
            anchor: this.options.anchor,
            attrs: this.options.attrs,
            debug: this.options.debug,
            deflist: this.options.deflist,
            emoji: this.options.emoji,
            expandTabs: this.options.expandTabs,
            footnote: this.options.footnote,
            highlightjs: this.options.highlightjs,
            ins: this.options.ins,
            lazyHeaders: this.options.lazyHeaders,
            mark: this.options.mark,
            mermaid: this.options.mermaid,
            sub: this.options.sub,
            sup: this.options.sup,
            taskLists: this.options.taskLists,
        };
        const render = new render_1.MarkdownRender(markdownRenderOptions);
        const html = render.renderToHtml(markdown);
        if (this.options.debug) {
            html.body = this.debugHeader() + "\n" + html.body;
        }
        return html;
    }
    log(msg) {
        if (this.options.debug) {
            log_1.Log.print(msg);
        }
    }
    banner() {
        let banner = "\n\n" + "markdown2html-pro";
        banner += "Parse markdown into HTML and add syntax highlighting";
        return banner;
    }
    debugHeader() {
        const info = require("../package.json") || {};
        return ("<!--" +
            " this HTML was generated using markdown-it-mermaid-less version " +
            info.version +
            "." +
            " see an issue? file at " +
            info.bugs +
            "." +
            " please include the version in your issue. thanks for using markdown2html-pro!" +
            " to learn more, visit " +
            info.repository +
            "." +
            "  -->");
    }
}
exports.Markdown2HtmlLess = Markdown2HtmlLess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24yaHRtbExlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbWFya2Rvd24yaHRtbExlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWtDO0FBQ2xDLDRDQUt5QjtBQUV6QixxQ0FBa0M7QUFNbEMsTUFBYSxpQkFBaUI7SUFzQjdCLFlBQVksVUFBMkIsRUFBRTtRQW5CakMsbUJBQWMsR0FBb0I7WUFDekMsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLEtBQUssRUFBRSxJQUFJO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLElBQUk7WUFDZCxXQUFXLEVBQUUsSUFBSTtZQUNqQixHQUFHLEVBQUUsSUFBSTtZQUNULFdBQVcsRUFBRSxJQUFJO1lBQ2pCLElBQUksRUFBRSxJQUFJO1lBQ1YsT0FBTyxFQUFFLElBQUk7WUFDYixHQUFHLEVBQUUsSUFBSTtZQUNULEdBQUcsRUFBRSxJQUFJO1lBQ1QsU0FBUyxFQUFFLElBQUk7U0FDZixDQUFDO1FBR0QsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDaEMsTUFBTSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztTQUNqRDtRQUNELE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUEsaUJBQVEsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLGFBQWEsQ0FBQyxRQUFnQjtRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0scUJBQXFCLEdBQTJCO1lBQ3JELElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUMzQixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztZQUM3QixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFDbkMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTtZQUMvQixXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7WUFDckIsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNyQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87WUFDN0IsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRztZQUNyQixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHO1lBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7U0FDakMsQ0FBQztRQUNGLE1BQU0sTUFBTSxHQUFvQixJQUFJLHVCQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMxRSxNQUFNLElBQUksR0FBd0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVoRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xEO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU8sR0FBRyxDQUFDLEdBQVc7UUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUN2QixTQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7SUFDRixDQUFDO0lBRU8sTUFBTTtRQUNiLElBQUksTUFBTSxHQUFXLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztRQUNsRCxNQUFNLElBQUksc0RBQXNELENBQUM7UUFDakUsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0lBRU8sV0FBVztRQUNsQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUNOLE1BQU07WUFDTixrRUFBa0U7WUFDbEUsSUFBSSxDQUFDLE9BQU87WUFDWixHQUFHO1lBQ0gseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxJQUFJO1lBQ1QsR0FBRztZQUNILGdGQUFnRjtZQUNoRix3QkFBd0I7WUFDeEIsSUFBSSxDQUFDLFVBQVU7WUFDZixHQUFHO1lBQ0gsT0FBTyxDQUNQLENBQUM7SUFDSCxDQUFDO0NBQ0Q7QUEzRkQsOENBMkZDIn0=