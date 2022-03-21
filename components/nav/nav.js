const defaultList = [{ link: "/", title: "Home" }, { link:"/there",title:"Link2"},{ link:"/there2",title:"Link3"},{ link:"/ther3",title:"Link4"}]

const openGithub = () => {
    window.open('https://github.com/sebmeister2077','_blank')
}

const addLinksToList = (list,links) => {
    links.forEach(element => {
        let a = document.createElement("a");
        a.href = element.link;
        a.textContent = element.title;
        a.className = "nav-link";
        list.appendChild(a);
    });

    //add highlighter
    let highlighter = document.createElement("div")
    highlighter.className = "nav-highlighter"
    list.appendChild(highlighter);
}

const appendLogo = (nav) => {
    let img = document.createElement("img")
    img.src = "/images/githubLogo.png"
    img.onclick = openGithub;
    img.className = "github logo";
    nav.appendChild(img);
}

const addStyles = (nav, styleSheetHref) => {
    const defaultHref = "/components/nav/nav.css";
    const href = styleSheetHref ?? defaultHref;

    let link = document.createElement("link")
    link.rel = "stylesheet";
    link.href = href;
    nav.appendChild(link);
}

export function renderNav(elementId, linksArr,styleSheetHref) {
    const links = linksArr ?? defaultList;
    const el = document.getElementById(elementId || "root");
    let nav = document.createElement("nav")
    let list = document.createElement("ul")

    addLinksToList(list, links);
    nav.appendChild(list);
    appendLogo(nav);
    addStyles(nav);

    el.appendChild(nav);

    // ? html overview

    // <nav>
    //     <ul>
    //       <a href="/" class="nav-link">Home</a>
    //       <a href="there" class="nav-link">Link2</a>
    //       <a href="" class="nav-link">Link3</a>
    //       <a href="" class="nav-link">Link4</a>
    //       <div class="nav-highlighter"></div>
    //     </ul>

    //     <img
    //       onclick="openGithub()"
    //       src="/images/githubLogo.png"
    //       class="github logo"
    //     />
    //   </nav>
}