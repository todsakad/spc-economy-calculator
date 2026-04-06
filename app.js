// --- DATA DICTIONARY ---
const RESOURCE_TYPES = {
    basic: ['energy', 'minerals', 'alloys', 'food'],
    abstract: ['tech', 'unity'],
    special: ['trade', 'influence', 'dark_matter', 'zro'],
    strategic: ['rare_crystals', 'volatile_motes', 'exotic_gases']
};

// Insert your massive PLANET_DATA dictionary here
const PLANET_DATA = {
    "JOAT": {
        "T0": { prod: {}, upkeep: {} },
        "T1": { prod: {energy: 5, minerals: 5, alloys: 5, food: 5, tech: 10, unity: 10, trade: 10}, upkeep: {food: 5, trade: 5} },
        "T2": { prod: {energy: 10, minerals: 15, alloys: 10, food: 10, tech: 20, unity: 20, trade: 20}, upkeep: {food: 10, trade: 10} },
        "T3": { prod: {energy: 15, minerals: 30, alloys: 15, food: 20, tech: 30, unity: 30, trade: 30}, upkeep: {food: 40, trade: 40} },
        "T4": { prod: {energy: 25, minerals: 45, alloys: 25, food: 40, tech: 40, unity: 40, trade: 40}, upkeep: {food: 60, trade: 60} },
        "T5": { prod: {energy: 35, minerals: 60, alloys: 35, food: 60, tech: 50, unity: 50, trade: 50}, upkeep: {food: 80, trade: 80} },
        "T6": { prod: {energy: 50, minerals: 50, alloys: 50, food: 80, tech: 70, trade: 70}, upkeep: {food: 80, trade: 80} },
        "T7_Ecumenopolis": { prod: {energy: 70, minerals: 40, alloys: 90, food: 80, tech: 80, unity: 50, trade: 80}, upkeep: {food: 80, trade: 80} },
        "T7_Machine": { prod: {energy: 70, minerals: 70, alloys: 70, food: 70, tech: 70, unity: 70, trade: 20}, upkeep: {energy: 50, trade: 50} },
        "T7_Hive": { prod: {energy: 60, minerals: 60, alloys: 50, food: 100, tech: 70, unity: 70, trade: 20}, upkeep: {food: 90, trade: 90} },
        "T8_Ring": { prod: {energy: 100, alloys: 62.5, tech: 75, food: 50, trade: 75}, upkeep: {food: 125, trade: 125} }
    },
    "Generator World (Organic)": {
        "T1": { prod: {energy: 25}, upkeep: {food: 5} },
        "T2": { prod: {energy: 40}, upkeep: {food: 10} },
        "T3": { prod: {energy: 80}, upkeep: {food: 20} },
        "T4": { prod: {energy: 100}, upkeep: {food: 30} },
        "T5": { prod: {energy: 160}, upkeep: {food: 40} },
        "T6": { prod: {energy: 200}, upkeep: {food: 50} },
        "T7_Machine": { prod: {energy: 250}, upkeep: {energy: 45} }, 
        "T7_Hive": { prod: {energy: 210}, upkeep: {food: 50} },
        "T7_Ecumenopolis": { prod: {energy: 220}, upkeep: {food: 50} },
        "T8": { prod: {energy: 200}, upkeep: {food: 80} }
    },
    "Generator World (Machine)": {
        "T1": { prod: {energy: 25}, upkeep: {energy: 3} },
        "T2": { prod: {energy: 40}, upkeep: {energy: 5} },
        "T3": { prod: {energy: 80}, upkeep: {energy: 10} },
        "T4": { prod: {energy: 100}, upkeep: {energy: 15} },
        "T5": { prod: {energy: 160}, upkeep: {energy: 20} },
        "T6": { prod: {energy: 200}, upkeep: {energy: 20} },
        "T7_Machine": { prod: {energy: 250}, upkeep: {food: 45} }, 
        "T7_Hive": { prod: {energy: 210}, upkeep: {food: 50} },
        "T7_Ecumenopolis": { prod: {energy: 220}, upkeep: {food: 50} },
        "T8": { prod: {energy: 200}, upkeep: {energy: 80} }
    },
    "Mining World (Organic)": {
        "T1": { prod: {minerals: 25}, upkeep: {food: 5} },
        "T2": { prod: {minerals: 40}, upkeep: {food: 10} },
        "T3": { prod: {minerals: 80}, upkeep: {food: 20} },
        "T4": { prod: {minerals: 100}, upkeep: {food: 30} },
        "T5": { prod: {minerals: 160}, upkeep: {food: 40} },
        "T6": { prod: {minerals: 200}, upkeep: {food: 50} },
        "T7_Machine": { prod: {minerals: 250}, upkeep: {energy: 45} },
        "T7_Hive": { prod: {minerals: 210}, upkeep: {food: 50} },
        "T7_Ecumenopolis": { prod: {minerals: 220}, upkeep: {food: 50} }
    },
    "Mining World (Machine)": {
        "T1": { prod: {minerals: 25}, upkeep: {energy: 5} },
        "T2": { prod: {minerals: 40}, upkeep: {energy: 10} },
        "T3": { prod: {minerals: 80}, upkeep: {energy: 20} },
        "T4": { prod: {minerals: 100}, upkeep: {energy: 30} },
        "T5": { prod: {minerals: 160}, upkeep: {energy: 40} },
        "T6": { prod: {minerals: 200}, upkeep: {energy: 50} },
        "T7_Machine": { prod: {minerals: 250}, upkeep: {energy: 45} },
        "T7_Hive": { prod: {minerals: 210}, upkeep: {food: 50} },
        "T7_Ecumenopolis": { prod: {minerals: 220}, upkeep: {food: 50} }
    },
    "Agri-World (Organic)": {
        "T1": { prod: {food: 25}, upkeep: {food: 5} },
        "T2": { prod: {food: 40}, upkeep: {food: 10} },
        "T3": { prod: {food: 80}, upkeep: {food: 20} },
        "T4": { prod: {food: 100}, upkeep: {food: 30} },
        "T5": { prod: {food: 160}, upkeep: {food: 40} },
        "T6": { prod: {food: 200}, upkeep: {food: 50} },
        "T7_Machine": { prod: {food: 210}, upkeep: {energy: 50} },
        "T7_Hive": { prod: {food: 250}, upkeep: {food: 50} },
        "T7_Ecumenopolis": { prod: {food: 220}, upkeep: {food: 50} }
    },
    "Agri-World (Machine)": {
        "T1": { prod: {food: 25}, upkeep: {energy: 5} },
        "T2": { prod: {food: 40}, upkeep: {energy: 10} },
        "T3": { prod: {food: 80}, upkeep: {energy: 15} },
        "T4": { prod: {food: 100}, upkeep: {energy: 25} },
        "T5": { prod: {food: 160}, upkeep: {energy: 30} },
        "T6": { prod: {food: 200}, upkeep: {energy: 45} },
        "T7_Machine": { prod: {food: 210}, upkeep: {energy: 50} },
        "T7_Hive": { prod: {food: 250}, upkeep: {food: 50} },
        "T7_Ecumenopolis": { prod: {food: 220}, upkeep: {food: 50} }
    },
    "Tech-World (Organic)": {
        "T1": { prod: {tech: 30}, upkeep: {food: 5} },
        "T2": { prod: {tech: 50}, upkeep: {food: 10} },
        "T3": { prod: {tech: 80}, upkeep: {food: 15} },
        "T4": { prod: {tech: 110}, upkeep: {food: 20} },
        "T5": { prod: {tech: 150}, upkeep: {food: 30} },
        "T6": { prod: {tech: 220}, upkeep: {food: 40} },
        "T7_Machine": { prod: {tech: 300}, upkeep: {energy: 45} }, 
        "T7_Hive": { prod: {tech: 300}, upkeep: {food: 45} },
        "T7_Ecumenopolis": { prod: {tech: 350}, upkeep: {food: 55} },
        "T8": { prod: {tech: 212.5}, upkeep: {food: 75} }
    },
    "Tech-World (Machine)": {
        "T1": { prod: {tech: 30}, upkeep: {energy: 5} },
        "T2": { prod: {tech: 50}, upkeep: {energy: 10} },
        "T3": { prod: {tech: 80}, upkeep: {energy: 15} },
        "T4": { prod: {tech: 110}, upkeep: {energy: 20} },
        "T5": { prod: {tech: 150}, upkeep: {energy: 30} },
        "T6": { prod: {tech: 220}, upkeep: {energy: 40} },
        "T7_Machine": { prod: {tech: 300}, upkeep: {energy: 45} },
        "T7_Hive": { prod: {tech: 300}, upkeep: {food: 45} },
        "T7_Ecumenopolis": { prod: {tech: 350}, upkeep: {energy: 55} }, 
        "T8": { prod: {tech: 212.5}, upkeep: {energy: 75} }
    },
    "Forge World": {
        "T1": { prod: {alloys: 15}, upkeep: {minerals: 10} },
        "T2": { prod: {alloys: 25}, upkeep: {minerals: 15} },
        "T3": { prod: {alloys: 40}, upkeep: {minerals: 20} },
        "T4": { prod: {alloys: 45}, upkeep: {minerals: 25} },
        "T5": { prod: {alloys: 70}, upkeep: {minerals: 40} },
        "T6": { prod: {alloys: 80}, upkeep: {minerals: 50} },
        "T7_Machine": { prod: {alloys: 105}, upkeep: {minerals: 55} },
        "T7_Hive": { prod: {alloys: 100}, upkeep: {minerals: 60} },
        "T7_Ecumenopolis": { prod: {alloys: 105}, upkeep: {minerals: 55} },
        "T8": { prod: {alloys: 225}, upkeep: {minerals: 80} }
    },
    "Unification Center (Organic)": {
        "T1": { prod: {unity: 30}, upkeep: {food: 5} },
        "T2": { prod: {unity: 50}, upkeep: {food: 10} },
        "T3": { prod: {unity: 80}, upkeep: {food: 15} },
        "T4": { prod: {unity: 110}, upkeep: {food: 20} },
        "T5": { prod: {unity: 150}, upkeep: {food: 30} },
        "T6": { prod: {unity: 220}, upkeep: {food: 40} },
        "T7_Machine": { prod: {unity: 300}, upkeep: {energy: 45} },
        "T7_Hive": { prod: {unity: 300}, upkeep: {food: 45} },
        "T7_Ecumenopolis": { prod: {unity: 350}, upkeep: {food: 55} },
        "T8": { prod: {unity: 850}, upkeep: {food: 300} }
    },
    "Unification Center (Machine)": {
        "T1": { prod: {unity: 30}, upkeep: {energy: 5} },
        "T2": { prod: {unity: 50}, upkeep: {energy: 10} },
        "T3": { prod: {unity: 80}, upkeep: {energy: 15} },
        "T4": { prod: {unity: 110}, upkeep: {energy: 20} },
        "T5": { prod: {unity: 150}, upkeep: {energy: 30} },
        "T6": { prod: {unity: 220}, upkeep: {energy: 40} },
        "T7_Machine": { prod: {unity: 300}, upkeep: {energy: 45} },
        "T7_Hive": { prod: {unity: 300}, upkeep: {food: 45} },
        "T7_Ecumenopolis": { prod: {unity: 350}, upkeep: {energy: 55} },
        "T8": { prod: {unity: 850}, upkeep: {energy: 300} }
    },
    "Refinery World": {
        "T1": { prod: {volatile_motes: 5, exotic_gases: 5, rare_crystals: 5}, upkeep: {energy: 10, minerals: 10, food: 10} },
        "T2": { prod: {volatile_motes: 10, exotic_gases: 10, rare_crystals: 10}, upkeep: {energy: 18, minerals: 18, food: 18} },
        "T3": { prod: {volatile_motes: 20, exotic_gases: 20, rare_crystals: 20}, upkeep: {energy: 34, minerals: 34, food: 34} },
        "T4": { prod: {volatile_motes: 30, exotic_gases: 30, rare_crystals: 30}, upkeep: {energy: 48, minerals: 48, food: 48} },
        "T5": { prod: {volatile_motes: 50, exotic_gases: 50, rare_crystals: 50}, upkeep: {energy: 75, minerals: 75, food: 75} },
        "T6": { prod: {volatile_motes: 65, exotic_gases: 65, rare_crystals: 65}, upkeep: {energy: 90, minerals: 90, food: 90} },
        "T7_Machine": { prod: {volatile_motes: 70, exotic_gases: 70, rare_crystals: 70}, upkeep: {energy: 100, minerals: 100, food: 100} },
        "T7_Hive": { prod: {volatile_motes: 70, exotic_gases: 70, rare_crystals: 70}, upkeep: {energy: 100, minerals: 100, food: 100} },
        "T7_Ecumenopolis": { prod: {volatile_motes: 70, exotic_gases: 70, rare_crystals: 70}, upkeep: {energy: 100, minerals: 100, food: 100} },
        "T8_Ring": { prod: {volatile_motes: 50, exotic_gases: 50, rare_crystals: 50}, upkeep: {energy: 60, minerals: 60, food: 60} }
    },
    "Trade World (Organic)": {
        "T1": { prod: {trade: 30}, upkeep: {food: 5} },
        "T2": { prod: {trade: 50}, upkeep: {food: 10} },
        "T3": { prod: {trade: 80}, upkeep: {food: 15} },
        "T4": { prod: {trade: 110}, upkeep: {food: 20} },
        "T5": { prod: {trade: 150}, upkeep: {food: 30} },
        "T6": { prod: {trade: 220}, upkeep: {food: 40} },
        "T7_Machine": { prod: {trade: 30}, upkeep: {energy: 50} },
        "T7_Hive": { prod: {trade: 270}, upkeep: {food: 50} },
        "T7_Ecumenopolis": { prod: {trade: 350}, upkeep: {food: 55} },
        "T8": { prod: {trade: 212.5}, upkeep: {food: 75} }
    },
    "Trade World (Machine)": {
        "T1": { prod: {trade: 30}, upkeep: {energy: 5} },
        "T2": { prod: {trade: 50}, upkeep: {energy: 10} },
        "T3": { prod: {trade: 80}, upkeep: {energy: 15} },
        "T4": { prod: {trade: 110}, upkeep: {energy: 20} },
        "T5": { prod: {trade: 150}, upkeep: {energy: 30} },
        "T6": { prod: {trade: 220}, upkeep: {energy: 40} },
        "T7_Machine": { prod: {trade: 30}, upkeep: {energy: 50} },
        "T7_Hive": { prod: {trade: 270}, upkeep: {food: 50} },
        "T7_Ecumenopolis": { prod: {trade: 350}, upkeep: {energy: 55} },
        "T8": { prod: {trade: 212.5}, upkeep: {energy: 75} }
    }
};

let planets = [];

// --- UI LOGIC ---
function addPlanet() {
    const id = Date.now();
    // Dynamically grab the first designation and its first tier as defaults
    const firstType = Object.keys(PLANET_DATA)[0];
    const firstTier = Object.keys(PLANET_DATA[firstType])[0];
    
    planets.push({ id, type: firstType, tier: firstTier, hab: "80-100", asc: 0 });
    renderPlanets();
}

function updatePlanet(id, field, value) {
    const planet = planets.find(p => p.id === id);
    if (planet) {
        planet[field] = value;
        // If designation changes, reset the tier to prevent looking up a non-existent tier
        if (field === 'type') {
            const validTiers = Object.keys(PLANET_DATA[value]);
            if (!validTiers.includes(planet.tier)) {
                planet.tier = validTiers[0]; 
            }
        }
        renderPlanets();
    }
}

function removePlanet(id) {
    planets = planets.filter(p => p.id !== id);
    renderPlanets();
}

function renderPlanets() {
    const container = document.getElementById('planet-container');
    container.innerHTML = '';
    
    planets.forEach(p => {
        const div = document.createElement('div');
        div.style.marginBottom = '10px';
        
        // 1. Build Type Dropdown dynamically from PLANET_DATA keys
        let typeOptions = Object.keys(PLANET_DATA).map(type => 
            `<option value="${type}" ${p.type === type ? "selected" : ""}>${type}</option>`
        ).join('');
        
        // 2. Build Tier Dropdown dynamically based on the current selected Type
        let tierOptions = Object.keys(PLANET_DATA[p.type]).map(tier => 
            `<option value="${tier}" ${p.tier === tier ? "selected" : ""}>${tier}</option>`
        ).join('');

        div.innerHTML = `
            <select onchange="updatePlanet(${p.id}, 'type', this.value)">
                ${typeOptions}
            </select>
            <select onchange="updatePlanet(${p.id}, 'tier', this.value)">
                ${tierOptions}
            </select>
            <select onchange="updatePlanet(${p.id}, 'hab', this.value)">
                <option value="80-100" ${p.hab==="80-100"?"selected":""}>80-100% Hab</option>
                <option value="50-79" ${p.hab==="50-79"?"selected":""}>50-79% Hab</option>
                <option value="0-49" ${p.hab==="0-49"?"selected":""}>0-49% Hab</option>
            </select>
            Ascension Level: <input type="number" min="0" max="10" value="${p.asc}" onchange="updatePlanet(${p.id}, 'asc', parseFloat(this.value))" style="width: 50px;">
            <button onclick="removePlanet(${p.id})" style="background: #cc0000; padding: 5px 10px; margin-left: 10px;">Remove</button>
        `;
        container.appendChild(div);
    });
}

// --- CALCULATION ENGINE ---
function calculateEconomy() {
    const buffs = {
        flatBasicPlanet: parseFloat(document.getElementById('buff-flat-basic-planet').value) || 0,
        flatEnergyTurn: parseFloat(document.getElementById('buff-flat-energy-turn').value) || 0,
        pctBasicPlanet: (parseFloat(document.getElementById('buff-pct-basic-planet').value) || 0) / 100,
        pctBasicTurn: (parseFloat(document.getElementById('buff-pct-basic-turn').value) || 0) / 100
    };

    let totalOutput = {};

    planets.forEach(p => {
        // Safe lookup: skip if data somehow isn't found
        const baseData = PLANET_DATA[p.type] && PLANET_DATA[p.type][p.tier];
        if (!baseData) return;

        let habPenalty = 0;
        let perPlanetBuffsActive = true;
        if (p.hab === "0-49") { habPenalty = 0.70; perPlanetBuffsActive = false; }
        if (p.hab === "50-79") { habPenalty = 0.30; }
        
        const ascBonus = p.asc * 0.05;

        // Process Production
        if (baseData.prod) {
            for (const [res, amount] of Object.entries(baseData.prod)) {
                let isBasic = RESOURCE_TYPES.basic.includes(res);
                let flatAdd = (isBasic && perPlanetBuffsActive) ? buffs.flatBasicPlanet : 0;
                let currentBase = amount + flatAdd;
                let pctAdd = isBasic ? buffs.pctBasicPlanet : 0;
                let multiplier = 1 - habPenalty + ascBonus + pctAdd;

                totalOutput[res] = (totalOutput[res] || 0) + (currentBase * multiplier);
            }
        }

        // Process Upkeep
        if (baseData.upkeep) {
            for (const [res, amount] of Object.entries(baseData.upkeep)) {
                totalOutput[res] = (totalOutput[res] || 0) - amount;
            }
        }
    });

    // Apply Turn-Level Buffs
    if (totalOutput['energy'] !== undefined) {
        totalOutput['energy'] += buffs.flatEnergyTurn;
    }

    RESOURCE_TYPES.basic.forEach(res => {
        if (totalOutput[res] !== undefined) {
            totalOutput[res] = totalOutput[res] * (1 + buffs.pctBasicTurn);
        }
    });

    // Render Output
    let outputString = "TOTAL TURN OUTPUT:\n--------------------\n";
    // Sort keys alphabetically for cleaner reading
    const sortedResources = Object.keys(totalOutput).sort();
    
    sortedResources.forEach(res => {
        // Format names nicely (e.g., volatile_motes -> Volatile Motes)
        let formattedName = res.replace('_', ' ').toUpperCase();
        outputString += `${formattedName}: ${totalOutput[res].toFixed(2)}\n`;
    });
    
    document.getElementById('output-display').innerText = outputString;
}
