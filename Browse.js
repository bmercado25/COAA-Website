// fill with actual data
const entries = [
    { author: "Author 1", content: "This is the first content." },
    { author: "Author 2", content: "This is the second content." },
    { author: "Author 3", content: "This is the third content." },
    { author: "Author 4", content: "This is the fourth content." },
    { author: "Author 5", content: "This is the fifth content." },
    { author: "Author 6", content: "This is the sixth content." }
];

function renderEntries(entries) {
    const container = document.querySelector('.containerBrowse');
    container.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'browseGrid';
    entries.forEach(entry => {
        const entryContainer = document.createElement('div');
        entryContainer.className = 'entryContainer';

        const authorDiv = document.createElement('div');
        authorDiv.className = 'authorDiv';
        authorDiv.textContent = entry.author;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'contentDiv';
        contentDiv.textContent = entry.content;

        entryContainer.appendChild(authorDiv);
        entryContainer.appendChild(contentDiv);

        grid.appendChild(entryContainer);
    });
    container.appendChild(grid);
}

document.addEventListener('DOMContentLoaded', function() {
    renderEntries(entries);
});
