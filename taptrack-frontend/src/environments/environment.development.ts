export const environment = {
    production: false,
    /**
     * O Frontend deve se comunicar sempre via API Gateway.
     * O Gateway repassa internamente para o Microsserviço correto.
     * Assim, o Frontend NÃO deve conhecer as demais portas
     */
    apiUrl: 'http://localhost:8080/api/v1'
};
