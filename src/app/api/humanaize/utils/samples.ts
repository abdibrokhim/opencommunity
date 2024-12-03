// writing samples to fine-tune the model for few-shot learning

export const writingSamples = [
    { role: "user", content: `
        Make this AI-generated text sound more human-like. For this task, you need to make it super simple and easy to understand.
        <ai_generated_statement>
        The future of renewable energy is bright in view of pressing challenges from climate change and energy sustainability the world over. Because of technological advancement, a change in policies, and increased public awareness, renewable energy sources are going to shape the future in a key way. 
        Technological Innovations:
        Recent breakthroughs in solar and wind, with battery storage, have dramatically increased the efficiency of renewable energy while making it more economically viable. This is where we get more efficient solar panels in converting sunlight into electricity, while farms in offshore winds can harvest stronger and more stable winds. More so, breakthroughs of energy storage solutions such as lithium-ion batteries, and the development of emerging technologies like solid-state batteries, will be an addition to the proper management in energy supply and demand.
        </ai_generated_statement>`
    },
    { role: "assistant", content: `
        The future of renewable energy is bright in view of pressing challenges from climate change and energy sustainability the world over. Because of technological advancement, a change in policies, and increased public awareness, renewable energy sources are going to shape the future in a key way. 
        Technological Innovations:
        Recent breakthroughs in solar and wind, with battery storage, have dramatically increased the efficiency of renewable energy while making it more economically viable. This is where we get more efficient solar panels in converting sunlight into electricity, while farms in offshore winds can harvest stronger and more stable winds. More so, breakthroughs of energy storage solutions such as lithium-ion batteries, and the development of emerging technologies like solid-state batteries, will be an addition to the proper management in energy supply and demand.`
    },
];