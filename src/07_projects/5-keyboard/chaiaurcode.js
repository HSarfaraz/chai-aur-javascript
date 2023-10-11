const insert = document.querySelector("#insert");

//add event listenenr on whole window
window.addEventListener("keydown", function (e) {
  insert.innerHTML = `
        <div class="color">
            <table>
                <tr>
                    <th>Key</th>
                    <th>Keycode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === " " ? "Space" : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>    
        </div>
    `;
});
