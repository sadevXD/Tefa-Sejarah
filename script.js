// Era data
const eras = [
    {
        id: "1.0",
        name: "Revolusi Industri 1.0",
        year: "1760-1840",
        description: "Mekanisasi produksi dengan tenaga air dan uap",
        technologies: ["Mesin uap", "Tenaga air", "Mekanisasi pabrik"],
        impact: "Transisi dari produksi tangan ke mesin",
        history: "Revolusi Industri 1.0 berlangsung antara tahun 1760 hingga 1840, dimulai di Inggris dengan penemuan mesin uap oleh James Watt pada tahun 1775. Revolusi ini menandai peralihan besar dari produksi manual ke sistem pabrik melalui mekanisasi yang didukung tenaga air dan uap. Teknologi seperti mesin uap dan kincir air memungkinkan peningkatan produksi secara massal, terutama di sektor tekstil, dengan tokoh penting seperti Richard Arkwright yang membangun pabrik kapas pertama. Era ini menjadi fondasi transformasi industri modern.",
        figures: [
            { name: "James Watt", role: "Penyempurna mesin uap" },
            { name: "Richard Arkwright", role: "Pengembang pabrik kapas pertama" }
        ],
        funFact: "Pabrik pertama di dunia menggunakan kincir air yang menghasilkan tenaga setara dengan 30 kuda"
    },
    {
        id: "2.0",
        name: "Revolusi Industri 2.0",
        year: "1870-1914",
        description: "Produksi massal dengan tenaga listrik",
        technologies: ["Listrik", "Lini produksi", "Baja massal"],
        impact: "Munculnya produksi massal dan konsumerisme",
        history: "Revolusi Industri 2.0 terjadi antara tahun 1870 hingga 1914 dan ditandai oleh penggunaan listrik sebagai sumber energi utama serta pengembangan lini produksi. Tokoh sentral seperti Henry Ford merevolusi industri otomotif dengan memperkenalkan sistem perakitan mobil Model T pada tahun 1908, memungkinkan produksi massal dengan efisiensi tinggi dan memperkenalkan sistem kerja shift. Bersamaan dengan itu, Thomas Edison memainkan peran penting dalam membangun infrastruktur listrik yang mendukung industrialisasi besar-besaran. Era ini mendorong lahirnya konsumerisme modern dan mempercepat pertumbuhan ekonomi global.",
        figures: [
            { name: "Henry Ford", role: "Pelopor produksi massal otomotif" },
            { name: "Thomas Edison", role: "Pengembang infrastruktur listrik" }
        ],
        funFact: "Pabrik Ford menghasilkan mobil setiap 93 detik - 8x lebih cepat dari metode tradisional"
    },
    {
        id: "3.0",
        name: "Revolusi Industri 3.0",
        year: "1969-2010",
        description: "Otomatisasi dengan elektronik dan IT",
        technologies: ["Komputer", "Robotika", "Energi nuklir"],
        impact: "Otomatisasi produksi dengan kontrol digital",
        history: "Revolusi Industri 3.0 berlangsung dari tahun 1969 hingga 2010 dan ditandai dengan otomatisasi proses produksi melalui penggunaan elektronik, komputer, dan teknologi informasi. Revolusi ini dimulai dengan pengembangan PLC (Programmable Logic Controller) pertama pada tahun 1968 oleh Dick Morley, yang memungkinkan sistem produksi dikendalikan secara digital. Joseph Engelberger turut berperan sebagai pelopor robot industri, memperkenalkan otomatisasi berbasis robotik ke dalam lini produksi. Inovasi-inovasi ini mengubah pabrik menjadi sistem yang lebih efisien, presisi, dan minim intervensi manusia.",
        figures: [
            { name: "Dick Morley", role: "Bapak PLC modern" },
            { name: "Joseph Engelberger", role: "Pelopor robot industri" }
        ],
        funFact: "Robot industri pertama Unimate tahun 1961 bisa mengangkat objek 500kg dengan presisi 1/10.000 inci"
    },
    {
        id: "4.0",
        name: "Revolusi Industri 4.0",
        year: "2011-sekarang",
        description: "Sistem siber-fisik dan Internet of Things",
        technologies: ["IoT", "AI", "Big Data", "Cloud Computing"],
        impact: "Pabrik cerdas dengan konektivitas penuh",
        history: "Revolusi Industri 4.0 dimulai pada tahun 2011 dengan diperkenalkannya konsep ini di Hannover Fair, menandai era integrasi antara dunia fisik dan digital melalui sistem siber-fisik dan Industrial Internet of Things (IIoT). Dipopulerkan oleh Klaus Schwab, revolusi ini menghadirkan pabrik cerdas yang saling terhubung dengan teknologi seperti IoT, kecerdasan buatan, big data, dan komputasi awan. Elon Musk turut menjadi tokoh penting dengan otomatisasi tinggi di pabrik Tesla. Transformasi ini mendorong efisiensi, personalisasi produk, serta pengambilan keputusan real-time dalam industri.",
        figures: [
            { name: "Klaus Schwab", role: "Penggagas konsep Industry 4.0" },
            { name: "Elon Musk", role: "Pelopor pabrik otomatis Tesla" }
        ],
        funFact: "Pabrik Siemens di Amberg bisa produksi 1.6 juta produk unik/tahun dengan 99.99885% akurasi"
    }
];

// DOM elements
const conveyorBelt = document.querySelector('.conveyor-belt');
const terminalOutput = document.getElementById('terminalOutput');
const commandInput = document.getElementById('commandInput');
const eraDetails = document.getElementById('eraDetails');

// Initialize the conveyor belt with era packages
function initConveyorBelt() {
    eras.forEach(era => {
        const eraPackage = document.createElement('div');
        eraPackage.className = `era-package era-${era.id.split('.')[0]}`;
        eraPackage.dataset.era = era.id;
        
        eraPackage.innerHTML = `
            <div class="era-label">${era.id}</div>
            <div class="era-year">${era.year}</div>
        `;
        
        eraPackage.addEventListener('click', () => inspectEra(era.id));
        conveyorBelt.appendChild(eraPackage);
    });
}

// Type writer effect for terminal
function typeWriter(text, element = terminalOutput, delay = 30) {
    const p = document.createElement('p');
    element.appendChild(p);
    
    let i = 0;
    function type() {
        if (i < text.length) {
            p.textContent += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

// Show era details
function inspectEra(eraId) {
    const era = eras.find(e => e.id === eraId);
    if (!era) return;
    
    eraDetails.innerHTML = `
        <div class="detail-content">
            <h2>${era.name} (${era.year})</h2>
            <p>${era.description}</p>
            <h3>> Core Technologies:</h3>
            <ul>
                ${era.technologies.map(tech => `<li>${tech}</li>`).join('')}
            </ul>
            <h3>> Impact:</h3>
            <p>${era.impact}</p>
        </div>
    `;
    
    // Highlight the selected era package
    document.querySelectorAll('.era-package').forEach(pkg => {
        pkg.style.borderColor = pkg.dataset.era === eraId ? '#00ff00' : '#333';
    });
    
    addToTerminal(`> Inspecting era ${eraId}: ${era.name}`);
}

// Compare two eras
function compareEras(eraId1, eraId2) {
    const era1 = eras.find(e => e.id === eraId1);
    const era2 = eras.find(e => e.id === eraId2);
    
    if (!era1 || !era2) {
        addToTerminal("> Error: One or both eras not found");
        return;
    }
    
    eraDetails.innerHTML = `
        <div class="detail-content">
            <h2>Comparing ${eraId1} and ${eraId2}</h2>
            
            <h3>> Time Period:</h3>
            <p>${eraId1}: ${era1.year} | ${eraId2}: ${era2.year}</p>
            
            <h3>> Key Differences:</h3>
            <p><strong>${eraId1}:</strong> ${era1.description}</p>
            <p><strong>${eraId2}:</strong> ${era2.description}</p>
            
            <h3>> Technology Leap:</h3>
            <p>From ${era1.technologies.slice(0,2).join(', ')} to ${era2.technologies.slice(0,2).join(', ')}</p>
        </div>
    `;
    
    addToTerminal(`> Comparison between ${eraId1} and ${eraId2} displayed`);
}

// Add text to terminal
function addToTerminal(text) {
    const p = document.createElement('p');
    p.textContent = text;
    terminalOutput.appendChild(p);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Show help
function showHelp() {
    addToTerminal("> Available commands:");
    addToTerminal("> inspect [era] - Show era overview");
    addToTerminal("> compare [era1] [era2] - Compare two eras");
    addToTerminal("> history - Show era history (requires active inspection)");
    addToTerminal("> figures - List key figures (requires active inspection)");
    addToTerminal("> funfact - Show interesting fact (requires active inspection)");
    addToTerminal("> tech - List technologies (requires active inspection)");
    addToTerminal("> help - Show this help");
    addToTerminal("> clear - Clear terminal");
}

// Process commands
const extendedCommands = {
    "history": (eraId) => showEraHistory(eraId),
    "figures": (eraId) => showImportantFigures(eraId),
    "funfact": (eraId) => showFunFact(eraId),
    "tech": (eraId) => showTechnologies(eraId)
};

function showEraHistory(eraId) {
    const era = eras.find(e => e.id === eraId);
    if (!era) return;
    
    addToTerminal(`> [HISTORY] ${era.name}`);
    typeWriter(`> ${era.history}`, terminalOutput, 10);
}

function showImportantFigures(eraId) {
    const era = eras.find(e => e.id === eraId);
    if (!era || !era.figures) return;
    
    addToTerminal(`> [KEY FIGURES] ${era.name}:`);
    era.figures.forEach(figure => {
        addToTerminal(`> - ${figure.name}: ${figure.role}`);
    });
}

function showFunFact(eraId) {
    const era = eras.find(e => e.id === eraId);
    if (!era || !era.funFact) return;
    
    addToTerminal(`> [FUN FACT] ${era.funFact}`);
}

function showTechnologies(eraId) {
    const era = eras.find(e => e.id === eraId);
    if (!era || !era.technologies) return;
    
    addToTerminal(`> [TECHNOLOGIES] ${era.name}:`);
    addToTerminal(`> ${era.technologies.join(", ")}`);
}

function processCommand(cmd) {
    if (!cmd) return;
    
    addToTerminal(`>> ${cmd}`);
    
    const parts = cmd.split(' ');
    const baseCmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    switch(baseCmd) {
        case 'inspect':
            if (args.length === 1) {
                inspectEra(args[0]);
            } else {
                addToTerminal("> Usage: inspect [era]");
            }
            break;
            
        case 'compare':
            if (args.length === 2) {
                compareEras(args[0], args[1]);
            } else {
                addToTerminal("> Usage: compare [era1] [era2]");
            }
            break;
            
        case 'help':
            showHelp();
            break;
            
        case 'clear':
            terminalOutput.innerHTML = '';
            break;
            
        default:
            const currentEra = document.querySelector('.era-package[style*="border-color: rgb(0, 255, 0)"]');
            if (currentEra && extendedCommands[baseCmd]) {
                extendedCommands[baseCmd](currentEra.dataset.era);
            } else {
                addToTerminal("> Error: Unknown command. Type 'help' for commands");
            }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initConveyorBelt();
    
    // Welcome message
    setTimeout(() => {
        typeWriter("> Factory OS Time Machine ready");
        typeWriter("> Type 'help' for command list or click era packages");
    }, 500);
    
    // Command input handler
    commandInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            processCommand(commandInput.value);
            commandInput.value = '';
        }
    });
    
    // Easter egg commands
    const secretCommands = {
        "make revolution": () => {
            addToTerminal("> Initiating revolutionary sequence...");
            eras.forEach((era, i) => {
                setTimeout(() => {
                    inspectEra(era.id);
                    addToTerminal(`> ${era.name} activated!`);
                }, i * 1000);
            });
        },
        "sudo show truth": () => {
            addToTerminal("> Accessing classified industrial archives...");
            addToTerminal("> WARNING: Some revolutions were driven more by economic needs than pure technological advancement");
            addToTerminal("> Many workers were displaced during each transition phase");
        }
    };
    
    commandInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') return;
        
        const cmd = commandInput.value.toLowerCase();
        if (secretCommands[cmd]) {
            secretCommands[cmd]();
            commandInput.value = '';
        }
    });
});
