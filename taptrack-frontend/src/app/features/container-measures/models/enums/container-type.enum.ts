/**
 * Equivalente ao enum ContainerType do backend.
 * Representa o tipo do recipiente, podendo variar conforme a categoria.
 */
export enum ContainerType {
    // --- GLASS (Copos) ---
    TASTER = 'TASTER',      // Copo de Degustação
    HALF = 'HALF',          // Meio Copo de Cerveja
    PINT = 'PINT',          // Copo de Cerveja
    IMPERIAL_PINT = 'IMPERIAL_PINT', // Copo de Cerveja Imperial
    TULIP = 'TULIP',        // Copo de Cerveja Tulipa
    SNIFTER = 'SNIFTER',    // Copo de Cerveja Snifter
    WEIZEN = 'WEIZEN',      // Copo de Cerveja Weizen
    STEIN = 'STEIN',        // Copo de Cerveja Stein
    MINI_GROWLER = 'MINI_GROWLER',  // Meio Growler

    // --- BOTTLE / KEG (Garrafas e Barril) ---
    STUBBY = 'STUBBY',      // Garrafa curta
    BOMBER = 'BOMBER',      // Garrafa Bomber
    CROWLER = 'CROWLER',    // Garrafa Crowler
    HOWLER = 'HOWLER',      // Garrafa Howler
    GROWLER = 'GROWLER',    // Garrafa Growler
    MINI_KEG = 'MINI_KEG'   // Meio Barril
}
