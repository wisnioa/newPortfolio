window.addEventListener("DOMContentLoaded", () => {
  const terminalInput = document.getElementById("terminal-input");
  const terminalOutput = document.getElementById("terminal-output");

  const commands = {
    "help": `
    <p>Available commands:</p>
    <ul>
      <li><code>about</code> – Learn about Amanda</li>
      <li><code>skills</code> – See technical skills & tools</li>
      <li><code>projects</code> – View project list</li>
      <li><code>resume</code> – Download my resume</li>
      <li><code>contact</code> – Get in touch</li>
      <li><code>clear</code> – Clear terminal</li>
      <li><code>help</code> – Show this list again</li>
    </ul>
  `,
    "about": `
    I'm Amanda, a certified IT support specialist with a background in web development. I love solving problems and building user-focused systems.
  `,
    "skills": `
    <ul>
      <li>IT: Windows, Linux, Ubuntu, MacOS, Bash, troubleshooting</li>
      <li>Dev: HTML, CSS, JavaScript, Node.js</li>
      <li>Tools: Git, VS Code, Jira, Figma</li>
      <li>Certs: CompTIA A+, AWS (in progress)</li>
    </ul>
  `,
    "projects": `
    <p><strong>System Admin Toolkit:</strong> Bash CLI tool for automating user and system tasks. 
    <a href="https://github.com/wisnioa/system_admin_toolkit" target="_blank">System Admin Toolkit</a></p>
    <p><strong>Bamazon:</strong> An interactive storefront primarily using Node.js and mySQL. 
    <a href="https://github.com/wisnioa/bamazon" target="_blank">Bamazon</a></p>
    <p><strong>SafeKeep:</strong> A cross-platform GUI application for backing up files and folders using native commands (robocopy on Windows, rsync on Unix/Linux/macOS). 
    <a href="https://github.com/wisnioa/safekeep" target="_blank">SafeKeep</a></p>
    <p><strong>NewsPipeline:</strong> A lightweight static website that aggregates news links using Python scripts and deploys updates via GitHub Actions to GitHub Pages. 
    <a href="https://wisnioa.github.io/newspipeline/" target="_blank">NewsPipeline</a></p>
  `,
    "resume": `
    <a href="AmandaWisniowskiResumeJuly2025.pdf" target="_blank">Download my resume (PDF)</a>
  `,
    "contact": `
    <p>You can reach me at: <a href="mailto:amanda.wisniowski@gmail.com">amanda.wisniowski@gmail.com</a></p>
    <p>LinkedIn: <a href="https://linkedin.com/in/amanda-wisniowski" target="_blank">linkedin.com/in/amanda-wisniowski</a></p>
    <p>Github: <a href="" target="_blank">github.com/wisnioa</a></p>
  `
  };

  terminalOutput.innerHTML += `
    <p class="prompt">amanda@portfolio:~$ help</p>
    <div class="output">${commands["help"]}</div>
  `;
  window.scrollTo(0, document.body.scrollHeight); 

  let commandHistory = [];
  let historyIndex = -1;

  terminalInput.focus();

  terminalInput.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (commandHistory.length === 0) return;

      if (historyIndex === -1) {
        historyIndex = commandHistory.length - 1;
      } else if (historyIndex > 0) {
        historyIndex--;
      }
      terminalInput.value = commandHistory[historyIndex];
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (commandHistory.length === 0) return;

      if (historyIndex === -1) {
        terminalInput.value = "";
      } else if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = -1;
        terminalInput.value = "";
      }
    } else if (event.key === "Enter") {
      event.preventDefault();
      const input = terminalInput.value.trim().toLowerCase();

      if (input) {
        commandHistory.push(input);
        historyIndex = -1;
      }

      terminalOutput.innerHTML += `<p><span class="prompt">amanda@portfolio:~$</span> ${input}</p>`;

      if (input === "clear") {
        terminalOutput.innerHTML = "";
        window.scrollTo(0, 0);  
      } else if (commands[input]) {
        const loadingLine = document.createElement("p");
        loadingLine.className = "loading";
        loadingLine.textContent = "Processing...";
        terminalOutput.appendChild(loadingLine);

        setTimeout(() => {
          terminalOutput.removeChild(loadingLine);
          terminalOutput.innerHTML += `<div class="output">${commands[input]}</div>`;
          terminalOutput.scrollTop = terminalOutput.scrollHeight;
          window.scrollTo(0, document.body.scrollHeight);  
        }, 800);
      } else {
        terminalOutput.innerHTML += `<p class="output">Command not found: ${input}</p>`;
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        window.scrollTo(0, document.body.scrollHeight);  
      }

      terminalInput.value = "";
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
      window.scrollTo(0, document.body.scrollHeight); 
    }
  });
});
