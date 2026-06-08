const tools = ["VSCode", "Rojo", "Wally", "Rokit", "Git"];
const languages = ["GDScript", "HTML/CSS", "JavaScript/TypeScript", "Lua", "Luau", "Python", "C#"];

function renderTags(list, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    list.forEach(item => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.innerText = item;
        container.appendChild(span);
    });
}

export function initSkillsTags() {
    renderTags(tools, 'tools-container');
    renderTags(languages, 'languages-container');
}
