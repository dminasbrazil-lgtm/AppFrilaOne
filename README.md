import React, { useState, useEffect, useRef, useCallback } from "react";

// Tokens centralizados para manter o estilo idêntico em todas as abas
const tokens = {
  primary: "#FF4D00", primaryLight: "#FF6B35", primaryGlow: "rgba(255,77,0,0.25)",
  dark: "#0A0E1A", dark2: "#111827", dark3: "#1A2234", card: "#1E2A3A",
  border: "rgba(255,255,255,0.07)", text: "#F0F4FF", muted: "#6B7A99",
  green: "#00D68F", blue: "#4D9FFF", yellow: "#FFB800", red: "#FF4757", purple: "#9B5DFF"
};

// ... [Aqui você manteria o restante dos seus mocks e lógica de slides já organizada] ...

// DICA PARA A HOSPEDAGEM: 
// Ao usar esta versão, o React conseguirá processar as strings de estilo sem quebrar.
// Se você notar qualquer falha no layout, é porque alguma tag </div> ficou aberta.
// Sempre verifique se o número de <div...> é igual ao número de </div>.
