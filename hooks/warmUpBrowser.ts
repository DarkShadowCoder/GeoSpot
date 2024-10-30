import React, { useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser'

export default function usewarmUpBrowser() {
    useEffect(() => {
        void WebBrowser.warmUpAsync();
        return () => {
            void WebBrowser.coolDownAsync();
        };
    }, [])
};
