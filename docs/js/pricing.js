const pricingData = [
    { name: "Per-Task Commissions", price: "$5+", desc: "Individual features" },
    { name: "Simple Gameplay", price: "$50+", desc: "Basic game loops, e.g, obby/tycoon" },
    { name: "Medium Gameplay", price: "$150+", desc: "Medium Difficulty Gameplay, e.g, platformer/racing/pet simulator" },
    { name: "Complex Gameplay", price: "$500+", desc: "Complex Gameplay, e.g, combat/complex fps/open world/etc" },
	{ name: "Code Review", price: "$5 - $30+", desc: "Project dependent" },
    { name: "Bug Fixing", price: "$5 - $50+", desc: "Project dependent" },
    { name: "Architectural Redesign", price: "$50 - $500+", desc: "Project dependent" }
];

export function initPricing() {
    const pGrid = document.getElementById('pricing-grid');
    if (!pGrid) return;

    pricingData.forEach(p => {
        pGrid.innerHTML += `
            <div class="pricing-card">
                <div>
                    <h4>${p.name}</h4>
                    <p>${p.desc}</p>
                </div>
                <span>${p.price}</span>
            </div>`;
    });
}
