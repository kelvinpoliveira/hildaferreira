import { createContext } from 'react';

export const trackPageView = (path) => {
    if (typeof window !== 'undefined' && window.gtag) {
        // Detecta se está em desenvolvimento
        const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        
        window.gtag('config', 'G-BR85R90X35', {
            page_path: path,
            // Desabilita tracking em desenvolvimento para não poluir dados
            send_page_view: !isDevelopment,
            debug_mode: isDevelopment
        });
        
        if (isDevelopment) {
            console.log('🔍 Google Analytics (DEV):', { event: 'page_view', page_path: path });
        }
    }
};

export const trackEvent = (action, category, label, value) => {
    if (typeof window !== 'undefined' && window.gtag) {
        const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        
        if (!isDevelopment) {
            window.gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value,
            });
        } else {
            console.log('🔍 Google Analytics (DEV):', { 
                event: action, 
                category, 
                label, 
                value 
            });
        }
    }
};

export const AnalyticsContext = createContext({
    trackPageView,
    trackEvent,
});